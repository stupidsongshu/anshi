<template>
  <div class="page-home">
    <MyHeader></MyHeader>

    <MyBanner></MyBanner>

    <!-- 解决方案 -->
    <div class="section-panel section-solution">
      <h3 class="section-panel-title text-center">解决方案</h3>
      <div class="section-panel-intro text-center">
        <span>安势信息多年行业积累，致力于为客户提供优质服务</span>
        <router-link class="btn-all" to="/solution">查看全部产品</router-link>
      </div>

      <ul class="solution-list flex flex-main-center">
        <li class="solution-item">
          <img class="solution-icon" src="../assets/img/home/solution-icon1.png" alt="">
          <h4 class="solution-title text-center">软件组成分析方案</h4>
          <p class="solution-desc">清源SCA，是由安势研发团队自主研发，基于多年的开源软件、开源合规和漏洞数据的积累，通过多种行业领先的算法打造出安全、合规、高效、易用的软件成分分析系统，为企业梳理研发过程中的软件物料清单，解决研发开源治理过程中的安全和合规问题。</p>
        </li>
        <li class="solution-item">
          <img class="solution-icon" src="../assets/img/home/solution-icon2.png" alt="">
          <h4 class="solution-title text-center">车联网安全评估服务</h4>
          <p class="solution-desc">TARA（威胁分析和风险评估）是ISO/SAE 21434（道路车辆(网络安全工程)）定义的关键活动，通过TARA能够系统分析汽车产品（组件/系统）所面临的威胁，评估可能造成的危害程度，提出有针对性的抵御威胁的防护对策和整改措施，防范和化解系统安全风险。TARA评估服务是安势信息结合多年安全服务经验，面向汽车行业所推出的一项综合性评估服务，评估范围覆盖道路车辆E/E系统的需求、设计、开发、生产、操作、维护等阶段周期的网络安全风险。</p>
        </li>
        <li class="solution-item">
          <img class="solution-icon" src="../assets/img/home/solution-icon3.png" alt="">
          <h4 class="solution-title text-center">专家渗透测试服务</h4>
          <p class="solution-desc">在应用系统发布和使用之前，保证其安全性和可靠性非常重要。渗透测试作为一种安全脆弱性测试方法，被广泛应用于应用系统的安全测试中。它可以在应用程序发布之前发现潜在的漏洞，并消除相应的威胁。
安势信息所提供的渗透测试服务，是模拟真正的黑客入侵攻击方法，发现并利用目标应
  用系统的安全脆弱性。服务过程以高级安全专家人工渗透为主，在风险可控的情况下，尽可能的暴露出目标应用系统的安全脆弱性</p>
        </li>
        <li class="solution-item">
          <img class="solution-icon" src="../assets/img/home/solution-icon3.png" alt="">
          <h4 class="solution-title text-center">代码审计服务</h4>
          <p class="solution-desc">安势信息提供的代码审计是将代码安全缺陷形成审计检查列表，对照用户提供的代码逐检查。检查列表会根据被审计的对象和应用场景进行调整。
  服务采用专业代码审计工具对代码进行审计，形成审计报告，并对审计出的回题与标准相关审计项逐人工核对。对于使用外部开源代码较多的系统，在审计时将先检测开源代码的使用率，开源代码的安全缺陷从已知洞角度检查对于误报问题，安势信息辅以安全专家人工比对审计核查的方式开展。</p>
        </li>
      </ul>
    </div>

    <!-- 我们的优势 -->
    <div class="section-panel section-advantage">
      <h3 class="section-panel-title text-center">我们的优势</h3>
      <div class="section-panel-intro text-center">
        <span>提供具有国际竞争力的自主创新安全产品和最佳实践服务</span>
        <router-link class="btn-all" style="color:#fff;" to="/devsecops">查看全部产品</router-link>
      </div>

      <ul class="advantage-list flex flex-main-center">
        <li class="advantage-item">
          <img class="advantage-icon" src="../assets/img/home/advantage-icon.png" alt="">
          <h4 class="advantage-title">卓越团队</h4>
          <p class="advantage-desc">卓越的研究团队，精湛的技术团队，为客户提供有力的保障</p>
        </li>
        <li class="advantage-item">
          <img class="advantage-icon" src="../assets/img/home/advantage-icon.png" alt="">
          <h4 class="advantage-title">安全创新</h4>
          <p class="advantage-desc">以安全为核心，以创新为驱动力，为客户营造更加安全高效网络环境</p>
        </li>
        <li class="advantage-item">
          <img class="advantage-icon" src="../assets/img/home/advantage-icon.png" alt="">
          <h4 class="advantage-title">专业防护</h4>
          <p class="advantage-desc">汇聚网安领域专家，技术精英，为用户提供全面的防护能力检验</p>
        </li>
      </ul>
    </div>

    <!-- 合作案例 -->
    <CooperationCase></CooperationCase>

    <div class="section-bottom-banner flex flex-center">提供具有国际竞争力的自主创新安全产品和最佳实践服务</div>

    <MyFooter></MyFooter>
  </div>
</template>

<script>
import CooperationCase from './component/cooperation-case.vue';

export default {
  name: 'Home',
  components: { CooperationCase },
};
</script>

<style lang="scss" scoped>
.page-home {
  width: 100%;
  height: 100vh;
}
.header {
  width: 100%;
  border: 1px solid #000;
}

.section-panel {
  padding-top: 66px;
  .section-panel-title {
    font-size: 28px;
    font-weight: 500;
    line-height: 40px;
  }
  .section-panel-intro {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    .btn-all {
      margin-left: 40px;
      cursor: pointer;
    }
  }
}

.section-solution {
  width: 100%;
  height: 660px;
  background: url('../assets/img/home/solution-bg.png') no-repeat center/100% 100%;
  .section-panel-intro {
    color: #3D485D;
  }
  .btn-all {
    color: #1854FB;
  }
  .solution-list {
    margin-top: 88px;
    .solution-item {
      width: 280px;
      height: 410px;
      padding: 0 20px 15px;
      border-radius: 5px;
      box-shadow: 0px 6px 15px 0px rgba(206, 209, 218, 0.4);
      background: linear-gradient(180deg, #DFDFDF 0%, #FFFFFF 100%);
      & + .solution-item {
        margin-left: 24px;
      }
      .solution-icon {
        display: block;
        width: 60px;
        height: 60px;
        margin: 30px auto 0;
      }
      .solution-title {
        margin: 20px 0;
        font-size: 18px;
      }
      .solution-desc {
        font-size: 12px;
        color: #3D485D;
        line-height: 22px;
      }
    }
  }
}

.section-advantage {
  width: 100%;
  height: 600px;
  background: url('../assets/img/home/advantage-bg.png') no-repeat center/100% 100%;
  .section-panel-title {
    color: #fff;
  }
  .section-panel-intro {
    color: #fff;
  }
  .advantage-list {
    margin-top: 66px;
    .advantage-item {
      width: 320px;
      height: 330px;
      text-align: center;
      background: rgba(3, 3, 3, 0.49);
      // filter: blur(2px);
      cursor: pointer;
      &:hover {
        background: rgba(2, 89, 220, 0.4);
      }
      .advantage-icon {
        width: 60px;
        height: 60px;
        margin-top: 56px;
      }
      .advantage-title {
        margin: 34px 0 20px;
        font-size: 20px;
        color: #FFFFFF;
      }
      .advantage-desc {
        padding: 0 72px;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 26px;
      }
    }
  }
}

.section-bottom-banner {
  width: 100%;
  height: 240px;
  font-size: 50px;
  font-style: italic;
  color: #FFFFFF;
  background: url('../assets/img/home/bottom-banner.png') no-repeat center/100% 100%;
}
</style>
