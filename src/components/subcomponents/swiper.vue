<template>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.url" alt :class="{full: isfull}">
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    props:['lunbotuList','isfull']
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    // &:nth-child(1) {
    //   background-color: rgb(71, 33, 158);
    // }
    // &:nth-child(2) {
    //   background-color: rgb(5, 172, 144);
    // }
    // &:nth-child(3) {
    //   background-color: rgb(9, 66, 47);
    // }
    background-color: #fff;
    text-align: center;
  }
  img {
    // width: 100%;
    height: 100%;
  }
}
.full{
  width:100%
}
</style>
