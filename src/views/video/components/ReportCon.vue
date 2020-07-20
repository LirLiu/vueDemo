<template>
  <div class="rcWrapper">
    <con-head></con-head>
    <div class="rcStealth"></div>
    <con-recommend></con-recommend>
  </div>
</template>
<script>
import ConHead from "./ConHead";
import ConRecommend from "./ConRecommend";
export default {
  name: "ReportCon",
  components: {
    ConHead,
    ConRecommend
  }
};
</script>
<style lang="less" scoped>
.rcWrapper {
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-left: 30px;
}
.rcStealth {
  height: 556px;
  z-index: -1000;
}
</style>