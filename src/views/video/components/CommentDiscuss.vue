// 用户评论内容组件
<template>
  <div class="cdWrapper">
    <div class="cdAvatar">
      <el-avatar></el-avatar>
    </div>
    <div class="cdWrap">
      <div>
        <el-tag>标签</el-tag>
        <span>用户昵称</span>
      </div>
      <p>评论内容</p>
      <comment-info></comment-info>
      <comment-reply></comment-reply>
      <div>
        <span>共10条回复,</span>
        <el-button type="text">查看更多</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import CommentInfo from "../../../components/Common/CommentInfo";
import CommentReply from "./CommentReply";
export default {
  name: "CommentDiscuss",
  components: {
    CommentInfo,
    CommentReply
  }
};
</script>
<style lang="less" scoped>
.cdWrapper {
  display: flex;
}
</style>