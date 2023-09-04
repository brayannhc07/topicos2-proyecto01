import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import IntroductionView from "@/views/IntroductionView.vue";
import ActivityView from "@/views/ActivityView.vue";
import EvaluationView from "@/views/EvaluationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: IntroductionView
    },
    {
      path: '/activity',
      name: 'activity',
      component: ActivityView
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: EvaluationView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: "/results",
      name: "results",
      component: () => import("@/views/ResultsView.vue")
    }
  ]
})

export default router
