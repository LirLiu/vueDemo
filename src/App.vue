<template>
  <div id="app">
    <global-head></global-head>
    <router-view></router-view>
  </div>
</template>
<script>
import GlobalHead from "./components/GlobalHeader/index";

export default {
  components: {
    GlobalHead
  }
};
</script>
<style lang="less">
@import "./assets/css/global.less";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
