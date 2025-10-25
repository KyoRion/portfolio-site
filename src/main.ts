import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'
import analytics from './plugins/analytics'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, vi }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(analytics)

app.mount('#app')
