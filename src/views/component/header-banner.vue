<template>
  <div class="header-banner flex flex-cross-center" :style="{'background-image': `url(${bgurl})`}">
    <div class="page-content">
      <div class="header-content">
        <h3 class="swiper-item-title">{{title}}</h3>
        <div class="swiper-item-desc">{{desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  props: {
    title: String,
    desc: String,
    bgurl: String,
  },
};
</script>

<style lang="scss" scoped>
.header-banner {
  width: 100%;
  height: 640px;
  background-size: 100% 100%;
  background-position: center;
  .header-content {
    width: 760px;
    color: #fff;
    .swiper-item-title {
      font-size: 30px;
      font-weight: 500;
      color: #FFFFFF;
    }
    .swiper-item-desc {
      margin-top: 20px;
      font-size: 16px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 39px;
    }
  }
}
</style>
