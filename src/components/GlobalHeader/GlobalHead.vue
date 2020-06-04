<template>
  <div class="headWrapper">
    <div>
      <div>导航栏图标</div>
      <div>
        <ul>
          <li>首页</li>
          <li>分享帖</li>
          <li>游记</li>
          <li>约伴</li>
          <li>问答</li>
        </ul>
      </div>
    </div>
    <div>
      <div>{{msg}}搜索栏</div>
      <div>登录</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GlobalHead",
  data() {
    return {
      msg: "hello world"
    };
  }
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>