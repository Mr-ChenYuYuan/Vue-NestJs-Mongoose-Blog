import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.ts'
import './plugins/avue.js'

import axios from 'axios'

// import EleForm from 'vue-ele-form'

// Vue.use(EleForm)

Vue.config.productionTip = false

//main.ts
const http = axios.create({
  baseURL: "http://localhost:3000"
});
Vue.prototype.$http = http;//vue的axios
Vue.prototype.$httpajax = http;//avue的axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
