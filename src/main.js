import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/common.css'
import './assets/swiper-6.6.2/swiper-bundle.min.css'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.request.use(config => {
  // console.log(config);
  config.headers = window.sessionStorage.getItem('token')
  return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
