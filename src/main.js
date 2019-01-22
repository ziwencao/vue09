// 入口文件

import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// 导入组件入口
import app from './App.vue'

// 按需导入mint-ui
import { Header,Swipe, SwipeItem ,Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

// 导入vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource)
// 设置请求的根路径
Vue.http.options.root = '/root'
// 全局设置 post 时候表单数据格式组织形式
Vue.http.options.emulateJSON = true;

import './lib/mui/css/mui.css'
// import './lib/mui/js/mui.js'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})