import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ArticlesView from '../views/ArticlesView.vue'

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
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
