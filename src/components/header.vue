<template>
  <div class="page-header">
    <div class="page-content header-content">
      <img class="logo" src="../assets/img/logo.png" alt="">
      <ul class="header-nav">
        <router-link
          class="header-nav-item"
          :class="{active: currentPath === item.path}"
          tag="li"
          :to="item.path"
          v-for="item in list"
          :key="item.path">
          <el-popover
            v-if="item.children && item.children.length"
            placement="bottom"
            trigger="hover">
            <div class="header-title" slot="reference">{{item.name}}</div>
            <div class="header-options">
              <router-link
                class="header-option flex flex-cross-center"
                :to="child.path"
                v-for="child in item.children"
                :key="child.path">
                {{child.name}}
              </router-link>
            </div>
          </el-popover>
          <span v-else>{{item.name}}</span>
        </router-link>
      </ul>
      <router-link class="add-us flex flex-center" to="/job">安势信息</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      list: [
        {
          path: '/',
          name: '首页',
        },
        {
          path: '/devsecops',
          name: 'DevSecOps产品',
        },
        {
          path: '/service',
          name: '专业服务',
          children: [
            {
              path: '/service?path=check',
              name: '安全检查',
            },
            {
              path: '/service?path=guard',
              name: '安全保障',
            },
            {
              path: '/service?path=train',
              name: '安全培训',
            },
            {
              path: '/service?path=consult',
              name: '安全咨询',
            },
          ],
        },
        {
          path: '/solution',
          name: '解决方案',
        },
        {
          path: '/about',
          name: '关于安势',
        },
      ],
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: #0259DC;
}
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.3);
}
.header-content {
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
}
.logo {
  width: 120px;
  height: 60px;
}
.header-nav {
  height: 100%;
  margin-left: 140px;
}
.header-nav-item {
  display: inline-flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  & + .header-nav-item {
    margin-left: 36px;
  }
}

.header-title {}
.header-options {
  .header-option {
    height: 30px;
    padding: 0 10px;
    font-size: 12px;
    color: #111111;
    cursor: pointer;
    &:hover {
      background-color: #E6EAEF;
    }
  }
}

.add-us {
  width: 88px;
  height: 32px;
  margin-left: auto;
  color: #fff;
  background: #0259DC;
}
</style>
