<template>
  <div>
    <Desktop v-if="isDesktop" />
    <Mobile v-if="isMobile" />
  </div>
</template>

<script>
import Desktop from '@/desktop/Main.vue'
import Mobile from '@/mobile/Main.vue'
export default {
  name: 'App',
  data() {
    return {
      isDesktop: document.documentElement.clientWidth > 768,
      isMobile: document.documentElement.clientWidth < 768
    }
  },
  components: {Desktop, Mobile}
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
