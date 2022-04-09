import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GeneralInfo from '../views/GeneralInfo.vue'
import ReportAnIssue from '../views/ReportAnIssue.vue'
import Notifications from '../views/Notifications.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/info',
      name: 'info',
      component: GeneralInfo
    },
    {
      path: '/report',
      name: 'report',
      component: ReportAnIssue
    },
    {
      path: '/process-finish',
      name: 'finish',
      component: Notifications
    }
  ]
})

export default router
