<template>
  <div class="goods-container">
    <h3>商品列表</h3>
    <div v-for="item in goodslist" :key="item.id" class="mui-card">
      <!-- <div
        class="mui-card-header mui-card-media"
        style="height:69vw;background-image:url(../images/cbd.jpg)"
      ></div>-->
      <video
        class="mui-card-header mui-card-media"
        :poster="item.data.content.data.cover.feed"
        controls
      >
        <source :src="item.data.content.data.playUrl" type="video/mp4">
      </video>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>Posted on January 18, 2016</p>
          <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link">Like</a>
        <a class="mui-card-link">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getMoves();
  },
  methods: {
    getMoves() {
      this.$http
        .get("http://api.apiopen.top/videoCategoryDetails?id=14")
        .then(result => {
          if (result.status === 200) {
            this.goodslist = result.body.result;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-container {
  .mui-card-header.mui-card-media {
    display: block;
    padding: 10px;
  }
  .vid-wrap {
    width: 100%;
    background: #000;
    position: relative;
    padding-bottom: 56.25%; /*需要用padding来维持16:9比例,也就是9除以16*/
    height: 0;
  }
  .vid-wrap video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  video {
    height: 63.5vw;
    width: 94.6vw;
    // background-image:url(../images/cbd.jpg)"
  }
}
</style>
