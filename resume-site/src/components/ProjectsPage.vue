<template>
  <div id="app">
    <!-- 顶部头部 -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <div class="tennis-logo">
              <div class="tennis-ball"></div>
              <div class="tennis-racket"></div>
            </div>
            <span class="logo-text">{{ currentLocale.personalInfo.name }}</span>
          </div>
          <div class="language-switcher">
            <button 
              @click="switchLanguage('zh')" 
              :class="{ active: currentLanguage === 'zh' }"
              class="lang-btn"
            >
              中文
            </button>
            <button 
              @click="switchLanguage('en')" 
              :class="{ active: currentLanguage === 'en' }"
              class="lang-btn"
            >
              English
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main">
      <div class="container">
        <!-- 返回按钮 -->
        <div class="back-button">
          <router-link to="/" class="back-btn">
            <span class="back-arrow">←</span>
            Head Back
          </router-link>
        </div>

        <!-- 项目网格布局 -->
        <div class="projects-container">
          <!-- Career 部分 -->
          <section class="project-section">
            <h2 class="section-title">Career</h2>
            <div class="projects-grid">
              <ProjectCard 
                v-for="project in careerProjects" 
                :key="project.id"
                :project="project"
              />
            </div>
          </section>

          <!-- Technical Skills 部分 -->
          <section class="project-section">
            <h2 class="section-title">Technical Skills</h2>
            <div class="projects-grid">
              <ProjectCard 
                v-for="project in freelanceProjects" 
                :key="project.id"
                :project="project"
              />
            </div>
          </section>

          <!-- Education 部分 -->
          <section class="project-section">
            <h2 class="section-title">Education & Certifications</h2>
            <div class="projects-grid">
              <ProjectCard 
                v-for="project in personalProjects" 
                :key="project.id"
                :project="project"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
import zhLocale from '../locales/zh.js'
import enLocale from '../locales/en.js'
import yashandbLogo from '../assets/yashandb-logo.jpg'
import sicsLogo from '../assets/sics-logo.jpg'
import selectdbLogo from '../assets/selectdb-logo.jpg'

export default {
  name: 'ProjectsPage',
  components: {
    ProjectCard
  },
  data() {
    return {
      currentLanguage: 'zh', // 默认中文
      locales: {
        zh: zhLocale,
        en: enLocale
      },
      // 背景图片数组 - 数据库相关图片
      databaseImages: [
        sicsLogo, // YashanDB Logo - 第一张卡片
        selectdbLogo,
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop', // 代码编程
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop'  // 数据分析
      ],
      // 技能相关图片
      skillImages: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop', // 编程技能
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', // 技术栈
        'https://images.unsplash.com/photo-1461749280684-dccba25e3f12?w=400&h=300&fit=crop'  // 开发环境
      ],
      // 教育背景图片
      educationImages: [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop', // 大学校园
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop'  // 学术研究
      ],
      // 颜色数组
      colors: ['#FF6B35', '#00D4AA', '#3ECF8E', '#FFD700', '#87CEEB', '#FF69B4'],
      // 弹窗详细内容数据
      modalDetails: {
        // 职业经历详细内容
        career: {
          1: {
            title: '深圳计算科学研究院 - 数据库优化器开发工程师',
            description: '在YashanDB项目中负责数据库优化器模块开发，包括分布式优化器和与PostgreSQL的集成。参与了数据库架构的演进和优化。',
            responsibilities: [
              '负责YashanDB数据库优化器模块开发',
              '实现了分布式优化器功能',
              '开发了与PostgreSQL的集成模块',
              '参与了数据库架构的演进设计',
              '优化了行列执行引擎的兼容性',
              '提供了技术支持和问题解决'
            ],
            technologies: ['C++', 'YashanDB', 'PostgreSQL', '分布式系统', '数据库优化'],
            achievements: [
              '成功实现了分布式优化器功能',
              '完成了与PostgreSQL的深度集成',
              '提升了数据库系统的整体性能',
              '积累了丰富的分布式数据库开发经验'
            ],
            duration: '2020年11月 - 2023年02月'
          },
          2: {
            title: '北京飞轮科技有限公司 - 数据库优化器开发工程师',
            description: '在Apache Doris项目中负责数据库优化器模块开发，包括Outline、Hints、MiniDump等核心功能。作为核心开发人员，深度参与了数据库优化器的设计和实现。',
            responsibilities: [
              '负责Apache Doris数据库优化器模块的架构设计和开发',
              '从零到一实现了Outline(SQL Plan Manager)模块',
              '开发了数据库优化器Hints功能模块',
              '实现了MiniDump(Plan Replayer)模块',
              '与团队协作完成多个重要功能模块',
              '参与代码审查和技术方案讨论'
            ],
            technologies: ['C++', 'Apache Doris', 'SQL优化', '查询优化器', '数据库内核'],
            achievements: [
              '成功交付了多个核心优化器模块',
              '显著提升了数据库查询性能',
              '为生产环境提供了稳定的性能保障',
              '获得了团队和客户的高度认可'
            ],
            duration: '2023年03月 - 至今'
          }
        },
        // 技术技能详细内容
        skills: {
          '编程语言': {
            title: '编程语言',
            description: '熟练掌握多种编程语言，具备扎实的编程基础和丰富的开发经验。',
            details: [
              'C/C++: 精通系统级编程，具备数据库内核开发经验',
              'Java: 熟悉企业级应用开发，掌握Spring框架',
              'Rust: 了解系统编程和内存安全编程',
              'Python: 熟练使用数据分析和脚本开发'
            ],
            experience: '5年以上数据库系统开发经验'
          },
          '数据库技术': {
            title: '数据库技术',
            description: '专注于数据库优化器和查询处理技术，具备深厚的数据库理论基础。',
            details: [
              'Apache Doris: 深度参与优化器模块开发',
              'YashanDB: 负责分布式优化器开发',
              'PostgreSQL: 熟悉查询优化和扩展开发',
              'SQL优化: 精通查询计划优化和性能调优'
            ],
            experience: '3年以上数据库优化器开发经验'
          },
          '开发环境': {
            title: '开发环境',
            description: '熟练使用各种开发工具和环境，具备高效的开发工作流程。',
            details: [
              'Linux: 精通Linux系统管理和开发环境配置',
              'Git: 熟练使用版本控制和协作开发',
              'Docker: 掌握容器化部署和开发',
              '性能分析: 熟练使用各种性能分析工具'
            ],
            experience: '5年以上Linux开发经验'
          }
        },
        // 教育背景详细内容
        education: {
          '哈尔滨工业大学': {
            title: '哈尔滨工业大学 - 物理学硕士',
            description: '在哈尔滨工业大学攻读物理学硕士学位，培养了严谨的科学思维和扎实的理论基础。',
            details: [
              '专业: 物理学',
              '学位: 硕士学位',
              '时间: 2018年09月 - 2020年08月',
              '研究方向: 理论物理和计算物理',
              '主要课程: 量子力学、统计物理、计算物理'
            ],
            achievements: [
              '完成了高质量的硕士论文',
              '参与了多个科研项目',
              '培养了严谨的科研态度'
            ]
          },
          '南方科技大学': {
            title: '南方科技大学 - 物理学学士',
            description: '在南方科技大学完成物理学本科学位，建立了扎实的物理和数学基础。',
            details: [
              '专业: 物理学',
              '学位: 学士学位',
              '时间: 2014年09月 - 2018年06月',
              '主要课程: 高等数学、线性代数、概率论、物理实验',
              'GPA: 优秀'
            ],
            achievements: [
              '获得了扎实的数学和物理基础',
              '培养了良好的逻辑思维能力',
              '参与了多个实验项目'
            ]
          }
        }
      }
    }
  },
  computed: {
    currentLocale() {
      return this.locales[this.currentLanguage]
    },
    careerProjects() {
      return this.currentLocale.experience.map((experience, index) => {
        const details = this.modalDetails.career[experience.id] || {}
        return {
          id: experience.id,
          name: experience.company,
          subtitle: experience.position,
          description: details.description || experience.description,
          technologies: details.technologies || [],
          responsibilities: details.responsibilities || experience.responsibilities || [],
          achievements: details.achievements || [],
          url: details.url || '',
          duration: details.duration || experience.duration,
          industry: this.currentLanguage === 'zh' ? '数据库技术' : 'Database Technology',
          backgroundImage: this.databaseImages[index % this.databaseImages.length],
          logo: '',
          logoColor: this.colors[index % this.colors.length],
          isLogo: index === 0 // 第一张卡片（YashanDB）使用logo样式
        }
      })
    },
    freelanceProjects() {
      return this.currentLocale.skills.map((skill, index) => {
        const details = this.modalDetails.skills[skill.category] || {}
        const descriptionText = this.currentLanguage === 'zh' 
          ? `在${skill.category}方面拥有丰富的实践经验，熟练掌握相关技术栈。`
          : `Extensive practical experience in ${skill.category}, proficient in related technology stacks.`
        return {
          id: index + 10,
          name: skill.category,
          subtitle: skill.items.join(', '),
          description: details.description || descriptionText,
          technologies: skill.items,
          details: details.details || [],
          experience: details.experience || '',
          duration: details.experience || (this.currentLanguage === 'zh' ? '持续学习' : 'Continuous Learning'),
          industry: this.currentLanguage === 'zh' ? '技术技能' : 'Technical Skills',
          backgroundImage: this.skillImages[index % this.skillImages.length],
          logo: '',
          logoColor: this.colors[(index + 2) % this.colors.length]
        }
      })
    },
    personalProjects() {
      return this.currentLocale.education.map((edu, index) => {
        const details = this.modalDetails.education[edu.school] || {}
        return {
          id: index + 20,
          name: edu.school,
          subtitle: edu.degree,
          description: details.description || edu.description,
          technologies: [edu.degree, edu.period],
          details: details.details || [],
          achievements: details.achievements || [],
          duration: edu.period,
          industry: this.currentLanguage === 'zh' ? '教育背景' : 'Education Background',
          backgroundImage: this.educationImages[index % this.educationImages.length],
          logo: '',
          logoColor: this.colors[(index + 4) % this.colors.length]
        }
      })
    }
  },
  methods: {
    switchLanguage(lang) {
      this.currentLanguage = lang
      // 保存语言选择到本地存储
      localStorage.setItem('resume-language', lang)
    }
  },
  mounted() {
    // 从本地存储恢复语言选择
    const savedLanguage = localStorage.getItem('resume-language')
    if (savedLanguage && this.locales[savedLanguage]) {
      this.currentLanguage = savedLanguage
    }
  }
}
</script>

<style scoped>
/* 项目页面样式 */
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
}

.project-section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #ffffff;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.back-button {
  margin-bottom: 40px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #00D4AA;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #00B894;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 212, 170, 0.3);
}

.back-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.back-btn:hover .back-arrow {
  transform: translateX(-3px);
}
</style>