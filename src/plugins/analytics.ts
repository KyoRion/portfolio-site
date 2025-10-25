import type { App } from 'vue'
import VueGtag from 'vue-gtag-next'

export default (app: App) => {
  app.use(VueGtag, {
    property: {
      id: 'G-ZGSJX89QFH'
    },
    appName: 'Web portfolio cá nhân',
    pageTrackerScreenviewEnabled: true
  }, router)
}
