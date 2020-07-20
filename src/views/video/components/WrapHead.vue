左侧头部视频标题等组件
<template>
  <div class="whWrapper">
    <router-link to="#">
      <el-tag class="whTag">标签</el-tag>
    </router-link>
    <h1>视频标题</h1>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="whBreadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">服饰</el-breadcrumb-item>
      <el-breadcrumb-item>换装</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="whBottom">
      <span>2.1万播放</span>
      <span>212弹幕</span>
      <span>未经作者授权，禁止转载</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "WrapHead"
};
</script>
<style lang="less" scoped>
.whWrapper {
  height: 80px;
  margin-bottom: 16px;
  h1 {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
  }
  .whTag {
    height: 24px;
    line-height: 24px;
    margin-right: 10px;
  }
  .whBottom {
    font-size: 12px;
    color: #999999;
    margin-top: 10px;
    span {
      margin-right: 10px;
    }
  }
}
</style>
<style lang='less'>
.whBreadcrumb {
  margin-top: 10px;
  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    font-weight: normal;
    color: #999999;
    font-size: 12px;
  }
}
</style>