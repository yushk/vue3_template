import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/index.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/login/index.vue"),
  // },
  // {
  //   path: "/chart",
  //   name: "Chart",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/chart/index.vue"),
  // },
  // {
  //   path: "/chartHis",
  //   name: "ChartHistory",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/chartHistory/index.vue"),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
