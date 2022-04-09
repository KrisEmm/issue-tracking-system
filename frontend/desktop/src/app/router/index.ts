import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SolvedIssues from '../views/SolvedIssues.vue'
import SolvingIssue from "../views/SolvingIssue.vue"
import IssueDetails from "../views/IssueDetails.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/issues/solved',
      name: 'solvedIssues',
      component: SolvedIssues
    },
    {
      path:'/issues/pending/:id',
      name: 'solvingIssue',
      component: SolvingIssue
    },
    {
      path:'/issues/solved/:id',
      name: 'issueDetails',
      component: IssueDetails
    }

  ]
})

export default router
