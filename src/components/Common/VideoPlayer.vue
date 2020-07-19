<template>
  <div class="vpWrapper">
    <video controls preload="auto" :loop='loopBoole' poster="../../assets/image/akari.jpg" :autoplay='autoplayBoole'>
      <source src="../../assets/movie/travel.mp4" type="video/mp4" />
    </video>
  </div>
</template>
<script>
export default {
  name: "VideoPlayer",
  data(){
    return {
      loopBoole:false,
      autoplayBoole:false,
    }
  }
};
</script>
<style lang="less" scoped>
.vpWrapper {
  width: 988px;
  height: 556px;
  margin: 0 auto;
  > video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>