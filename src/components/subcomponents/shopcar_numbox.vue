<template>
    <div class="mui-numbox" id="numbox_demo2" data-numbox-step="1" style="height:25px" data-numbox-min="0" data-numbox-max="30">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
mounted(){
    mui(".mui-numbox").numbox()//初始化数字选择框
  },
  methods:{
    countChanged(){
        this.$store.commit("updateGoodsInfo",{id:this.goodsid,count:this.$refs.numbox.value})
    }
  },
  props:['initcount','goodsid']
}

</script>

<style lang="scss" scoped>

</style>
