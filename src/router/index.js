import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Index')
const Collection = () => import('views/home/Index')
const Car = () => import('views/car/Index')
const Mine = () => import('views/car/Index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/collection',
    name: 'collection',
    component: Collection
  },
  {
    path: '/collection',
    name: 'collection',
    component: Car
  },
  {
    path: '/collection',
    name: 'collection',
    component: Mine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
