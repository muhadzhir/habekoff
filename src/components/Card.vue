<template>
  <div class="card">
    <div class="card-img">
      <img src="@/assets/img/paper-coffe.png" />
    </div>
    <div class="card-content">{{ finalText }}</div>
  </div>
</template>
<script>


export default {
  props: {
    textAnimation: Boolean,
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      textLazy: '',
      maxCounter: 0,
      counter: 0
    }
  },
  computed: {
    finalText() {
      return this.textAnimation ? this.textLazy : this.text
    }
  },
  methods: {
    printAnimation(counter) {
      if (counter > 0) {
        let delay =  this.textLazy.slice(-1) === '_' ? 800 : 700
        setTimeout(() => {
        this.textLazy = this.textLazy.slice(-1) === '_'
          ? this.textLazy.slice(0, -1)
          : `${this.textLazy}_`
          this.printAnimation(counter - 1)
        }, delay)
      }
    },
    textLazyAnimation() {
      setTimeout(() => {
        this.textLazy = this.text.slice(0, this.counter)
        this.counter ++;                     
        if (this.counter <= this.maxCounter + 5) {
            this.textLazyAnimation()
        } else {
          this.printAnimation(6)
        }
      }, 15)
    }
  },
  async mounted() {
    this.maxCounter = this.text.length
    this.textLazyAnimation()
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
    margin-left: 20px;
    margin-bottom: 20px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    background: rgb(204, 153, 106);
    border-radius: 20px;
    &-content {
      color: rgb(253, 228, 200);
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
