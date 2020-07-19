<template>
  <div class="vwWrapper">
    <wrap-head></wrap-head>
    <video-player></video-player>
    <wrap-report></wrap-report>
    <el-divider></el-divider>
    <wrap-comments></wrap-comments>
  </div>
</template>
<script>
import WrapHead from "./WrapHead";
import VideoPlayer from "../../../components/Common/VideoPlayer";
import WrapReport from "./WrapReport";
import WrapComments from "./WrapComments";
export default {
  name: "VideoWrap",
  components: {
    WrapHead,
    VideoPlayer,
    WrapReport,
    WrapComments
  }
};
</script>
<style lang="less" scoped>
.vwWrapper {
  display: flex;
  flex-direction: column;
  width: 638px;
  .el-divider--horizontal {
    margin: 0;
  }
}
</style>