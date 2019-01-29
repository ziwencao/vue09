// 入口文件

import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// --------vuex start-------注册vuex
import Vuex from "vuex"
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state:{//this.$store.state.***
        car:car//将购物车中的商品的数据，用一个数组存起来，在car数组中，存一个对象，{id:商品的id,count:要购买的数量,selected:false}
    },
    mutations:{//this.$store.commit('方法的名称','按需传递唯一的参数')
        addToCar(state,goodsinfo) {
            var flag =false

            state.car.some(item => {
                if(item.id === goodsinfo.id){
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if(!flag){
                state.car.push(goodsinfo)
            }
            // 当更新car之后，把car数组存储到本地的localStorage中
            localStorage.setItem("car",JSON.stringify(state.car))

        },
        updateGoodsInfo(state,goodsinfo){
            state.car.some(item => {
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        removeFormCar(state,id){
            state.car.some((item,i)=>{
                if(item.id == id){
                    state.car.splice(i,1)
                    return true
                }
            })
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id == info.id){
                    item.selected = info.selected
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{//this.$store.getters.***
        getAllCount(state){
            var c = 0
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsSelected(state){
            var o ={}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
            var o ={
                count:0,
                amont:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    o.count += item.count
                    o.amont += item.count*item.price
                }
            })
            return o
        }
    }
})
// --------vuex end-------注册vuex

// 导入组件入口
import app from './App.vue'

// 按需导入mint-ui
import { Header,Swipe, SwipeItem ,Button, Switch} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


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

// 引入bus 非父子组件传值
import bus from './bus.js'
Vue.prototype.bus = bus

import './lib/mui/css/mui.css'
// import './lib/mui/js/mui.js'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})