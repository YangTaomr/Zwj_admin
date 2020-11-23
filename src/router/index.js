import Vue from 'vue'
import VueRouter from 'vue-router'
// 登录路由
import Login from '../views/login/index.vue'
// 首页路由
import Home from '../views/Home.vue'
import Index from '../views/index/index.vue'
// 会员路由
import Member from '../views/member/index.vue'
// 供应商路由
import Supplier from '../views/supplier/index.vue'
// 商品路由
import Goods from '../views/goods/index.vue'
// 员工路由
import Staff from '../views/staff/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/home',
    name:'Home',
    redirect: '/index',
    component:Home,
    beforeEnter(to, from, next){
      if(sessionStorage.getItem('token')){
        next()
      }else{
        next('/')
      }
    },
  },
  {
    path:'/index',
    component:Home,
    children:[
      {
        path:'/',
        component:Index
      }
    ]
  },
  {
    path:'/member',
    component:Home,
    children:[
      {
        path:'/',
        component:Member,
        meta:{
          title:'会员管理'
        }
      }
    ]
  },
  {
    path:'/supplier',
    component:Home,
    children:[
      {
        path:'/',
        component:Supplier,
        meta:{
          title:'供应商管理'
        }
      }
    ]
  },
  {
    path:'/goods',
    component:Home,
    children:[
      {
        path:'/',
        component:Goods,
        meta:{
          title:'商品管理'
        }
      }
    ]
  },
  {
    path:'/staff',
    component:Home,
    children:[
      {
        path:'/',
        component:Staff,
        meta:{
          title:'员工管理'
        }
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router