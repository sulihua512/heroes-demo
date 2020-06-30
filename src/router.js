// 导入路由组件，定义路由规则，初始化路由，导出路由实例

// 1.导入路由组件
import HeroesList from './views/HeroesList'
import ZbList from './views/ZbList'
import JnList from './views/JnList'
import VueRouter from 'vue-router'
import HeroesAdd from './views/HeroesAdd'
import HeroesEdit from './views/HeroesEdit'
// 注册路由
import Vue from 'vue'
Vue.use(VueRouter)
// 定义路由规则
const routes = [
    { path: '/', redirect: '/heroes' },
    { path: '/heroes', component: HeroesList },
    { path: '/heroes/add', component: HeroesAdd },
    { path: '/heroes/edit', component: HeroesEdit },
    { path: '/zblist', component: ZbList },
    { path: '/jnlist', component: JnList }
]
// 路由初始化
const router = new VueRouter({ routes, linkExactActiveClass: 'active' })

// 4. 导出路由实例
export default router