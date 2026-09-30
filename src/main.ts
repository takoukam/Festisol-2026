import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import ProgrammePage from './views/ProgrammePage.vue'
import SchoolActivitiesPage from './views/SchoolActivitiesPage.vue'
import ContactPage from './views/ContactPage.vue'
import PartnersPage from './views/PartnersPage.vue'
import ChartePage from './views/ChartePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/a-propos', component: AboutPage },
  { path: '/programme', component: ProgrammePage },
  { path: '/activites-scolaires', component: SchoolActivitiesPage },
  { path: '/charte', component: ChartePage },
  { path: '/contact', component: ContactPage },
  { path: '/partenaires', component: PartnersPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')