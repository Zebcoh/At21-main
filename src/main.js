import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import HomeView from './views/HomeView.vue' // <- bestaat nu echt

const routes = [{ path: '/', component: HomeView }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(i18n).mount('#app')
