import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KontaktView from '../views/KontaktView.vue'
import ClankyView from '../views/ClankyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clanky',
      name: 'clanky',
      component: ClankyView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/ClankyView.vue')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: KontaktView
    }
  ]
})

export default router
