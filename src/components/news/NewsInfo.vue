<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ newsinfo[index]?newsinfo[index].source:'' }}</h3>
    <p class="subtitle">
      <span>发表时间:{{ newsinfo[index].ptime === 'undefined'?'无': newsinfo[index].ptime}}</span>
      <span>点击: {{ newsinfo[index].tcount }}</span>
    </p>
    <div v-html="newsinfo[index].title" class="content"></div>

    <div class="vid-wrap">
      <video poster="http://img.kaiyanapp.com/2646ec83ed638879a16fa6921108932f.png?imageMogr2/quality/60/format/jpg" controls autoplay loop>
        <source src="http://baobab.kaiyanapp.com/api/v1/playUrl?vid=56887&resourceType=video&editionType=default&source=aliyun" type="video/mp4">
      </video>
    </div>

    <comment-box></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue"; //导入子组件
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: [],
      newsHtml: "",
      index: 0
    };
  },
  created() {
    this.getNewsInfo();
    //   this.getinforesult();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        if (result.body.code === 200) {
          this.newsinfo = result.body.data.dy;
          this.getinforesult();
          console.log(this.link);
        } else {
          Toast("获取新闻失败");
        }
      });
    },
    getinforesult() {
      for (var i = 0; i < this.newsinfo.length; i++) {
        if (this.id === this.newsinfo[i].docid) {
          this.index = i;
          this.link = this.newsinfo[i].link;
        }
      }
    },
    getVideo() {}
  },
  components: {
    //用来注册子组件的节点
    "comment-box": comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: brown;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
  }
  .vid-wrap{
    width:100%;background: #000;
    position:relative;
    padding-bottom:56.25%;    /*需要用padding来维持16:9比例,也就是9除以16*/
    height: 0;
}
.vid-wrap video{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%
}

}
</style>
