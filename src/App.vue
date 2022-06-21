<template>
  <div>
    <Desktop v-if="isDesktop" />
    <Mobile v-if="isMobile" />
  </div>
</template>

<script>
import Desktop from '@/desktop/Main.vue'
import Mobile from '@/mobile/Main.vue'
import breakPoints from '@/mixin/break-points'
export default {
  name: 'App',
  mixins: [breakPoints],
  components: {Desktop, Mobile}
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
