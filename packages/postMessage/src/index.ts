export type EventCallback = (data: any, event?: MessageEvent) => void;
export type ResponseFunction = (data: any, success?: boolean) => void;

export class CrossFrameEventBus {
  private listeners = new Map<string, Set<EventCallback>>();
  private pendingRequests = new Map<string, { resolve: Function; reject: Function }>();

  constructor(
    private targetWindow: Window,
    private targetOrigin: string = '*',
    private debug: boolean = false
  ) {
    this.initListener();
  }

  private initListener() {
    window.addEventListener('message', this.handleMessage);
  }

  private handleMessage = (event: MessageEvent) => {
    // 安全校验（示例）
    // if (event.origin !== this.targetOrigin) return;
    const { type, data, eventId, isRequest } = event.data || {};
    if (!type) return;

    if (this.debug) {
      console.log('[CrossFrame] Received:', event.data);
    }

    // 处理订阅事件
    if (this.listeners.has(type)) {
      this.listeners.get(type)?.forEach(cb => cb(data, event));
    }
    // 处理请求响应
    if (eventId && this.pendingRequests.has(eventId)) {
      const { resolve, reject } = this.pendingRequests.get(eventId)!;
      event.data.success ? resolve(data) : reject(data);
      this.pendingRequests.delete(eventId);
    }
  };

  on(eventType: string, callback: EventCallback) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }
    this.listeners.get(eventType)?.add(callback);
    
    return () => this.off(eventType, callback);
  }

  off(eventType: string, callback: EventCallback) {
    this.listeners.get(eventType)?.delete(callback);
  }

  // 直接触发
  emit(eventType: string, data?: any) {
    this.targetWindow.postMessage({ type: eventType, data }, this.targetOrigin);
  }

  // 包装后再触发 emit 
  request<T = any>(eventType: string, data?: any, timeout = 5000): Promise<T> {
    const eventId = Math.random().toString(36).slice(2);
    return new Promise((resolve, reject) => {
      this.pendingRequests.set(eventId, { resolve, reject });
      this.targetWindow.postMessage(
        { type: eventType, data, eventId, isRequest: true },
        this.targetOrigin
      );

      setTimeout(() => {
        if (this.pendingRequests.has(eventId)) {
          reject(new Error('Request timeout'));
          this.pendingRequests.delete(eventId);
        }
      }, timeout);
    });
  }
  
  // 包装后在注册 on 
  onRequest(eventType: string, handler: (data: any, response: ResponseFunction) => void) {
    this.on(eventType, (data: any, originalEvent: MessageEvent) => {
      // 生成 response 函数
      const response: ResponseFunction = (responseData, success = true) => {
       ( originalEvent.source as Window).postMessage({
          type: `${eventType}_RESPONSE`, // 可选：自动生成响应类型
          data: responseData,
          eventId: originalEvent.data.eventId, // 自动关联 eventId
          success: success
        }, originalEvent.origin);
      };
      
      // 执行用户处理逻辑，并传入 response
      handler(data, response);
    });
  }

  destroy() {
    window.removeEventListener('message', this.handleMessage);
    this.listeners.clear();
  }
}