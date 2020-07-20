// 右侧相关推荐组件
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>相关推荐</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "ConRecommend"
};
</script>
<style lang="less" scoped>
</style>