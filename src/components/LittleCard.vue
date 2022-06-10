<template>
  <div class="little-card">
    <div class="little-card-content">
      <span class="little-card-title">
        {{ title }}
      </span>
      <span class="little-card-text">
        {{ text }}
      </span>
    </div>
    <div class="little-card-img">
      <img :src="imgSrc" />
    </div>
  </div>
</template>
<script>

export default {
  props: {
    title: String,
    text: String,
    imgSrc: String
  },
  data() {
    return {
      finalText: 'text'
    }
  }
}
</script>
<style lang="scss" scoped>
  .little-card {
    display: flex;
    margin-right: 50px;
    &-content {
      width: 300px;
    }
    &-title {
      display: block;
      color: white;
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    &-text {
      color: rgb(253, 228, 200);
    }
    &-img {
      align-self: center;
      & img {
        width: 100%;
      }
      width: 50px;
    }
    &-content {
      margin-right: 40px;
    }
  }
</style>