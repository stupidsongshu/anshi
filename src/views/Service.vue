<template>
  <div>
    <MyHeader></MyHeader>

    <MyBanner></MyBanner>

    <div class="flex">
      <div class="section-nav">
        <div class="nav-preview">
          <span></span>
          <span>服务总览</span>
        </div>
        <!-- 只有两级暂时不用递归组件 -->
        <ul class="nav-list">
          <li class="nav-item" :class="{active: navItem.active}" v-for="navItem in navList" :key="navItem.path" @click="handleClickNavItem(navItem)">
            <div>{{navItem.title}}</div>
            <ul class="nav-children" v-if="navItem.children && navItem.active">
              <li class="nav-child" :class="{active: navChild.active}" v-for="(navChild, index) in navItem.children" :key="navChild.path" @click.stop="handleClickNavChild(navItem.children, index)">{{navChild.title}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <Service :data="activeNav"></Service>
    </div>

    <MyFooter color="#777" bgcolor="#F5F7FA"></MyFooter>
  </div>
</template>

<script>
import Service from './component/service.vue';

export default {
  components: { Service },
  data() {
    return {
      bannerUrl: require('../assets/img/banner/service.png'),
      activeNav: null,
      navList: [
        {
          path: 'check', // 节点路径
          title: '安全检查',
          active: false,
          children: [
            {
              path: 'stcs',
              title: '渗透测试',
              active: false,
              // 服务概述
              summary: ['渗透测试是完全模拟黑客可能使用的攻击技术和漏洞发现技术，对目标系统的安全做深入的探测，发现系统最脆弱的环节。渗透测试和黑客入侵最大区别在于渗透测试是经过客户授权，采用可控制、非破坏性质的方法和手段发现目标和网络设备中存在弱点，帮助管理者知道自己网络所面临的问题，同时提供安全加固意见帮助客户提升系统的安全性。服务采取远程/现场漏洞挖掘的方式进行服务'],
              // 服务收益
              earnList: [
                {
                  icon: '',
                  list: ['直面安全脆弱点', '有助于内部安全的提升'],
                },
                {
                  icon: '',
                  list: ['帮助更好地了解应用系统运行状态，预防攻击者对应用系统恶意攻击'],
                },
                {
                  icon: '',
                  list: ['完善信息安全保障体系，确保信息安全控制措施有效'],
                },
              ],
            },
            {
              path: 'ldsm',
              title: '漏洞扫描',
              active: false,
              summary: ['服务采取“人”与“工具”结合的模式，所使用的安全漏洞扫描工具是国内外领先的扫描器，安全专家的介入有效提高漏洞结果准确率，以及降低扫描工具对评估环境的负担和风险。提供专业的漏洞修复报告并且配备专业的安全专家进行人工解读，确保漏洞能及时得到专业的修复指导。'],
              earnList: [
                {
                  icon: '',
                  list: ['漏洞扫描服务能够帮助用户识别各种复杂的Web应用以及IT资产'],
                },
                {
                  icon: '',
                  list: ['能够全面深入发现主机和应用中存在的安全弱点'],
                },
                {
                  icon: '',
                  list: ['降低国家利益、社会利益、企业利益乃至个人利益的受损风险'],
                },
              ],
            },
            {
              path: 'pzhc',
              title: '配置核查',
              active: false,
              summary: ['基线检查服务能够帮助客户IT人员，高效的检查设备、收集数据、制作和审核风险报告，识别各项不符合安全规范要求的系统。'],
              earnList: [
                {
                  icon: '',
                  list: ['服务可以覆盖客户上线安全检查、第三方入网安全检查、合规安全检查、日常安全检查等全方位检查'],
                },
                {
                  icon: '',
                  list: ['同时可以基于大数据收集与核查评估结果，综合提升客户安全能力'],
                },
              ],
            },
            {
              path: 'dmsj',
              title: '代码审计',
              active: false,
              summary: ['代码审计服务能够对整个信息系统的所有源代码进行检查，从整套代码切入最终明至某个威胁点并加以验证，以此明确整体系统中的安全隐患点。'],
              earnList: [
                {
                  icon: '',
                  list: ['源代码审计服务可有效督促管理人员杜绝任何一处小的缺陷，从而降低整体风险。'],
                },
                {
                  icon: '',
                  list: ['通过专业的源代码审计报告，能为用户开发人员提供安全问题的解决方案，完善代码安全开发规范。'],
                },
              ],
            },
          ],
        },
        {
          path: 'consult',
          title: '安全咨询',
          active: false,
          children: [
            {
              path: 'isms',
              title: '信息安全管理体系咨询（ISMS）',
              active: false,
              summary: ['ISO27001是部针对信息技术、安全技术、信息安全管理体系(ISMS)的国际标准若重关注保持信息的密性、完整性、可用性，另外也可包括例如真实性、可核查性、不可否认性和可靠性等，获得1SO27001相关证书意味着组织基本符合了信息安全管理领域最佳行业实践，为企业提高市场竞争力，改进企业内部管理英定了基础。安势信息结合以往的1SO27001认证实施经验，基于实施过程方法论，推出了IS027001认证咨询服务，来解决当前企业所面临的难题。'],
              earnList: [],
            },
            {
              path: 'fxpg',
              title: '风险评估',
              active: false,
              summary: ['风险评估服务由资产评估、威胁评估、脆弱性评估、风险分析、风险处置计划等部分组成；通过服务帮助客户了解网络与信息系统的安全状况，同时通过对发现的问题和风险进行综合分析，输出最优化的方案建议。'],
              earnList: [],
            },
            {
              path: 'djbhzx',
              title: '等级保护咨询',
              active: false,
              summary: ['依据国家相关法律法规，为用户提供一站式等级保护咨询服务，专业的咨询服务能在符合网络安全等级保护基础上，保障网络安全与信息化建设相协调，控制网络安全建设成本，优化网络安全资源的配置。'],
              earnList: [
                {
                  icon: '',
                  list: ['服务本身除了帮助用户快速获证之外，还聚焦服务过程帮助发现安全现状与安全要求的差距以及获得中长期的等级保护建设发展规划建议。'],
                },
              ],
            },
            // {
            //   path: 's-sdlc',
            //   title: 'S-SDLC安全管理咨询',
            //   active: false,
            //   summary: [],
            //   earnList: [
            //     {
            //       icon: '',
            //       list: [''],
            //     },
            //   ],
            // },
          ],
        },
        {
          path: 'guard',
          title: '安全保障',
          active: false,
          children: [
            {
              path: 'zysqbz',
              title: '重要时期保障',
              active: false,
              summary: [
                '在重要活动时期，专业的保障服务能帮助客户企业对重要会议、活动全程进行保驾护航，解决重保单位在关键时期缺乏人力支撑、技术保障和设备支持的困境。',
                '通过专业的安全保漳服务确保会议活动顺利进行，重要时期安全保障服务可根据实际需求，提供现场服务和非现场服务两种形式。根据具体的服务需求可定制化服务内容，服务涵盖咨询、评估、应急、检测、值守等多项服务',
              ],
              earnList: [],
            },
            {
              path: 'yjxy',
              title: '应急响应',
              active: false,
              summary: [
                '应急响应服务是以快速响应、快速报告、快速修复、快速恢复为行动指南，积极开展网络安全事件的预防、发现、预警和协调处置等工作的安全服务。提供包括比如入侵取证、灾难恢复、疑难木马查杀等工作内容；',
                '凭借在应急响应领域丰富的经验，能够针对问题快速定位与处理，降低损失并且快速追踪到事件的源头。',
              ],
              earnList: [],
            },
            {
              path: 'aqyy',
              title: '安全运营',
              active: false,
              summary: [
                '服务依托于公司先进的运营理念，结合专业的安全服务工程师以及自主可控的管理工具，在维护了企业安全的同时，也提升了服务效率。',
                '通过服务服务可以对整体的网络状况包括网络设备、服务器设备等进行完整的周期性安全评估，对了解、掌握目前网络、系统安全状况和风险防范起到了积极的推动作用。',
              ],
              earnList: [],
            },
          ],
        },
        {
          path: 'train',
          title: '安全培训',
          active: false,
          children: [
            {
              path: 'aqjnpx',
              title: '安全技能培训',
              active: false,
              summary: [
                '安势信息所提供的安全技能培础课程，是为进一步加强网络安全人才培养，以网络安全培训作为网络安全人才技能提升的重要手段。通过技能培训，可以有效提升学员的技术、沟通、领导、协调等各方面能力。',
                '技能培训的学习路线为三个阶段，基本覆盖初级的基础技术、基于工作角色而需要掌握的中级进阶技术以及进阶的高级关键技能',
              ],
              earnList: [],
            },
            {
              path: 'aqysps',
              title: '安全意识培训',
              active: false,
              summary: [
                '人的安全是企业安全的最后一道防线，信息安全意识淡薄是网络安全事件频发的关键因素。安势信息多年企业安全意识教育经验，总结出一套安全意识培训框架，可以帮助提升企业信息安全意识文化。',
              ],
              earnList: [],
            },
          ],
        },
      ],
    };
  },
  computed: {
    query() {
      return this.$route.query;
    },
    path() {
      return this.query.path;
    },
  },
  watch: {
    path: {
      handler(val) {
        const navItem = this.navList.find((item) => item.path === val);
        this.handleNavItem(navItem);
      },
      immediate: true,
    },
  },
  methods: {
    handleClickNavItem(item) {
      if (this.activeNav.path === item.path) return;
      this.activeNav = item;
      this.$router.replace({
        path: '/service',
        query: {
          path: item.path,
        },
      });
    },
    handleNavItem(item) {
      if (!item) {
        [item] = this.navList;
      }
      this.activeNav = item;
      this.navList.forEach((navItem) => {
        navItem.active = navItem.path === item.path;
      });
      if (item.children) {
        this.handleClickNavChild(item.children, 0);
      }
    },
    handleClickNavChild(children, index) {
      const activeChild = children[index];
      children.forEach((child) => {
        child.active = child.path === activeChild.path;
      });
      // 滚动至指定位置
      const targetEl = document.getElementById(activeChild.path);
      if (targetEl) {
        document.documentElement.scrollTop = targetEl.offsetTop - 100;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$active: #0259DC;

.nav-list {
  margin-top: 36px;
  font-size: 14px;
  .nav-item {
    color: #111111;
    cursor: pointer;
    & + .nav-item {
      margin-top: 15px;
    }
    &.active {
      color: $active;
    }
    .nav-children {
      padding-left: 12px;
      border-left: 1px solid #E1E1E1;
      .nav-child {
        margin-top: 10px;
        color: #828282;
        cursor: pointer;
        &.active {
          color: $active;
        }
      }
    }
  }
}

.section-nav {
  flex-shrink: 0;
  width: 350px;
  padding-left: 160px;
  background: #F5F7FA;
  .nav-preview {
    margin: 20px 0 32px;
  }
}
</style>
