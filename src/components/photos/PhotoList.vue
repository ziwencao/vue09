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
            @click="tab = 0"
          >美女</a>
          <a
            class="mui-control-item"
            href="#item2mobile"
            data-wid="tab-top-subpage-2.html"
            @click="tab = 1"
          >体育</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">科技</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">IT</a>
        </div>
      </div>
    </div>

    <div v-if="tab===0">
      <router-link
        to="phtotAlart"
        tag="div"
        v-for="item in photolist"
        :key="item.url"
        class="mui-card"
      >
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
          <p class="mui-card-link">Like</p>
          <p class="mui-card-link">Comment</p>
          <p class="mui-card-link">Read more</p>
        </div>
      </router-link>
    </div>
    <div v-if="tab===1" class="dd">
      <router-link
        :to="'/home/photoinfo/'+item.docid"
        tag="div"
        v-for="item in sportslist"
        :key="item.docid"
        class="mui-card"
      >
      <!-- <infodata :></infodata> -->
        <!--页眉，放置标题-->
        <div class="mui-card-header mui-card-media">
          <img :src="item.picInfo[0].url">
          <div class="mui-media-body">小M
            <p>发表于 {{item.ptime}}</p>
          </div>
        </div>
        <!--内容区-->
        <div
          class="mui-card-header mui-card-media"
          :style="'height:106vw;background-image:url('+item.picInfo[0].url+')'"
        ></div>

        <!--页脚，放置补充信息或支持的操作-->
        <div class="mui-card-footer">
          <p class="mui-card-link">{{item.title}}</p>
          <!-- <p class="mui-card-link">Comment</p> -->
          <p class="mui-card-link">{{item.tag}}</p>
        </div>
      </router-link>
    </div>
    <h3>图片列表</h3>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      photolist: [],
      sportslist: [],
      tab: 0
    };
  },
  created() {
    this.getAllCategory();
    this.getAllSports();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http.get("https://www.apiopen.top/meituApi").then(result => {
        if (result.status === 200) {
          this.photolist = result.body.data;
          // console.log(this.photolist);
        } else {
          Toast("加载图片失败！");
        }
      });
    },
    getAllSports() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        if (result.status === 200) {
          this.sportslist = result.body.data.sports;
        } else {
          Toast("加载图片失败！");
        }
        // console.log(result);
      });
    },
    phtotAlart() {
      Toast("图片详情没有内容！")
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y; /*消除滑动警告的*/
}
</style>
