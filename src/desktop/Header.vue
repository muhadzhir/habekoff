<template>
  <div class="header-wrapper">
    <div class="header container">
      <div class="header-logo">
        <img src="@/assets/img/naturpack.png" />
      </div>
      <div class="header-menu">
        <div class="header-menu-items">
          <router-link v-for="(menuItem, i) in headerMenuItems" :key="i" class="header-menu-item" :to="menuItem.link">
            {{ menuItem.title }}
          </router-link>
        </div>
      </div>
      <div class="header-contacts">
        +7 900 000 00 00
      </div>
    </div>
  </div>
</template>
<script>
const headerMenuItems = [
  { link: {name: 'Home'}, title: 'Главная'} ,
  { link: {name: 'Production'}, title: 'Продукция'} ,
  { link: {name: 'OurMission'}, title: 'Наша миссия' },
  { link: {name: 'Buy'}, title: 'Купить' },
]
  export default {
    data() {
      return {
        headerMenuItems
      }
    }
  }
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  font-size: 20px;
  color: #fff;
  &-wrapper {
    margin: 0 auto;
    position: sticky;
    top: 0px;
    background-color: rgb(134, 119, 111);
  }
  &-logo {
    & img {
      height: 60px;
    }
  }
  &-menu {
    &-item {
      color: #fff;
      margin-right: 50px;
      text-decoration: none;
    }
    &-items {
      display: flex;
    }
  }
  &-contacts {

  }
}
</style>
