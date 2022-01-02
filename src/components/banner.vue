<template>
  <el-carousel height="640px" :autoplay="autoplay" :interval="3000" :initial-index="initialIndex" :arrow="arrow" :indicator-position="indicatorPosition">
    <el-carousel-item v-for="item in list" :key="item.id">
      <div class="swiper-item-wrap flex flex-cross-center" :style="{'background-image': `url(${item.img})`}">
        <div class="page-content">
          <div class="swiper-item">
            <h3 class="swiper-item-title">{{item.title}}</h3>
            <div v-if="item.children && item.children.length" class="swiper-item-children">
              <div v-for="(child, index) in item.children" :key="index" class="swiper-item-child">
                <h3 class="swiper-item-title">{{child.title}}</h3>
                <div class="swiper-item-desc">{{child.desc}}</div>
              </div>
            </div>
            <div v-else class="swiper-item-desc">{{item.desc}}</div>
            <router-link v-if="isHome" class="swiper-item-btn flex flex-center" :to="item.path">查看详情</router-link>
          </div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'MyBanner',
  data() {
    return {
      isHome: false, // 是否在首页
      initialIndex: 0,
      autoplay: false,
      arrow: '',
      indicatorPosition: '',
      list: [
        {
          id: 1,
          path: '/about',
          img: require('../assets/img/banner/about.png'),
          title: '安势信息',
          desc: '安势是一家领先的实战创新型网络安全公司，专业的网络安全综合解決方案提供商。公司秉承“安全左移、以攻促防”的安全理念，专注于开源治理、漏洞风险检测、安全防御建设和攻防型人オ培养，致力于帮助用户先于黑客发现并及时解决安全问题，共同打造个更安全、更便捷、更美好的互联网世界。',
        },
        {
          id: 2,
          path: '/devsecops',
          img: require('../assets/img/banner/devsecops.png'),
          title: '软件组成分析系统',
          desc: 'SCA用于管理在应用程序和Docker中使用开源和第三方代码所带来的安全、质量和许可证合规性风险。为用户提供无与伦比的第三方代码可视性，并能够在整个软件供应链和整个应用程序生命周期中对其进行控制',
        },
        {
          id: 3,
          path: '/service',
          img: require('../assets/img/banner/service.png'),
          title: '专业服务',
          desc: '为用户提供贯穿信息系统完整生命周期的安全技术专业服务。致力于在系统投产前弥补安全缺陷，优化资源配置，建立和维护全面、有效、合规的信息安全管理体系，保障业务运营和战略达成。',
        },
        {
          id: 4,
          path: '/solution',
          img: require('../assets/img/banner/solution.png'),
          title: '解决方案',
          children: [
            {
              title: '开源治理',
              desc: '开源引入过程进行管理，帮助开源用户规范开源流程，提升企业的开源治理能力。覆盖组织架构、风险管理、技术管理、安全评估等方面需遵循的规范和应具备的能力，帮助用户构建和提升开源软件治理能力。',
            },
            {
              title: '车联网安全评估',
              desc: 'TARA（威胁分析和风险评估）是ISO/SAE 21434（道路车辆(网络安全工程)）定义的关键活动，通过TARA能够系统分析汽车产品（组件/系统）所面临的威胁，评估可能造成的危害程度，提出有针对性的抵御威胁的防护对策和整改措施，防范和化解系统安全风险。',
            },
          ],
        },
      ],
    };
  },
  created() {
    this.initCarousel();
  },
  methods: {
    initCarousel() {
      const { path, name } = this.$route;
      this.isHome = name === 'Home';
      const index = this.list.findIndex((item) => item.path === path);
      this.initialIndex = index === -1 ? 0 : index;
      if (this.isHome) {
        this.autoplay = true;
        this.arrow = 'always';
        this.indicatorPosition = '';
      } else {
        this.autoplay = false;
        this.arrow = 'never';
        this.indicatorPosition = 'none';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-item-wrap {
  height: 100%;
  background-size: 100% 100%;
  background-position: center;
  .swiper-item {
    width: 700px;
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
    .swiper-item-btn {
      width: 120px;
      height: 40px;
      margin-top: 50px;
      border-radius: 27px;
      font-size: 18px;
      color: #FFFFFF;
      background: #0259DC;
      cursor: pointer;
    }
    .swiper-item-children {
      margin-top: 20px;
      .swiper-item-child {
        & + .swiper-item-child {
          margin-top: 20px;
        }
        .swiper-item-title {
          font-size: 20px;
        }
        .swiper-item-desc {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
