// 评论总组件
<template>
  <div class="wcWrapper">
    <div class="wcPagination">
      <span>共22页</span>
      <el-pagination class="wcSmall" small layout="prev, pager, next" :total="50"></el-pagination>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="按热度排序" name="0">
        <comment-box></comment-box>
        <comment-discuss></comment-discuss>
      </el-tab-pane>
      <el-tab-pane label="按时间排序" name="1">按时间排序</el-tab-pane>
    </el-tabs>
    <div>
      <el-pagination class="wcSmall" small layout="prev, pager, next" :total="50"></el-pagination>
    </div>
    <comment-box></comment-box>
  </div>
</template>
<script>
import CommentDiscuss from "./CommentDiscuss";
import CommentBox from "../../../components/Common/CommentBox";

export default {
  name: "WrapComments",
  data() {
    return {
      activeName: "0"
    };
  },
  components: {
    CommentDiscuss,
    CommentBox
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less" scoped>
.wcWrapper {
  position: relative;
  .wcPagination {
    position: absolute;
    right: 0;
    top: 0;
    line-height: 40px;
    font-size: 12px;
    .wcSmall {
      display: inline-block;
      padding: 0;
    }
  }
}
</style>
<style lang="less">
.wcSmall {
  .btn-prev,
  .btn-next,
  .el-pager li {
    vertical-align: middle;
    font-weight: normal;
  }
}
</style>