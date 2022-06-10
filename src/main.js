import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerBaseComponents } from './registerBaseComponents'

Vue.config.productionTip = false
registerBaseComponents(Vue)
let app = new Vue({
  router,
  render: h => h(App),
})


app.$mount('#app')
