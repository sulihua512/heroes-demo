import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import VueRouter from 'vue-router'
// 注册
Vue.use(VueRouter)
// 准备组件
import HeroesList from './views/HeroesList'
import ZbList from './views/ZbList'
import JnList from './views/JnList'

// 定义路由规则
const routes = [
  { path: '/', redirect: '/heroes' },
  { path: '/heroes', component: HeroesList },
  { path: '/zblist', component: ZbList },
  { path: '/jnlist', component: JnList }
]
// 路由初始化
const router = new VueRouter({ routes, linkExactActiveClass: 'active' })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
