<template>
  <div>
    <MyHeader></MyHeader>

    <MyBanner></MyBanner>

    <div class="section-company-profile">
      <div class="page-content flex flex-cross-center">
        <div class="company-profile-content flex1">
          <div class="company-profile-title">
            <span class="title-zh">公司简介/</span>
            <span class="title-en">company profile</span>
          </div>
          <div class="company-profile-detail">
            <p>安势信息是一家领先的实战创新型网络安全公司，专业的网络安全综合解决方案提供商。</p>
            <p>公司秉承“安全左移，以攻促防”的安全理念，专注于开源治理漏洞，风险检测，安全防御建设和攻防型人才培养，致力于帮助用户先于黑客发现并及时解决安全问题，共同打造一个更安全，更便捷，更美好的互联网世界。</p>
          </div>
        </div>
        <img class="company-profile-img" src="../assets/img/about/about-us.png" alt="">
      </div>
    </div>

    <div class="section-panel section-bg">
      <div class="panel-content flex flex-cross-center flex-main-between">
        <div class="company-info">
          <img class="company-info-icon" src="../assets/img/about/company-vision-icon.png" alt="">
          <ul>
            <li class="company-info-title">企业愿景</li>
            <li class="company-info-content">提供具有国际竞争力的自主创新安全产品和最佳实践服务</li>
          </ul>
        </div>
        <img class="company-info-img" src="../assets/img/about/company-vision.png" alt="">
      </div>
    </div>

    <div class="section-panel">
      <div class="panel-content flex flex-cross-center flex-main-between">
        <img class="company-info-img" src="../assets/img/about/company-mission.png" alt="">
        <div class="company-info">
          <img class="company-info-icon" src="../assets/img/about/company-mission-icon.png" alt="">
          <ul>
            <li class="company-info-title">企业使命</li>
            <li class="company-info-content">帮助客户全面提升其IT基础设施的安全性和生产效能</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section-panel section-bg">
      <div class="panel-content flex flex-cross-center flex-main-between">
        <div class="company-info">
          <img class="company-info-icon" src="../assets/img/about/company-vision-icon.png" alt="">
          <ul>
            <li class="company-info-title">价值观</li>
            <li class="company-info-content">诚信、创新、务实    严格、严肃、严明   沉静、责任、成长</li>
          </ul>
        </div>
        <img class="company-info-img" src="../assets/img/about/company-value.png" alt="">
      </div>
    </div>

    <div class="section-panel">
      <div class="page-content flex flex-cross-center">
        <div class="address-map" id="map-container"></div>
        <div class="address-detail">
          <div class="flex flex-cross-center">
            <img class="address-icon" src="../assets/img/about/address-icon.png" alt="">
            <span class="address-city">上海</span>
          </div>
          <p class="address-row" style="margin-top:30px;">地址：上海市徐汇区云锦路500号绿地汇中心A幢2008室</p>
          <p class="address-row">支持热线：021-64181628</p>
          <p class="address-row">邮箱：info@sectrend.com.cn</p>
          <p class="address-row">网址：www.sectrend.com.cn</p>
        </div>
      </div>
    </div>

    <MyFooter></MyFooter>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initBdMap();
  },
  methods: {
    initBdMap() {
      /* eslint-disable */
      const map = new BMapGL.Map('map-container'); // 创建地图实例
      const point = new BMapGL.Point(121.464044, 31.171674); // 创建点坐标
      map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      const marker = new BMapGL.Marker(new BMapGL.Point(121.464044, 31.171674)); // 创建点标记
      map.addOverlay(marker); // 在地图上添加点标记
    },
  },
};
</script>

<style lang="scss" scoped>
.section-bg {
  background-color: #F6FAFD;
}

.section-company-profile {
  padding: 95px 0 75px;
  .company-profile-title {
    .title-zh {
      font-size: 30px;
      color: #333;
    }
    .title-en {
      font-size: 20px;
      color: #666;
    }
  }
  .company-profile-detail {
    margin-top: 35px;
    font-size: 18px;
    color: #666;
  }
  .company-profile-img {
    flex-shrink: 0;
    width: 429px;
    height: 305px;
    margin-left: 104px;
  }
}

.section-panel {
  padding: 25px 0;
  .panel-content {
    width: 950px;
    margin: 0 auto;
  }
  .company-info {
    width: 310px;
    .company-info-icon {
      width: 78px;
      height: 35px;
    }
    .company-info-title, .company-info-content {
      margin-left: 30px;
      list-style-type: disc;
    }
    .company-info-title {
      margin-top: 35px;
      font-size: 20px;
      color: #666;
    }
    .company-info-content {
      margin-top: 12px;
      font-size: 20px;
      color: #999;
    }
  }
  .company-info-img {
    width: 402px;
    height: 402px;
  }
}

.address-map {
  width: 602px;
  height: 332px;
}
.address-detail {
  margin-left: 92px;
  .address-icon {
    width: 44px;
    height: 44px;
  }
  .address-city {
    margin-left: 4px;
    font-size: 26px;
    color: #0E1421;
  }
  .address-row {
    & + .address-row {
      margin-top: 5px;
    }
    font-size: 16px;
    color: #666;
  }
}
</style>
