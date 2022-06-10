import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/production',
      name: 'Production',
      component: () => import('./views/Production.vue'),
    },
    {
      path: '/our-mission',
      name: 'OurMission',
      component: () => import('./views/OurMission.vue'),
    },
    {
      path: '/buy',
      name: 'Buy',
      component: () => import('./views/Buy.vue'),
    }
  ]
})
export default router
