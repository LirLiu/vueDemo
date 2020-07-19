<template>
  <div class="rcWrapper">
    <con-head></con-head>
    <div class="rcStealth"></div>
  </div>
</template>
<script>
import ConHead from "./ConHead";
export default {
  name: "ReportCon",
  components: {
    ConHead
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