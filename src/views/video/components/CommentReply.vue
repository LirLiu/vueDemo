// 用户回复内容组件
<template>
  <div class="crWrapper">
    <el-avatar></el-avatar>
    <p>aufhai</p>
    <comment-info></comment-info>
  </div>
</template>
<script>
import CommentInfo from "../../../components/Common/CommentInfo";
export default {
  name: "CommentReply",
  components: {
    CommentInfo
  }
};
</script>
<style lang="less" scoped>
.crWrapper {
  display: flex;
}
</style>