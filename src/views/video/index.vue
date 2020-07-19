<template>
  <div class="paWrapper">
    <video-wrap></video-wrap>
    <report-con></report-con>
  </div>
</template>
<script>
import VideoWrap from "./components/VideoWrap";
import ReportCon from "./components/ReportCon";

export default {
  name: "VideoPlay",
  components: {
    VideoWrap,
    ReportCon
  }
};
</script>
<style lang="less" scoped>
.paWrapper {
  width: 988px;
  height: 100%;
  margin: 0 auto;
  display: flex;
}
</style>
