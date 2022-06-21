<template>
  <div>
    <Desktop v-if="isDesktop" :config="config" />
    <Mobile v-if="isMobile" :config="config" />
  </div>
</template>
<script>

import Mobile from '@/mobile/components/Card'
import Desktop from '@/desktop/components/Card'
import breakPoints from '@/mixin/break-points'

export default {
  mixins: [breakPoints],
  props: ['config'],
  components: {Desktop, Mobile}
}
</script>
