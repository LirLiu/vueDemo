<template>
  <div class="headWrapper">
    <div class="hwLeft">
      <ul>
        <li>
          <router-link to="/">
            <i class="el-icon-soccer"></i>主站
          </router-link>
        </li>
      </ul>
    </div>
    <div class="hwCenter">
      <img src="../../assets/image/resizeApi.png" alt="晴雨视频" />
    </div>
    <div class="hwRight">
      <div>
        <img src="../../assets/image/akari.jpg" alt="头像" />
      </div>
      <div v-if="loginVersion">
        <router-link to="/">个人中心</router-link>
        <router-link to="/">动态</router-link>
        <router-link to="/">会员</router-link>
      </div>
      <div v-else>
        <router-link to="/">登录</router-link>
        <router-link to="/">注册</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GlobalHead",
  data() {
    return {
      loginVersion: false,
      msg: "hello world"
    };
  }
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>