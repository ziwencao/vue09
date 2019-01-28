<template>
    <div class="mui-numbox" id="numbox_demo2" data-numbox-step="1" data-numbox-min="0" data-numbox-max="30">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox">
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
export default {
mounted(){
    mui(".mui-numbox").numbox()//初始化数字选择框
  },
  methods:{
    countChanged(){
      this.$emit('getcount',parseInt(this.$refs.numbox.value))
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
