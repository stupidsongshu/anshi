<template>
  <div class="page-footer flex flex-direction-column flex-cross-center" :style="{color: color, background: bgcolor}">
    <div>
      <div class="footer-nav-wrap flex">
        <div class="footer-nav">
          <p class="footer-nav-title">产品介绍</p>
          <ul class="footer-nav-list">
            <li class="footer-nav-item">产品动态</li>
            <li class="footer-nav-item">公司活动</li>
            <li class="footer-nav-item">客户案例</li>
          </ul>
        </div>
        <div class="footer-nav">
          <p class="footer-nav-title">快速入口</p>
          <ul class="footer-nav-list">
            <li class="footer-nav-item">帮助文档</li>
            <li class="footer-nav-item">申请试用</li>
          </ul>
        </div>
        <div class="footer-nav">
          <p class="footer-nav-title">服务与支持</p>
          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <div>支持热线</div>
              <div>021-64181628</div>
            </li>
            <li class="footer-nav-item">
              <div>邮箱</div>
              <div>info@sectrend.com.cn</div>
            </li>
            <li class="footer-nav-item">
              <div>网址</div>
              <div>www.sectrend.com.cn</div>
            </li>
          </ul>
        </div>
        <div class="footer-nav">
          <p class="footer-nav-title">关注我们</p>
          <ul class="footer-nav-list">
            <li>
              <ul class="flex">
                <li class="link-us">
                  <img class="link-us-qrcode" src="../assets/img/qrcode-1.png" alt="">
                  <div class="link-us-title">更多详情</div>
                  <div class="link-us-title">请扫码联系</div>
                </li>
                <li class="link-us">
                  <img class="link-us-qrcode" src="../assets/img/qrcode-2.png" alt="">
                  <div class="link-us-title">扫一扫</div>
                  <div class="link-us-title">关注我们</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="company-detail">
        <span class="company-info">所有：上海安势信息技术有限公司</span>
        <span class="company-info">地址：上海市徐汇区云锦路500号绿地汇中心A幢2008室</span>
      </div>
      <div class="copyright">COPYRIGHT © SHANGHAI SECTREND TECHNOLOGY CO., LTD. 2021 ALL RIGHTS REVERSED</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: {
    color: {
      type: String,
      default: '#fff',
    },
    bgcolor: {
      type: String,
      default: 'linear-gradient(180deg, #B4B8C2 0%, #7E818A 100%)',
    },
  },
};
</script>

<style lang="scss" scoped>
.page-footer {
  padding: 34px 0 32px;
}

.footer-nav-wrap {
  padding-bottom: 25px;
  border-bottom: 1px solid #C9CCD5;
}
.footer-nav {
  width: 228px;
  .footer-nav-title {
    font-size: 18px;
  }
  .footer-nav-list {
    margin-top: 34px;
    .footer-nav-item {
      font-size: 14px;
      & + .footer-nav-item {
        margin-top: 10px;
      }
    }
  }
  .link-us {
    & + .link-us {
      margin-left: 35px;
    }
    .link-us-qrcode {
      width: 67px;
      height: 67px;
      margin-bottom: 14px;
    }
    .link-us-title {
      font-size: 14px;
    }
  }
}

.company-detail {
  margin: 25px 0 10px;
  font-size: 14px;
  .company-info {
    & + .company-info {
      margin-left: 20px;
    }
  }
}
.copyright {
  font-size: 14px;
}
</style>
