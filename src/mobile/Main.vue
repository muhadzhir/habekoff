<template>
  <div>
    <Header />
    <router-view class="container" />
  </div>
</template>

<script>
import Header from '@/mobile/Header.vue'

  export default {
    components: {Header}
  }
</script>
