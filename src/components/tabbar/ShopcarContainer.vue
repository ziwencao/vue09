<template>
  <div class="shopcar-container">
    <!-- 商品列表区域 -->
    <div v-for="(item,i) in cars" :key="item.id" class="goods-list">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" 
            @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img src="http://ww4.sinaimg.cn/large/610dc034jw1f6uv5gbsa9j20u00qxjt6.jpg" alt>
            <div class="info">
              <h1>小米（Mi）双网通版&nbsp;&nbsp;{{ item.id }}</h1>
              <p>
                <span class="price">￥{{Math.floor(item.id/100)}}</span>
                <numbox :goodsid="item.id" :initcount="item.count"></numbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>已勾选商品<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总价<span class="red">{{$store.getters.getGoodsCountAndAmount.amont}}</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
        
      </div>
    </div>
    <p>{{ $store.getters.getGoodsSelected }}</p>
  </div>
</template>

<script>
import shopcar_numbox from "../subcomponents/shopcar_numbox.vue";
export default {
  data() {
    return {
        cars:this.$store.state.car
    };
  },
  methods: {
      remove(id,index){
          this.cars.splice(index,1)
          this.$store.commit("removeFormCar",id)
      },
      selectedChanged(id,val){
        console.log(id+"-----"+val)
        this.$store.commit('updateGoodsSelected',{id,selected:val})
      }
  },
  components: {
    numbox: shopcar_numbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    //   height: 60px;
    }
  }
  .jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red{
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
  h1 {
    font-size: 13px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .price {
      color: brown;
      font-weight: bold;
    }
  }
}
</style>
