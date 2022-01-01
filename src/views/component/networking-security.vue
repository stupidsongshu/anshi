<template>
  <div>
    <div class="section-panel">
      <div class="page-content">
        <h3 class="panel-title text-center">车联网安全评估流程</h3>
        <p class="panel-sub-title text-center">车联网安全评估流程</p>
        <img style="max-width:100%;margin-top:26px;" src="../../assets/img/solution/networking-security.png" alt="">
      </div>
    </div>

    <div class="section-panel section-bg">
      <div class="page-content">
        <ul class="panel-card-list flex flex-main-between flex-wrap">
          <li class="panel-card-item">
            <div class="card-header flex flex-cross-center">
              <img class="card-icon" src="../../assets/img/solution/solution-icon-2.png" alt="">
              <span class="card-title">资产识别</span>
            </div>
            <div class="card-intro">
              <p class="card-row">根据ISO/SAE 21434（道路车辆(网络安全工程)）要求，资产的识别是开展TARA评估服务的基本，目的是为确定各项资产的网络安全属性，从而为风险分析提供原始输入。</p>
            </div>
          </li>
          <li class="panel-card-item">
            <div class="card-header flex flex-cross-center">
              <img class="card-icon" src="../../assets/img/solution/solution-icon-2.png" alt="">
              <span class="card-title">影响等级</span>
            </div>
            <div class="card-intro">
              <p class="card-row">为实现对风险的控制与管理，可以对评估的结果进行等级化处理，根据ISO/SAE 21434（道路车辆(网络安全工程)）标准规定，“将每个影响类别的损坏情景的等级确定为：严重（高）、重大（中）、缓和（低）、微不足道（极低）”。</p>
            </div>
          </li>
          <li class="panel-card-item">
            <div class="card-header flex flex-cross-center">
              <img class="card-icon" src="../../assets/img/solution/solution-icon-2.png" alt="">
              <span class="card-title">攻击路径分析</span>
            </div>
            <div class="card-intro">
              <p class="card-row">通常，在汽车产品（系统/组件）投入之后，功能以及安全防护基本趋于固定，此时进行攻击路径分析，相对正式环境基本不明显差距。而在产品或组件的早期开发阶段，攻击路径通常不够完整，是由于具体的实施细节尚不清楚，无法识别未知漏洞，因此在该阶段的攻击路径需要随着产品的迭代而不断更新。</p>
            </div>
          </li>
          <li class="panel-card-item">
            <div class="card-header flex flex-cross-center">
              <img class="card-icon" src="../../assets/img/solution/solution-icon-2.png" alt="">
              <span class="card-title">风险值的确定</span>
            </div>
            <div class="card-intro">
              <p class="card-row">攻击可行性评级的分析对象是针对于攻击路径，攻击可行性的评级很大程度上是考量攻击路径的利用工作量。ISO/SAE 21434（道路车辆(网络安全工程)）给出多种评级方式（如攻击潜力、漏洞评分、攻击向量等），不同的评级方式适用不同的阶段和准备工作。</p>
            </div>
          </li>
          <li class="panel-card-item">
            <div class="card-header flex flex-cross-center">
              <img class="card-icon" src="../../assets/img/solution/solution-icon-2.png" alt="">
              <span class="card-title">风险值的确定</span>
            </div>
            <div class="card-intro">
              <p class="card-row">风险值的确定来自几个方面，对于每个威胁场景，需综合判断相关损害场景的影响和相关攻击路径的攻击可行性来确定风险值。当威胁场景对应多个损害场景或损害场景对多个攻击路径产生影响，则需要为每个影响评级分别确定单独的风险值。当威胁场景对应多个攻击路径，则可聚合攻击可行性评级。</p>
            </div>
          </li>
          <li class="panel-card-item">
            <div class="card-header flex flex-cross-center">
              <img class="card-icon" src="../../assets/img/solution/solution-icon-2.png" alt="">
              <span class="card-title">风险处理决定</span>
            </div>
            <div class="card-intro">
              <p class="card-row">风险处理的方式一般包括接受、消减、转移、规避等，风险处理需根据风险处置偏好规范进行。对不可接受的风险需根据导致该风险的脆弱性制定风险处置计划。风险处置计划包括了弥补脆弱性的安全措施、预期效果、实施条件、进度安全、相关责任人等。安全措施可以从技术与管理两个方面考虑。安全措施的选择参照组织的相关标准进行</p>
            </div>
          </li>
          <li class="panel-card-item">
            <div class="card-header flex flex-cross-center">
              <img class="card-icon" src="../../assets/img/solution/solution-icon-2.png" alt="">
              <span class="card-title">风险处理决定</span>
            </div>
            <div class="card-intro">
              <p class="card-row">风险处理的方式一般包括接受、消减、转移、规避等，风险处理需根据风险处置偏好规范进行。对不可接受的风险需根据导致该风险的脆弱性制定风险处置计划。风险处置计划包括了弥补脆弱性的安全措施、预期效果、实施条件、进度安全、相关责任人等。安全措施可以从技术与管理两个方面考虑。安全措施的选择参照组织的相关标准进行</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 合作案例 -->
    <CooperationCase></CooperationCase>
  </div>
</template>

<script>
import CooperationCase from './cooperation-case.vue';

export default {
  components: { CooperationCase },
};
</script>

<style lang="scss" scoped>
.section-panel.section-bg {
  background-color: #F3F5F8;
}

.section-panel {
  padding: 54px 0 94px;
  .panel-title {
    font-size: 38px;
    color: #333333;
  }
  .panel-sub-title {
    margin-top: 6px;
    font-size: 16px;
    color: #999999;
  }
  .panel-card-list {
    margin-top: 54px;
    .panel-card-item {
      width: 408px;
      height: 280px;
      margin-bottom: 45px;
      padding: 42px;
      border-radius: 4px;
      border: 1px solid #FFFFFF;
      box-shadow: 4px 10px 12px 0px rgba(0, 54, 143, 0.21);
      background: linear-gradient(180deg, #FAFCFF 0%, #FDFDFE 100%);
      .card-header {
        .card-icon {
          width: 32px;
          height: 32px;
        }
        .card-title {
          margin-left: 6px;
          font-size: 20px;
          color: #333333;
        }
      }
      .card-intro {
        margin-top: 16px;
        .card-row {
          font-size: 14px;
          color: #676B74;
        }
      }
    }
  }
}
</style>
