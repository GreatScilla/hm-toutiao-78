import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Article from '@/views/article'
import NoFound from '@/views/404'
import Image from '@/views/image'
import store from '@/store'
// import store from '../store'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/login', name: 'login', component: Login },
  {
    path: '/',
    // name: 'home',
    component: Home,
    children: [
      { path: '/', name: 'welcome', component: Welcome },
      { path: '/article', name: 'article', component: Article },
      { path: '/image', name: 'image', component: Image }

    ]
  }, { path: '*', name: '404', component: NoFound }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') next()
  if (!store.getUser().token) return next('/login')
  next()
// if (to.path !== '/login' && !store.getUser().token) return next('/login')
// next()
})
export default router
