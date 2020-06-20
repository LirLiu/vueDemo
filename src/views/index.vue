<template>
  <div class="homeWrapper">
    <home-swiper></home-swiper>
    <home-boutique></home-boutique>
    <div>轮播图</div>
    <div>轮播图</div>
  </div>
</template>
<script>
import HomeSwiper from "../components/Home/HomeSwiper";
import HomeBoutique from "../components/Home/HomeBoutique";

export default {
  name: "HomePage",
  components: {
    HomeSwiper,
    HomeBoutique
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