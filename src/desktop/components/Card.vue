<template>
  <div class="card">
    <div class="card-img">
      <img src="@/assets/img/paper-coffe.png" />
    </div>
    <div class="card-content">{{ aboutUsLazy }}</div>
  </div>
</template>
<script>


export default {
  props: {
    aboutUs: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      aboutUsLazy: '',
      maxCounter: 0,
      counter: 0,

    }
  },
  methods: {
    printAnimation(counter) {
      if (counter > 0) {
        let delay =  this.aboutUsLazy.slice(-1) === '_' ? 800 : 700
        setTimeout(() => {
        this.aboutUsLazy = this.aboutUsLazy.slice(-1) === '_'
          ? this.aboutUsLazy.slice(0, -1)
          : `${this.aboutUsLazy}_`
          this.printAnimation(counter - 1)
        }, delay)
      }
    },
    aboutUsLazyAnimation() {
      setTimeout(() => {
        this.aboutUsLazy = this.aboutUs.slice(0, this.counter)
        this.counter ++;                     
        if (this.counter <= this.maxCounter + 5) {
            this.aboutUsLazyAnimation()
        } else {
          this.printAnimation(6)
        }
      }, 15)
    }
  },
  async mounted() {
    this.maxCounter = this.aboutUs.length
    this.aboutUsLazyAnimation()
  }
}
</script>
<style lang="scss" scoped>
  .card {
    display: flex;
    height: 300px;
    width: 600px;
    overflow: hidden;
    align-content: center;
    background: rgb(204, 153, 106);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    border-radius: 20px;
    &-content {
      display: flex;
      align-items: center;
      margin: 0 20px;
    }
    &-img {
      img {
        height: 100%;
      }
    }
  }
</style>
