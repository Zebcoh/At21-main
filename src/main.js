import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import HomeView from './views/Home.vue'

const routes = [
  { path: '/', component: HomeView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
