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
    <Card :text="aboutUs.slice(0, 50)" />
    <Card :text="aboutUs.slice(0, 100)" :text-animation="true" />
    <Card :text="aboutUs.slice(0, 150)" :text-animation="true" />
    <Card :text="aboutUs.slice(0, 200)" />
    </div>
    <div style="background: rgb(134, 119, 111); padding: 30px 0">
      <div class="container cards">
        <Little-card :title="'Lorem ipsum'" :text="aboutUs.slice(0, 200)" :img-src="'https://fortecup.ru/netcat_template/template/Fortecup2018/img/coffee-cup.svg'" />
        <Little-card :title="'Lorem ipsum'" :text="aboutUs.slice(0, 200)" :img-src="'https://fortecup.ru/netcat_template/template/Fortecup2018/img/product.svg'" />
        <Little-card :title="'Lorem ipsum'" :text="aboutUs.slice(0, 200)" :img-src="'https://fortecup.ru/netcat_template/template/Fortecup2018/img/badge.svg'"  />
      </div>
    </div>
  </div>
</template>
<script>
let aboutUs = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut. Massa massa ultricies mi quis hendrerit dolor magna eget. Blandit cursus risus at ultrices mi tempus. Venenatis lectus magna fringilla urna.'

  export default {
    data() {
      return {
        aboutUs
      }
    }
  }
</script>
<style lang="scss">
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
