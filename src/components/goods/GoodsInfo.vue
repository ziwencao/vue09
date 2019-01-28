<template>
  <div class="goodsinfo-container">

    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <!-- <div class="mui-card-content"> -->
        <!-- <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div> -->
        <cmt-swiper :isfull="isfull" :lunbotuList="lunbotuList"></cmt-swiper>
      <!-- </div> -->
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span></p>
          <p>购买数量：<numbox @getcount="getSelectedCount"></numbox></p>
          
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain >图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from  '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotuList:[],
      isfull:false,
      ballFlag:false,
      selectedCount:1
    }
  },
  created(){
      this.getGoodsInfo()
  },
  
  methods: {
    getGoodsInfo() {
      this.$http
        .get("http://api.apiopen.top/musicRankingsDetails?type=12")
        .then(resultData => {
          if (resultData.status === 200) {
            if (resultData.result === null) {
              return Toast("没有更多数据了");
            }
            resultData.body.result.forEach(item => {
                this.lunbotuList.push({url:item.album_1000_1000});
            })
          } else {
            Toast("获取数据失败！");
          }
        });
    },
    addToShopCar(){
      this.ballFlag = !this.ballFlag
    },
    beforeEnter(el){
      el.style.transform="translate(0,0)"
    },
    enter(el,done){
      el.offsetWidth

      const ballPosition = this.$refs.ball.getBoundingClientRect()
      const badgePosition = document.getElementById("badge").getBoundingClientRect()
      const xDist = badgePosition.left - ballPosition.left
      const yDist = badgePosition.top - ballPosition.top

      el.style.transform = `translate(${xDist}px,${yDist}px)`
      el.style.transition = "all 0.5s cubic-bezier(.77,-0.01,.96,.32)"
      done()
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag
    },
    getSelectedCount(count){
      this.selectedCount = count
      console.log(this.selectedCount)
    }
  },
  components:{
      'cmt-swiper':swiper,
      numbox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  position: relative;
  background-color: #eee;
  overflow: hidden;
  .now_price{
    color: brown;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer{
    display: block;
    button{
      margin: 15px 0;
    }
  }

  .ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 322px;
    left: 146px;
  }
}
</style>
