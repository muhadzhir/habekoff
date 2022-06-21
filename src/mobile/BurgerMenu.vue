<template>
  <div
    class="header-burger"
    :class="{ expanded }"
    @click="collapseBurger"
  >
    <div
      class="header-burger-cl"
    />
    <div class="b b-top"></div>
    <div class="b b-middle"></div>
    <div class="b b-bottom"></div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('header', ['expanded'])
  },
  methods: {
    ...mapMutations('header', ['setExpanded']),
    collapseBurger () {
      this.setExpanded(!this.expanded)
    }
  }
}
</script>
<style lang="scss" scoped>
  .header {
    &-burger {
      position: absolute;
      width: 20px;
      height: 15px;
      top: 20px;
      right: 22px;
      &-cl {
        width: 100%;
        height: 100%;
      }
      .b {
        position: absolute;
        height: 3px;
        width: 20px;
        background-color: rgb(253, 228, 200);
        transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .b-top {
        transform: rotate(0);
        top: -7px;
        transform-origin: left;
      }
      .b-middle {
        width: 16px;
        left: 2px;
        top: 0px;
      }
      .b-bottom {
        transform-origin: left;
        transform: rotate(0);
        left: 5px;
        width: 10px;
        top: 7px;
      }
      &.expanded {
        .b {
          height: 2px;
        }
        .b-top {
          transition: all .3s linear;
          transform: rotate(45deg);
        }
        .b-middle {
          opacity: 0;
        }
        .b-bottom {
          top: 7px;
          width: 20px;
          left: 0;
          transition: all .3s linear;
          transform: rotate(-45deg);
        }
      }
    }
  }
</style>
