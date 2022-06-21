<template>
  <div class="home-page">
    <div>
      <div class="cards">
        <div class="banner">
          <div class="banner-background"></div>
          <div class="banner-title">Lorem Ipsum</div>
        </div>
      </div>
    </div>
    <div class="cards container">
      <div class="w-full grid grid-cols-2 gap-3">
        <Card
          v-for="(card, i) in contentCards"
          :key="i"
          :config="card"
        />
      </div>
    </div>
    <div style="background: rgb(134, 119, 111); padding: 30px 0">
      <div class="container cards">
        <div class="w-full grid grid-cols-4 gap-2">
          <Little-card
            v-for="(littleCard, i) in contentLittleCards"
            :key="i"
            :config="littleCard" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
      }
    }
  }
</script>
<style lang="scss">
  .grid-temp-element {
    background: rgb(59, 130, 246);
    padding: 10px 20px;
    border-radius: 8px;
  }
  .home-page {
    background: rgb(253, 228, 200);
  }
  .cards {
    flex-wrap: wrap;
    display: flex;
    margin-bottom: 100px;
  }
  .banner {
    background-image: url('https://thumb.tildacdn.com/tild6266-6437-4631-a630-336164323062/-/format/webp/Panorama-1.jpg');
    height: 541px;
    width: 100%;
    background-position: center bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    &-title {
      font-size: 40px;
      color: white;
      z-index: 1;
    }
    &-background {
      width: 100%;
      height: 541px;
      background: rgba($color: #000000, $alpha: 0.3);
      position: absolute;
    }
  }
</style>
