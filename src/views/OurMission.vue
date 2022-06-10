<template>
  <div>
    {{ aboutUsLazy }}
  </div>
</template>
<script>

export default {
  data() {
    return {
      counter: 0,
      aboutUsLazy: 'Our Mission'
    }
  }
}
</script>
