import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/index.vue'
import VideoPlay from '../views/video/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/video',
    name: 'VideoPlay',
    component: VideoPlay
    // component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
