// 点赞分享组件
<template>
  <div class="wrWrapper">
    <div class="wrLeft">
      <span>
        <i class="el-icon-edit"></i>11
      </span>
      <span>
        <i class="el-icon-share"></i>123
      </span>
      <span>
        <i class="el-icon-delete"></i>432
      </span>
    </div>
    <div class="wrRight">
      <span>
        稿件投诉
        <i class="el-icon-more"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "WrapReport"
};
</script>
<style lang="less" scoped>
.wrWrapper {
  display: flex;
  justify-content: space-between;
  .wrLeft {
    > span {
      display: inline-block;
      line-height: 32px;
      margin-right: 20px;
      > i {
        display: inline-block;
        margin-right: 5px;
        font-size: 28px;
        vertical-align: middle;
      }
    }
  }
  .wrRight {
    display: inline;
  }
}
</style>