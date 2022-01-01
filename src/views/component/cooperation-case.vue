<template>
  <div class="section-cooperation">
    <ul class="cooperation-company-row cooperation-company-row1">
      <li class="cooperation-company-col" v-for="(item, index) in list1" :key="index" :style="{'background-image': `url(${item.icon})`}"></li>
    </ul>
    <ul class="cooperation-company-row cooperation-company-row2">
      <li class="cooperation-company-col" v-for="(item, index) in list2" :key="index" :style="{'background-image': `url(${item.icon})`}"></li>
    </ul>
    <ul class="cooperation-company-row cooperation-company-row1">
      <li class="cooperation-company-col" v-for="(item, index) in list3" :key="index" :style="{'background-image': `url(${item.icon})`}"></li>
    </ul>
    <ul class="cooperation-company-row cooperation-company-row2">
      <li class="cooperation-company-col" v-for="(item, index) in list4" :key="index" :style="{'background-image': `url(${item.icon})`}"></li>
    </ul>

    <div class="mask-wrap flex flex-center">
      <div class="mask-content flex flex-direction-column flex-center">
        <div class="mask-title">合作案例</div>
        <div class="mask-intro">了解更多安势，请联系我们</div>
        <div class="mask-btn flex flex-center">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },

        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },

        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },

        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },

        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },

        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
      ],
      list2: [
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },

        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },

        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },

        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },

        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
      ],
      list3: [
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },

        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },

        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },

        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },

        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
      ],
      list4: [
        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },

        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },

        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },

        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },

        { name: 'UNI QLO', icon: require('../../assets/img/cooperation/uniqlo.png') },
        { name: '上汽大众', icon: require('../../assets/img/cooperation/saic.png') },
        { name: '链家', icon: require('../../assets/img/cooperation/lianjia.png') },
        { name: '百度贴吧', icon: require('../../assets/img/cooperation/bdtb.png') },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-cooperation {
  position: relative;
  padding: 40px 0;
  overflow: hidden;
}

@keyframes scroll {
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(-2600px, 0, 0);
  }
}

.cooperation-company-row {
  width: 5200px;
  white-space: nowrap;
  &.cooperation-company-row1 {
    animation: scroll linear 40s infinite;
  }
  &.cooperation-company-row2 {
    animation: scroll linear 50s infinite;
  }
  .cooperation-company-col {
    display: inline-block;
    width: 200px;
    height: 80px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    & + .cooperation-company-col {
      margin-left: 20px;
    }
  }
}

.mask-wrap {
  position: absolute;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.82);
  .mask-content {
    width: 380px;
    height: 236px;
    background: #FFFFFF;
    .mask-title {
      font-size: 30px;
      color: #333333;
    }
    .mask-intro {
      margin: 12px 0;
      font-size: 16px;
      color: #767676;
    }
    .mask-btn {
      width: 140px;
      height: 38px;
      border-radius: 4px;
      border: 1px solid #767676;
      font-size: 16px;
      color: #767676;
      background: rgba(255, 255, 255, 0);
      cursor: pointer;
    }
  }
}
</style>
