import { createRouter, createWebHistory } from 'vue-router'
import unAuthenticate from '../auth/unAuthenticate'
import authenticate from '../auth/authenticate'

const routes = [
  {
    path: "/signIn",
    name: "Authentication",
    beforeEnter: unAuthenticate,
    component: () => import('../views/app/session/signIn.vue')
  },
  {
    path: "/app",
    name: "HomePageDashboard",
    component: () => import('../containers/layouts/sidebar'),
    redirect: "/app/claims",
    beforeEnter: authenticate,
    children: [
      {
        path: "/app/claims",
        component: () => import('../views/app/claims'),
      },
      {
        path: "/app/payments",
        component: () => import('../views/app/payments'),
      },
      {
        path: "/app/patients",
        component: () => import('../views/app/patients'),
      },
      {
        path: "/app/users",
        component: () => import('../views/app/users'),
      },
      {
        path: "/app/insights",
        component: () => import('../views/app/insights'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
