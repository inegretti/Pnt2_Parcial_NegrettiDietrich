import Vue from 'vue'
import App from './App.vue'
import "./form"
import "./bootstrap"
import {router} from "./router"
import "./axios"

Vue.config.productionTip = false

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')
