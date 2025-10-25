import type { App } from 'vue'
import VueGtag from 'vue-gtag-next'

export default (app: App) => {
  app.use(VueGtag, {
    property: {
      id: 'G-ZGSJX89QFH' // 🔁 Replace with your GA4 Measurement ID
    }
  })
}
