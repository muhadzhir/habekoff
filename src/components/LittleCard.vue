<template>
  <div>
    <LittleCardDesktop v-if="isDesktop" :config="config" />
    <LittleCardMobile v-if="isMobile" :config="config" />
  </div>
</template>
<script>

import LittleCardMobile from '@/mobile/components/LittleCard'
import LittleCardDesktop from '@/desktop/components/LittleCard'
import breakPoints from '@/mixin/break-points'

export default {
  mixins: [breakPoints],
  props: ['config'],
  components: {LittleCardDesktop, LittleCardMobile}
}
</script>
