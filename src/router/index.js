import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const parseProps = r => ({ id: parseInt(r.params.id) });

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('../views/TaskView.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/IrrCustomers.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CustomerCreate.vue')
    },
    {
      path: '/customers/:id',
      name: 'Customer-detail',
      props: parseProps,
      component: () => import('../views/Customer-detail.vue'),
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router