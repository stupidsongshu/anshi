<template>
  <div class="section-panel text-center section-header">
    <h3 class="panel-title-wrap">
      <div class="panel-title">{{title}}类服务</div>
    </h3>
    <div>服务热线：<span style="color:#0259DC;">021-64181628</span></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.section-panel {
  width: 916px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #f5f5f5;
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
