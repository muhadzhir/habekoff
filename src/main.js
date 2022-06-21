import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerBaseComponents } from './registerBaseComponents'
import content from './content'
Vue.config.productionTip = false
Vue.mixin(content)
registerBaseComponents(Vue)
let app = new Vue({
  store,
  router,
  render: h => h(App),
})


app.$mount('#app')
