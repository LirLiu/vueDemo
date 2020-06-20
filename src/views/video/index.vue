<template>
  <div>
    <div>
      <div>
        <h1>视频标题</h1>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">服饰</el-breadcrumb-item>
          <el-breadcrumb-item>换装</el-breadcrumb-item>
        </el-breadcrumb>
        <span>2.1万播放 212弹幕</span>
        <span>未经作者授权，禁止转载</span>
      </div>
      <div>
        <el-avatar src="../../assets/image/akari.jpg"></el-avatar>
        <span>名字</span>
        <p>个人标签</p>
        <el-button>充电</el-button>
        <el-button>关注</el-button>
      </div>
    </div>
    <div>
      <video src="../../assets/movie/travel.mp4" controls preload="auto" width="960" height="540" poster="../../assets/image/akari.jpg">
        <source  />
      </video>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoPlay"
};
</script>
<style lang="less" scoped>
</style>