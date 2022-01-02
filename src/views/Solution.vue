<template>
  <div class="page-solution">
    <MyHeader></MyHeader>

    <MyBanner></MyBanner>

    <div class="section-nav">
      <div class="page-content">
        <div class="nav-list flex">
          <div class="nav-item flex flex-center" :class="{active: item.active}" v-for="(item, index) in navList" :key="item.component" @click="handleNavChange(index)">{{item.name}}</div>
        </div>
      </div>
    </div>
    <component :is="activeComponent"></component>

    <MyFooter></MyFooter>
  </div>
</template>

<script>
import OpensourceGovernance from './component/opensource-governance.vue';
import NetworkingSecurity from './component/networking-security.vue';

export default {
  components: {
    OpensourceGovernance,
    NetworkingSecurity,
  },
  data() {
    return {
      bannerUrl: require('../assets/img/banner/solution.png'),
      navList: [
        { component: 'opensource-governance', name: '开源治理方案', active: false },
        { component: 'networking-security', name: '车联网安全评估方案', active: false },
      ],
      activeComponent: '',
    };
  },
  created() {
    this.handleNavChange(0);
  },
  methods: {
    handleNavChange(index) {
      const item = this.navList[index];
      if (!item) return;
      this.navList.forEach((navItem) => {
        navItem.active = false;
      });
      item.active = true;
      this.activeComponent = item.component;
    },
  },
};
</script>

<style lang="scss" scoped>
.section-nav {
  width: 100%;
  height: 76px;
  background: #F6FAFD;
  .nav-item {
    width: 227px;
    height: 76px;
    font-size: 18px;
    color: #333;
    cursor: pointer;
    &.active {
      color: #0259DC;
      background-color: #FFFFFF;
    }
  }
}
</style>
