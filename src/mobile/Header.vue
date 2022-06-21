<template>
  <div
    class="header-wrapper"
    :class="{ expanded }"
    :style="{ maxHeight: maxHeight }"
  >
    <div class="header-logo">
      <img src="@/assets/img/naturpack.png" />
    </div>
    <div class="header-menu">
      <router-link v-for="(menuItem, i) in headerMenuItems" :key="i" class="header-menu-item" :to="menuItem.link">
        {{ menuItem.title }}
      </router-link>
    </div>
    <BurgerMenu />
  </div>
</template>
<script>

import { headerMenuItems } from '@/content/variables'
import BurgerMenu from './BurgerMenu.vue'
import { mapState } from 'vuex'

export default {
  components: { BurgerMenu },
  computed: {
    ...mapState('header', ['expanded'])
  },
  watch: {
    expanded(val) {
      this.maxHeight = val ? `${this.headerMenuItems.length * 40}px` : '40px'
    }
  },
  data() {
    return {
      maxHeight: '40px',
      headerMenuItems
    }
  }
}
</script>
<style scoped lang="scss">
  .header {
    &-logo {
      padding-top: 5px;
      padding-left: 20px;
      & img {
        height: 30px;
      }
    }
    &-menu {
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      &-item {
        margin-bottom: 10px;
        font-size: 18px;
        display: block;
        color: rgb(253, 228, 200);
        text-decoration: none;
      }
    }
    &-wrapper {
      background-color: rgb(134, 119, 111);
      transition: all .4s linear;
      overflow: hidden;
      &.expanded {
        max-height: 200px;
      }
    }
  }
</style>
