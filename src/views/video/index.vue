<template>
  <div class="paWrapper">
    <div class="paHead">
      <div class="hdLeft">
        <router-link to="#">
          <el-tag class="paTag">标签</el-tag>
        </router-link>
        <h1>视频标题</h1>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="paBreadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">服饰</el-breadcrumb-item>
          <el-breadcrumb-item>换装</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="ltBottom">
          <span>2.1万播放</span>
          <span>212弹幕</span>
          <span>未经作者授权，禁止转载</span>
        </div>
      </div>
      <div class="hdRight">
        <el-avatar class="rtAvatar" src="../../assets/image/akari.jpg"></el-avatar>
        <div class="rtElse">
          <span>名字</span>
          <p>个人标签</p>
          <el-button class="hdLookBtn">查看</el-button>
          <el-button class="hdCommitBtn">关注</el-button>
        </div>
      </div>
    </div>
    <video-player></video-player>
  </div>
</template>
<script>
import VideoPlayer from "../../components/Common/VideoPlayer";
export default {
  name: "VideoPlay",
  components: {
    VideoPlayer
  }
};
</script>
<style lang="less" scoped>
.paWrapper {
  width: 988px;
  height: 100%;
  margin: 0 auto;
}
.paWrapper .paHead {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .hdLeft {
    h1 {
      display: inline-block;
      font-size: 18px;
      font-weight: 500;
    }
    .paTag {
      height: 24px;
      line-height: 24px;
      margin-right: 10px;
    }
    .ltBottom {
      font-size: 12px;
      color: #999999;
      margin-top: 10px;
      span {
        margin-right: 10px;
      }
    }
  }
  .hdRight {
    display: flex;
    .rtAvatar {
      height: 48px;
      width: 48px;
    }
    .rtElse {
      margin-left: 10px;
      > span {
        font-size: 14px;
        line-height: 20px;
      }
      > p {
        margin: 0;
        margin-top: 5px;
        padding: 0;
        line-height: 16px;
        color: #999999;
        font-size: 12px;
        font-style: normal;
      }
      .hdLookBtn,
      .hdCommitBtn {
        height: 32px;
        padding: 0;
        line-height: 32px;
      }
      .hdLookBtn {
        border: 1px solid #fb7299;
        width: 90px;
      }
      .hdCommitBtn {
        background: #00a1d6;
        color: #fff;
        width: 156px;
      }
    }
  }
}
</style>
<style lang='less'>
.paBreadcrumb {
  margin-top: 10px;
  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    font-weight: normal;
    color: #999999;
    font-size: 12px;
  }
}
</style>
