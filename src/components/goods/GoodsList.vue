<template>
  <div class="goods-list">
    <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.all_artist_ting_uid" :to="'/home/goodsinfo/'+item.song_id" tag="div">
      <img :src="item.album_1000_1000?item.album_1000_1000:''" alt>
      <h1 class="title">{{'【'+item.title+'】 '+item.author}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.file_duration}}</span>
          <span class="old">{{item.hot}}</span>
        </p>
        <p class="sell">
          <span>{{ item.country+'-'+item.language}}</span>
          <span>{{item.publishtime}}</span>
        </p>
      </div>
    </router-link> -->

    <div class="goods-item" v-for="item in goodslist" :key="item.all_artist_ting_uid" @click="goDetail(item.song_id)">
      <img :src="item.album_1000_1000?item.album_1000_1000:''" alt>
      <h1 class="title">{{'【'+item.title+'】 '+item.author}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.file_duration}}</span>
          <span class="old">{{item.hot}}</span>
        </p>
        <p class="sell">
          <span>{{ item.country+'-'+item.language}}</span>
          <span>{{item.publishtime}}</span>
        </p>
      </div>
    </div>

    <button
      @click="jiazaigengduo"
      data-v-6d8edfc6
      class="mint-button mint-button--danger mint-button--large is-plain"
    >
      <!---->
      <label class="mint-button-text">加载更多</label>
    </button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      goodslist: [],
      pages: 11
    };
  },
  created() {
    this.getgoodslist();
  },
  methods: {
    getgoodslist() {
      this.$http
        .get("http://api.apiopen.top/musicRankingsDetails?type=" + this.pages)
        .then(resultData => {
          if (resultData.status === 200) {
            if (resultData.result === null) {
              return Toast("没有更多数据了");
            }
            this.goodslist = this.goodslist.concat(resultData.body.result);
          } else {
            Toast("获取数据失败！");
          }
        });
    },
    jiazaigengduo() {
      this.pages += 1;
      this.getgoodslist();
      console.log(this.pages);
    },
    goDetail(id) {//使用js的形式进行路由跳转
        this.$router.push('/home/goodsinfo/'+id)
        this.bus.$emit('change','this.goodslist')
    }
  },
  beforeDestroy(){
    this.bus.$emit('change','this.goodslist')
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #dcdcdc;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
