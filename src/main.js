import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons' // icon
console.log('环境', process.env.NODE_ENV)
import './permission'
if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
Vue.use(ElementUI, { size: 'medium', zIndex: 3000 })
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
