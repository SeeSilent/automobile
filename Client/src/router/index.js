import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/login",
    name : "Login",
    component:()=> import("../views/login/Login")  
  },
  {
    path:"/register",
    name : "Register",
    component:()=> import("../views/register/Register")
  },
  {
    path:"/xiangqing/:_id",
    name : "Xiangqing",
    component:()=> import("../views/xiangqing/Xiangqing")
  },
  {
    path:"/shopcar",
    name : "Shopcar",
    component:()=> import("../views/shopcar/Shopcar")
  },
  {
    path:"/moneyless",
    name : "Moneyless",
    component:()=> import("../views/moneyless/Moneyless")
  },
  {
    path:"/myshop",
    name : "Myshop",
    component:()=> import("../views/myshop/Myshop")
  },
  {
    path:"/houtai",
    name : "Houtai1",
    component:()=> import("../views/houtai/Houtai1")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
