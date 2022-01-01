<template>
  <div class="section-panel" :class="{'section-bg': index % 2 === 1}" :id="data.path">
    <div v-if="data.summary">
      <div class="panel-title-wrap">
        <div class="panel-title">{{data.title}}概述</div>
        <img class="title-line" src="../../assets/img/service/title-line.png" alt="">
      </div>
      <div v-for="(summary, index) in data.summary" :key="index" class="panel-desc">{{summary}}</div>
    </div>

    <div style="margin-top: 32px;" v-if="data.earnList && data.earnList.length">
      <div class="panel-title-wrap">
        <div class="panel-title">{{data.title}}收益</div>
      </div>
      <ul class="service-list flex">
        <li class="service-item flex flex-cross-center" v-for="(earnItem, i) in data.earnList" :key="i">
          <img class="service-icon" src="../../assets/img/service/security-check/stcs-icon-1.png" alt="">
          <div class="service-desc">
            <div class="service-row" v-for="(item, j) in earnItem.list" :key="j">{{item}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.section-panel {
  width: 916px;
  margin-top: 45px;
  padding-left: 20px;
  padding-right: 20px;
  &.section-bg {
    padding: 20px 20px 42px;
    background-color: #f5f5f5;
    .panel-desc {
      font-size: 16px;
      color: #5d5d5d;
    }
  }
  .panel-title-wrap {
    margin-bottom: 30px;
    font-size: 0;
    .panel-title {
      font-size: 24px;
      font-weight: bold;
      color: #000;
    }
    .title-line {
      width: 100%;
      height: 7px;
      margin-top: 10px;
    }
  }
  .panel-desc {
    font-size: 16px;
    color: #999;
  }
}

.service-list {
  .service-item {
    width: 33.33%;
    margin-left: 24px;
    .service-icon {
      width: 92px;
      height: 92px;
    }
    .service-desc {
      margin-left: 10px;
      .service-row {
        font-size: 14px;
      }
    }
  }
}

.section-header {
  height: 138px;
  padding: 30px 40px;
  .panel-title-wrap {
    margin-bottom: 18px;
  }
  .panel-title {
    padding-bottom: 8px;
    border-bottom: 1px solid #e8e8e8;
  }
}
</style>
