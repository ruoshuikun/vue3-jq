import { createRouter, createWebHashHistory } from 'vue-router'
import Home from 'views/Home/Home'
import About from 'views/About'
import Layout from 'comps/Layout/index'
import ErrorPage from 'views/Error/404'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },

      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage
  },
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
