import Vue from 'vue'
import VueRouter from 'vue-router'
import GlobalHome from '../components/Home/GlobalHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'GlobalHome',
    component: GlobalHome
  }
  // {
  //   path: '/',
  //   name: 'HomePage',
  //   component: HomePage
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
