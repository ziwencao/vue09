<template>
  <div>
    <!-- 轮播图区域 -->
    <swiper :isfull="isfull" :lunbotuList="lunbotuList"></swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
export default {
  data() {
    return {
      lunbotuList: [], //保存轮播图的数组
      isfull:true
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图的方法
      this.lunbotuList = [];
      this.$http
        .get("http://img.kaiyanapp.com/34b720d05d98c905432e9906d5b9cdf7.jpeg")
        .then(result => {
          if (result.status === 200) {
            this.lunbotuList.push(result);
            // console.log(result)
          } else {
          }
        });
      this.$http
        .get("http://img.kaiyanapp.com/f2b803d3c383bba5a3888b2709160b6e.jpeg")
        .then(result => {
          if (result.status === 200) {
            this.lunbotuList.push(result);
          } else {
          }
        });
      this.$http
        .get("http://img.kaiyanapp.com/d0c736a84af1eca615b911134a414a07.jpeg")
        .then(result => {
          if (result.status === 200) {
            this.lunbotuList.push(result);
          } else {
          }
        });
    }
  },
  components:{
    swiper
  }
};
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9{
  background-color: rgb(255, 255, 255);
  border: none;
  .mui-media-body{
    font-size: 13px;
  }
  img{
    width: 60px;
    height: 60px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: 0;
}
</style>
