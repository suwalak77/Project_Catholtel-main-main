<template>
  <div id="app">
    <!-- ... ส่วนอื่น ๆ ของ template ... -->
    <From></From>
  </div>
</template>

<script>
import From from './From.vue';
// ที่อยู่ของ From.vue

export default {
  components: {
    From: 'components' // ระบุคอมโพเนนต์ที่นำเข้า
  },
  // ... ส่วนอื่น ๆ ของ script ...
}
</script>

<style scoped>
/* สไตล์ CSS สำหรับ App.vue */
</style>
