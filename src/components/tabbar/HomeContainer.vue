<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.url" alt>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图的数组
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
            console.log(this.lunbotuList);
          } else {
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: rgb(71, 33, 158);
    }
    &:nth-child(2) {
      background-color: rgb(5, 172, 144);
    }
    &:nth-child(3) {
      background-color: rgb(9, 66, 47);
    }
  }
  img {
    width: 375px;
    height: 200px;
  }
}
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
