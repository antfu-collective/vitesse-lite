// register vue composition api globally
import 'vue-global-api'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.css'
import 'virtual:windi-utilities.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
const head = createHead()
app.use(head)
app.use(router)
app.mount('#app')
