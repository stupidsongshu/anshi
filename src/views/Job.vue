<template>
  <div class="page-job">
    <MyHeader></MyHeader>

    <HeaderBanner
      title="安势信息"
      desc="如果您正在寻找一流平台的职业机会，我们诚挚欢迎您的加入"
      :bgurl="bannerUrl"
    />

    <div class="page-content flex" style="padding: 40px 0;">
      <div class="nav-wrap">
        <div class="nav-header">人才招聘</div>
        <ul class="nav-list">
          <li class="nav-item flex flex-cross-center" :class="{active: currentIndex === index}" v-for="(job, index) in navList" :key="index" @click="handleClickJob(index)">{{job.name}}</li>
        </ul>
      </div>
      <div class="flex1">
        <div class="job-panel" v-for="(job, i) in jobList" :key="i">
          <div class="job-name text-center">{{job.name}}</div>
          <div class="job-detail" v-if="job.duty && job.duty.length">
            <div class="job-header">岗位职责</div>
            <p class="job-intro" v-for="(duty, j) in job.duty" :key="j">{{duty}}</p>
          </div>
          <div class="job-detail" v-if="job.require && job.require.length">
            <div class="job-header">任职要求</div>
            <p class="job-intro" v-for="(require, j) in job.require" :key="j">{{require}}</p>
          </div>
          <div class="job-detail" v-if="job.extra && job.extra.length">
            <div class="job-header">加分项</div>
            <p class="job-intro" v-for="(extra, j) in job.extra" :key="j">{{extra}}</p>
          </div>
        </div>
      </div>
    </div>

    <MyFooter></MyFooter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerUrl: require('../assets/img/job/header-banner.png'),
      currentIndex: 0,
      list: [
        {
          name: '安全研究',
          list: [
            {
              name: '二进制安全研究员',
              duty: [
                '1、 负责安全技术研究，追踪学习国内外最新的安全技术；',
                '2、 针对恶意文件进行分析，给出恶意文件分析方案；',
                '3、 对前沿的攻击与防御技术手段进行跟进研究；',
                '4、 参与产品研发产品中二进制相关方案研究，输出安全检测能力；',
              ],
              require: [
                '1、 基础知识扎实，熟练掌握至少一门编程语言；',
                '2、 对工作有热情，耐心，责任心强，具备良好的沟通能力和团队意识；',
              ],
              extra: [
                '1、 有个人开源项目，或发布过安全相关文章；',
                '2、 有过安全比赛经验；',
                '3、 具备安全产品研究经验；',
                '4、 学习能力强，能自主驱动参与前沿研究；',
              ],
            },
            {
              name: '安全数据分析研究员',
              duty: [
                '1、UEBA用户行为分析；',
                '2、信息安全大数据分析勘探和检测模型开发，调研恶意攻击行为场景，分析攻击特征；',
                '3、快速响应客户对数据及检测结果的需求，持续提升安全检测的准确率、召回率、时效、证据链；',
                '4、结合安全告警、泄露事件反查等运营场景，提升安全产品的用户体验和运营效率。',
              ],
              require: [
                '1、具备信息安全事件调查、漏洞研究、风控、安全平台之一的相关领域知识；',
                '2.、具有丰富的大数据勘探与模型开发的实践经验，熟悉Spark、ES、Splunk、Hive、SQL等工具；',
                '3、软件开发从业经验，精通Python, Java, Golang等编程语言之一；',
                '4、计算机及相关专业本科及以上学历，2年以上信息安全从业经验；',
                '5、具有极强的执行力，高度的责任感、很强的学习、沟通能力；',
                '6、对技术充满热情且具有钻研精神，对新技术以及行业动向保持敏感性；',
                '7、熟悉分布式计算相关技术；',
                '8、熟悉机器学习和统计，有ML建模经验。',
              ],
              extra: [],
            },
            {
              name: '区块链研究员',
              duty: [
                '1．精通Golang语言，熟悉C更佳；',
                '2．有区块链解决方案、区块链产品设计或其他区块链相关工作经验；',
                '3. 熟悉PostgreSQL、MySql、Redis等主流数据库；',
                '4. 熟悉区块链相关机制与底层实现原理, 了解区块链的协议, 理解各类主流的共识算法；',
                '5. 熟悉区块链开源项目，例如Fabric、BCOS、ethereum等,在业内开发社区贡献过代码者更佳；',
                '6.有联盟链实际项目经验更佳。',
              ],
              require: [
                '1. 参与选型和设计适用行业场景的区块链产品，并推动区块链应用和解决方案的落地实施；',
                '2. 负责区块链核心系统的架构设计和研发工作，研究区块链的协议、运行机制和底层实现等；',
                '3. 根据需求和应用场景，负责智能合约的开发及优化，实现区块链应用的落地；',
                '4. 解决开发及实际业务应用落地中的技术问题；',
                '5. 积极探索区块链技术在为公司业务发展提供持续支撑',
              ],
              extra: [],
            },
            {
              name: '云原生安全研究员',
              duty: [
                '1. 云计算安全平台设计和开发；',
                '2. 基于Docker、Kubernetes平台的技术开发；',
                '3. 跟踪信息安全各领域的变化趋势，收集信息安全数据，分析威胁情报平台数据；',
                '4. 对数据进行处理、关联分析，对信息进行分析和展现；',
                '5. 云环境攻防技术研究',
              ],
              require: [
                '1. 具备Linux平台上的开发技能，熟悉Java/Python等编程语言；',
                '2. 熟悉Docker、K8S等PaaS技术；',
                '3. 了解SDN和网络虚拟化方面的主流技术；',
                '4. 有一定文档撰写能力和交流能力；',
                '5. 在信息安全领域的各分支有较广的知识面；',
              ],
              extra: [
                '1. 熟悉网络安全，熟悉各类安全产品，熟悉网络攻防',
                '2. 了解主流分布式计算、通信和存储工具，威胁情报平台，安全检测、防护和取证技术；',
              ],
            },
          ],
        },
        {
          name: '产品研发',
          list: [
            {
              name: 'Python开发工程师',
              duty: [],
              require: [
                '-熟练掌握 Python 相关常用框架，比如 Django、flask、Mongo、MySQL、Redis、AMQP 、MQTT等；',
                '-熟悉 Linux 相关开发环境；',
                '-具有优秀的编码风格；',
                '-熟悉 git 相关研发流程；',
                '-具备良好团队合作精神、自我管理和追求卓越的能力；',
                '-SaaS 平台相关项目开发经验优先；',
              ],
              extra: [
                '1. 有自己的或者参与开源项目经验',
                '2. 熟悉云原生相关生态，包括不限于 k8s、 docker、consul、kafka 等',
                '3. 有其他语言编程经验，比如 Javascript/Java/Golang 等',
                '4 .熟悉Python的大数据架构kafka,Elasticsearch,Flink应用及开发；',
                '5. 扎实的面向对象编程基础，精通常用设计模式，有多线程/多进程编程经验；',
              ],
            },
            {
              name: 'C研发工程师',
              duty: [
                '1、负责产品核心引擎的的研发工作；',
                '2、完成公司安排的其他工作。',
              ],
              require: [
                '1、本科及以上学历，技术扎实，精通C/C++，熟悉Go或Rust等编程语言的一种；',
                '2、具有三年以上C工作经验，熟练使用Linux/Windows开发、编译、调试；',
                '3、熟悉Linux下多线程/多进程编程模型，进程间通讯，消息事件通知，同步/异步；',
                '4、熟悉Linux下内存管理机制，低延迟、高并发无锁化编程；',
                '5、熟悉TCP/UDP协议、组网、抓包分析等网络编程；',
                '6、工作敬业，细心，爱专研技术，有团队精神，善于总结，能承受一定的工作压力。',
              ],
              extra: [],
            },
            {
              name: '研发经理',
              duty: [
                '1. 产品管理：结合公司战略，开展产品管理工作，对国内外安全平台市场进行分析，形成产品规划，与研发团队紧密结合推进产品落地。',
                '2. 产品推广：负责产品市场营销材料编写及对外推广，包括软文、胶片及解决方案编写，市场宣讲，客户交流等。',
                '3. 产品运营：负责产品运营管理，针对产品设计推广、测试、交付方案进行规划设计；协调各团队，对各流程进行持续优化。',
                '4. 项目支撑：参与项目售前支撑，能够基于客户需求，设计项目解决方案。',
              ],
              require: [
                '1. 三年以上信息安全从业经验，熟悉信息安全领域相关知识，熟悉各类安全产品及原理。',
                '2. 具备大型项目业务架构能力，独立牵头负责过重大项目者优先。',
                '3. 具备安全平台类产品（SOC/SIEM、态势感知、全流量、UEBA等）设计、产品管理、营销经验；',
                '4. 对安全市场具备敏锐的洞察力，能够快速收集市场需求，并转化为产品方案。',
                '5. 思维逻辑清晰，语言/书面表达能力强，同时具备较强的学习能力。',
                '6. 协调沟通能力强，能够与其他团队协同联动，保证产品落地及持续运营。',
              ],
              extra: [],
            },
            {
              name: '产品经理',
              duty: [
                '1、 承担信息安全产品的需求调研、产品规划、产品方案、产品设计工作，推动产品演进；',
                '2、 跨部门沟通协调，推动研发、设计、测试、各部门衔接和协调，完成产品发布目标；',
                '3、 承担项目管理职能，负责团队的进度跟踪和质量把控；',
                '4、对国内外安全产品进行分析调研、以及用户需求调研，从产品功能、安全场景、市场运营等多视角输出竞品分析报告，保持产品在业界的领先性；',
                '5.根据公司规划对公司安全产品进行定位、设计，负责数据梳理、需求分析、原型绘制、产品方案编写；',
                '6.配合整体产品体系升级计划，持续完善所负责产品功能模块',
                '7、协助业务前端，客户对接协助，推动产品功能解、进行产品培训、分析产品优势；',
              ],
              require: [
                '1.3年以上工作经验，具有大数据平台、网络安全、监控、安全行业产品背景或相关技术背景；',
                '2.熟练使用Axure，Visio等相关产品设计工具，注重体验；',
                '熟练完成产品原型及PRD，操作手册等项目相关文档；',
                '3.熟悉安全产品领域和安全产业，具备产品设计能力，具有安全产品竞品分析、市场以及行业分析能力；',
                '4.有安全相关产品和TOB经验优先考虑。',
              ],
              extra: [],
            },
            {
              name: '大数据开发工程师',
              duty: [
                '1、负责数据分析平台的设计、开发及运营；',
                '2、负责数据分析感知能力建设；',
                '3、负责数据清洗、聚合、去重及深入分析挖掘潜在风险；',
                '4、漏洞检测新技术的研究。',
              ],
              require: [
                '1、熟练掌握java/Python/Go或其他编程开发语言；',
                '2、熟悉Redis、 mysql、kafka、ELK等至少一种；',
                '3、具有流量、日志相关的大数据分析经验；',
                '4、良好的自我驱动、团队工作能力和沟通能力。',
              ],
              extra: [
                '1、熟悉常见的Web安全漏洞，对漏洞原理、检测、利用方式有深入理解；',
                '2、熟悉分布式；',
                '3、有过ML经验；',
              ],
            },
            {
              name: '前端开发工程师',
              duty: [
                '1. 负责前端项目的页面设计、编码测试、性能优化等开发迭代工作；',
                '2. 负责后台系统前端开发，编写高质量、可维护性的代码，保证代码的规范性，可读性，输出开发文档；',
                '3. 解决开发过程遇到的技术难题，协助并完成其他各类技术开发任务；',
                '4. 参与公司产品的前端框架优化，性能优化进行技术实现。',
              ],
              require: [
                '1. 本科及以上学历，2年以上相关工作经验；',
                '2. 基础扎实，熟悉Javascript编程语言、html5和css3相关知识, 具备良好的编程习惯，积极参于编程开源社区组织优先；',
                '3. 熟悉React, Vue等常见的JS框架；',
                '4. 理解Java后端运作逻辑，对移动端适配有一定了解；',
                '5. 熟悉web环境下常见的攻击形式和应对方案；',
                '6. 具有较强的学习、分析、解决问题的能力，团队合作意识和责任心。',
              ],
              extra: [],
            },
            {
              name: 'Java开发工程师',
              duty: [
                '1）精通Java开发语言，有高并发代码开发经验,有go语言经验可优先考虑；',
                '2）深度了解HTTP协议工作原理，TCP协议了解更佳；',
                '3）对中间件有非常了解，可熟练使用kafka，ElasticSearch；',
                '4）具备后端基础组件探针监控开发经验；',
                '5）了解prometheus及其数据格式；',
                '6）工作沉稳踏实，有责任心。',
              ],
              require: [],
              extra: [
                '有大数据处理经验更佳',
              ],
            },
          ],
        },
        {
          name: '产品测试',
          list: [
            {
              name: '测试主管',
              duty: [
                '1. 参与重要项目的需求分析，预先评估质量风险并负责测试计划和方案制定；',
                '2. 带领测试团队完成公司产品的测试工作，执行测试计划，跟踪执行进度；',
                '3、主导测试工具开发优化，提高团队专业技能；',
                '4、负责软件测试流程、体系的梳理和优化；',
                '5. 负责测试团队建设，团队绩效提升以及人员培养。',
              ],
              require: [
                '1、5年以上测试经验，2年以上测试团队管理经验，熟悉自动化测试、性能测试、安全测试；',
                '2、 有丰富的复杂系统测试经验；同时具备底层和应用端的测试经验者有限；',
                '3、熟悉Linux操作系统，精通脚本语言， 如python、go、shell、php、perl、ruby中的一种；',
                '4、积极主动，具有良好的沟通能力和团队合作能力。',
              ],
              extra: [],
            },
          ],
        },
      ],
    };
  },
  computed: {
    navList() {
      return this.list.map((item) => ({ name: item.name }));
    },
    jobList() {
      return this.list[this.currentIndex].list || [];
    },
  },
  methods: {
    handleClickJob(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-wrap {
  margin-right: 80px;
  .nav-header {
    font-size: 20px;
    color: #0259DC;
  }
  .nav-list {
    margin-top: 22px;
    .nav-item {
      width: 210px;
      height: 40px;
      padding-left: 5px;
      border-radius: 6px;
      font-size: 15px;
      color: #666;
      cursor: pointer;
      &.active {
        color: #fff;
        background-color: #0259DC;
      }
    }
  }
}

.job-panel {
  width: 960px;
  padding: 40px;
  margin-bottom: 40px;
  background: #FFFFFF;
  box-shadow: 0px 2px 13px 1px rgba(0, 0, 0, 0.13);
  .job-name {
    font-size: 22px;
    color: #333;
  }
  .job-detail {
    margin-top: 50px;
    .job-header {
      // height: 16px;
      padding-left: 5px;
      margin-bottom: 10px;
      border-left: 4px solid #0259DC;
      font-size: 16px;
      color: #333;
    }
    .job-intro {
      font-size: 15px;
      color: #555555;
      line-height: 30px;
    }
  }
}
</style>
