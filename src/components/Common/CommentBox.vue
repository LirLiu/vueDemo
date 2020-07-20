<template>
  <div class="cbWrapper">
    <div class="cbLeft">
      <el-avatar class="cbAvatar" :src="avatar"></el-avatar>
    </div>
    <div class="cbRight">
      <el-input class="cbTextarea" type="textarea" placeholder="发条友善的评论" v-model="textarea"></el-input>
      <el-button class="cbBtn">发表评论</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommentBox",
  data() {
    return {
      avatar: "#",
      textarea: ""
    };
  }
};
</script>
<style lang="less" scoped>
.cbWrapper {
  display: flex;
  .cbLeft {
    width: 85px;
    text-align: center;
    .cbAvatar {
      width: 48px;
      height: 48px;
    }
  }
  .cbRight {
    width: 553px;
    display: flex;
    .cbBtn {
      width: 70px;
      height: 64px;
      padding: 4px 15px;
      background: #00a1d6;
      white-space: break-spaces;
      color: #ffffff;
      margin-left: 12px;
    }
  }
}
</style>
<style lang="less">
.cbTextarea {
  .el-textarea__inner {
    resize: none;
    height: 64px;
  }
}
</style>