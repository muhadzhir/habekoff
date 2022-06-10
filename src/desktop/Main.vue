<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/desktop/Header.vue'

  export default {
    components: {Header}
  }
</script>
