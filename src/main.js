import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router.js'
// 进行axios的全局挂载
import axios from 'axios'
// 将来通过vue的实例访问$http，其实就是axios。
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
