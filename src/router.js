import VueRouter from 'vue-router'

import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shopcar from './components/tabbar/ShopcarContainer.vue'
import search from './components/tabbar/SearchContainer.vue'

import newslist from './components/news/NewsList.vue'
import newsinfo from './components/news/NewsInfo.vue'

import photolist from './components/photos/PhotoList.vue'
import photoinfo from './components/photos/PhotoInfo.vue'

import goodslist from './components/goods/GoodsList.vue'
import goodsinfo from './components/goods/GoodsInfo.vue'

// 创建路由对象
var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home' ,component: home },
        {path: '/member',component: member},
        {path: '/shopcar',component: shopcar},
        {path: '/search',component: search},
        {path: '/home/newslist',component:newslist},
        {path: '/home/newsinfo/:id',component:newsinfo},
        {path: '/home/photolist',component:photolist},
        {path: '/home/photoinfo/:id',component:photoinfo},
        {path: '/home/goodslist',component:goodslist},
        {path: '/home/goodsinfo/:id',component:goodsinfo}
    ],
    linkActiveClass: 'mui-active'
})

export default router
