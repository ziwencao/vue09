<template>
  <div class="photo-container">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">科技</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">IT</a>
        </div>
      </div>
    </div>

    <div v-for="item in photolist" :key="item.url" class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header mui-card-media">
        <img :src="item.url">
        <div class="mui-media-body">小M
          <p>发表于 2016-06-30 15:30</p>
        </div>
      </div>
      <!--内容区-->
      <div
        class="mui-card-header mui-card-media"
        :style="'height:106vw;background-image:url('+item.url+')'"
      ></div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">
        <a class="mui-card-link">Like</a>
        <a class="mui-card-link">Comment</a>
        <a class="mui-card-link">Read more</a>
      </div>
    </div>
    <h3>图片列表</h3>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
        photolist:[]
    };
  },
  created() {
    this.getAllCategory();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http.get("https://www.apiopen.top/meituApi").then(result => {
        if(result.status === 200){
            this.photolist = result.body.data
            console.log(this.photolist)
        }  else {
            Toast("加载图片失败！")
        }
      });
    }
  }
};
</script>

<style>
* {
  touch-action: pan-y; /*消除滑动警告的*/
}
.photo-container {
    
}
</style>
