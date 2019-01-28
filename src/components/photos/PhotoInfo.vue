<template>
  <div class="photoinfo-container">
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoInfo.ptime }}</span>
      <span>点击：{{ photoInfo.tcount }}</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoInfo.digest"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      infoId: this.$route.params.id,
      photoInfoData: [],
      photoInfo: {},
      slide1: [
        //   {
        //     src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
        //     msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
        //     alt: 'picture1',
        //     title: 'Image Caption 1',
        //     w: 600,
        //     h: 400
        //   },
        //   {
        //     src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
        //     msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
        //     alt: 'picture2',
        //     title: 'Image Caption 2',
        //     w: 1200,
        //     h: 900
        //   }
      ]
    };
  },
  created() {
    this.getPhotoInfoData();
  },
  mounted() {},
  methods: {
    getPhotoInfoData() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        if (result.status === 200) {
          this.photoInfoData = result.body.data.sports;
        } else {
          Toast("加载图片失败！");
        }
        this.getPhotoInfo();
      });
    },
    getPhotoInfo() {
      this.photoInfoData.forEach(item => {
        if (item.docid === this.infoId) {
          this.photoInfo = item;
          // console.log(this.photoInfo);
        }
      });
      this.getPhotoInfoUrl();
    },
    getPhotoInfoUrl() {
      if (!this.photoInfo.picInfo) return;
      this.photoInfo.picInfo.forEach((item, index) => {
        this.slide1.push({
          src: item.url,
          msrc: item.url,
          alt: "picture" + index,
          title: "Image Caption " + index,
          w: 600,
          h: 400
        });
      });
    },
    handleClose() {
      close;
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 16px;
  }
  .thumbs {
    img {
      margin: 6px;
      box-shadow: 0 0 8px #999;
    }
    figure {
      margin: 1em 40px;
    }
  }
}
</style>
