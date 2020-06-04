<template>
  <div class="homeWrapper">
    <home-swiper></home-swiper>
    <div>轮播图</div>
    <div>轮播图</div>
    <div>轮播图</div>
  </div>
</template>
<script>
import HomeSwiper from "./HomeSwiper";

export default {
  name: "GlobalHome",
  components: {
    HomeSwiper
  }
};
</script>
<style lang='less' scoped>
.homeWrapper {
  > div {
    height: 300px;
  }
}
</style>