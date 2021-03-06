import { createRouter, createWebHistory } from 'vue-router'
import unAuthenticate from '../auth/unAuthenticate'
import authenticate from '../auth/authenticate'

const routes = [
  {
    path: "/",
    name: "Landing",
    beforeEnter: unAuthenticate,
    redirect: "/signIn"
  },
  {
    path: "/signIn",
    name: "Authentication",
    beforeEnter: unAuthenticate,
    component: () => import('../views/app/session/new-signIn.vue')
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
      },
      {
        path: "/app/locations",
        component: () => import('../views/app/locations'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
