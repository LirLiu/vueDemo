// 右侧头部用户信息组件
<template>
  <div class="chRight">
    <el-avatar class="chAvatar" src="../../assets/image/akari.jpg"></el-avatar>
    <div class="chElse">
      <span>名字</span>
      <p>个人标签</p>
      <el-button class="chLookBtn">查看</el-button>
      <el-button class="chCommitBtn">关注</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConHead"
};
</script>
<style lang="less" scoped>
.chRight {
  display: flex;
  margin-bottom: 16px;
  height: 80px;
  .chAvatar {
    height: 48px;
    width: 48px;
  }
  .chElse {
    margin-left: 10px;
    > span {
      font-size: 14px;
      line-height: 20px;
    }
    > p {
      margin: 5px 0;
      padding: 0;
      line-height: 16px;
      color: #999999;
      font-size: 12px;
      font-style: normal;
    }
    .chLookBtn,
    .chCommitBtn {
      height: 32px;
      padding: 0;
      line-height: 32px;
    }
    .chLookBtn {
      border: 1px solid #fb7299;
      width: 90px;
    }
    .chCommitBtn {
      background: #00a1d6;
      color: #fff;
      width: 156px;
    }
  }
}
</style>