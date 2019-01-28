<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="item in newslist" :key="item.docid" class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsinfo/'+item.docid">
          <img class="mui-media-object mui-pull-left" :src="item.picInfo.length?item.picInfo[0].url:''">
          <div class="mui-media-body">
            <h1>{{ item.source }}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.ptime }}</span>
              <span>点击：{{item.tcount}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newslist: []
        };
    },
    created() {
        this.getNewsList();
        window.Nlist = this.newslist
    },
    methods: {
        getNewsList(){
            this.$http.get('https://www.apiopen.top/journalismApi').then(result => {
                if(result.body.code === 200){
                    this.newslist = result.body.data.dy
                    // console.log(this.newslist)
                    // console.log(result.body.data.dy[0].picInfo[0].url)
                    // Toast("OK！")
                }else{
                    Toast("获取新闻列表失败！")
                }
                
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
