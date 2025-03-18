<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p>子应用取消主应用的事件监听</p>
      <button @click="cancelEvent">cancel</button>
      <!-- <button @click="getList">监听返回 promise</button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue'

// const offEvent = inject('offEvent')
const childBus = inject('childBus')

function cancelEvent() {
  // offEvent()
}

function fetchMock(name) {
  const res = {
    code: 200,
    data: {
      name,
      age: 22,
      address: '重庆',
    },
  }
  return Promise.resolve(res)
}
function getList() {
  // 注册 Test_R，等待其他应用触发
  childBus.on('Test_R', async (res, event) => {
    const data = await fetchMock(res.name)
    const eventId = event.data.eventId

    event.source.postMessage(
      {
        type: 'Test_Res',
        data,
        eventId: eventId,
        success: true,
      },
      event.origin,
    )
  })
}
onMounted(() => {
  getList()
})
</script>

<style></style>
