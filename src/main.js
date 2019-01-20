// 入口文件
import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// 导入组件入口
import app from './App.vue'

// 按需导入mint-ui
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource)


import './lib/mui/css/mui.css'
// import './lib/mui/js/mui.js'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})