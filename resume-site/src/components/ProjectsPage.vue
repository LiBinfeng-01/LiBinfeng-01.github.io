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
            {{ currentLocale.projectsPage.backButton }}
          </router-link>
        </div>

        <!-- 项目网格布局 -->
        <div class="projects-container">
          <!-- Career 部分 -->
          <section class="project-section">
            <h2 class="section-title">{{ currentLocale.projectsPage.career }}</h2>
            <div class="projects-grid career-grid">
              <ProjectCard 
                v-for="project in careerProjects" 
                :key="project.id"
                :project="project"
              />
            </div>
          </section>

          <!-- Internal Projects 部分 -->
          <section class="project-section">
            <h2 class="section-title">{{ currentLocale.projectsPage.internalProjects }}</h2>
            <div class="projects-grid internal-projects-grid">
              <ProjectCard 
                v-for="project in internalProjects" 
                :key="project.id"
                :project="project"
              />
            </div>
          </section>

          <!-- Open Source Projects 部分 -->
          <section class="project-section">
            <h2 class="section-title">{{ currentLocale.projectsPage.openSourceProjects }}</h2>
            <div class="projects-grid">
              <ProjectCard 
                v-for="project in openSourceProjects" 
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
import dorisLogo from '../assets/doris-logo.jpg'

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
      careerImages: [
        sicsLogo,
        selectdbLogo,
        yashandbLogo
      ],
      // 内部项目相关图片
      internalProjectImages: [
        dorisLogo,dorisLogo,dorisLogo,yashandbLogo,yashandbLogo],
      // 开源项目相关图片
      openSourceProjectImages: [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop', // 开源贡献  // 社区项目
      ],
      // 颜色数组
      colors: ['#FF6B35', '#00D4AA', '#3ECF8E', '#FFD700', '#87CEEB', '#FF69B4'],
      // 项目URL映射
      projectUrls: {
        // 职业经历URL
        career: {
          1: 'https://www.sics.ac.cn/', // 深圳计算科学研究院
          2: 'https://www.selectdb.com/', // Apache Doris
          3: 'https://www.yashandb.com/' // 崖山科技
        },
        // 内部项目URL
        internal: {
          'Doris Outline (SQL Plan Manager)': 'https://doris.apache.org/zh-CN/docs/query-acceleration/outline/outline-overview',
          'Doris数据库优化器Hints模块': 'https://doris.apache.org/zh-CN/docs/query-acceleration/hints/hints-overview',
          'Doris Database Optimizer Hints Module': 'https://doris.apache.org/docs/query-acceleration/hints/hints-overview',
          'Doris数据库优化器MiniDump模块': 'https://doris.apache.org/zh-CN/docs/query-acceleration/plan-replayer/plan-replayer-overview',
          'Doris Database Optimizer MiniDump Module': 'https://doris.apache.org/docs/query-acceleration/plan-replayer/plan-replayer-overview',
          'Yashan数据库优化器分布式模块': 'https://www.yashandb.com/',
          'Yashan Database Optimizer Distributed Module': 'https://www.yashandb.com/',
          'Yashan数据库优化器集成模块': 'https://www.yashandb.com/',
          'Yashan Database Optimizer Integration Module': 'https://www.yashandb.com/'
        },
        // 开源项目URL
        openSource: {
          'CSO-Demo Cascade风格优化器': 'https://github.com/nothing-new-labs/cso-demo',
          'CSO-Demo Cascade-Style Optimizer': 'https://github.com/nothing-new-labs/cso-demo'
        }
      },
    }
  },
  computed: {
    currentLocale() {
      return this.locales[this.currentLanguage]
    },
    careerProjects() {
      return this.currentLocale.experience.map((experience, index) => {
        const details = this.currentLocale.modalDetails?.career?.[experience.id] || {}
        return {
          id: experience.id,
          name: experience.company,
          subtitle: experience.position,
          description: details.description || experience.description,
          technologies: details.technologies || [],
          responsibilities: details.responsibilities || experience.responsibilities || [],
          achievements: details.achievements || [],
          url: this.projectUrls.career[experience.id] || '',
          duration: details.duration || experience.duration,
          industry: this.currentLanguage === 'zh' ? '数据库技术' : 'Database Technology',
          backgroundImage: this.careerImages[index % this.careerImages.length],
          logo: '',
          logoColor: this.colors[index % this.colors.length],
          isLogo: index === 0 // 第一张卡片（YashanDB）使用logo样式
        }
      })
    },
    internalProjects() {
      return this.currentLocale.skills.map((skill, index) => {
        const details = this.currentLocale.modalDetails?.skills?.[skill.category] || {}
        const descriptionText = this.currentLanguage === 'zh' 
          ? `内部项目：在${skill.category}方面拥有丰富的实践经验，熟练掌握相关技术栈。`
          : `Internal Project: Extensive practical experience in ${skill.category}, proficient in related technology stacks.`
        return {
          id: index + 10,
          name: skill.category,
          subtitle: skill.items.join(', '),
          description: details.description || descriptionText,
          technologies: skill.items,
          details: details.details || [],
          experience: details.experience || '',
          duration: details.experience || (this.currentLanguage === 'zh' ? '持续学习' : 'Continuous Learning'),
          industry: this.currentLanguage === 'zh' ? '内部项目' : 'Internal Projects',
          backgroundImage: this.internalProjectImages[index % this.internalProjectImages.length],
          logo: '',
          logoColor: this.colors[(index + 2) % this.colors.length],
          url: this.projectUrls.internal[skill.category] || ''
        }
      })
    },
    openSourceProjects() {
      return this.currentLocale.education.map((edu, index) => {
        const details = this.currentLocale.modalDetails?.education?.[edu.school] || {}
        return {
          id: index + 20,
          name: edu.school,
          subtitle: edu.degree,
          description: details.description || edu.description,
          technologies: [edu.degree, edu.period],
          details: details.details || [],
          achievements: details.achievements || [],
          duration: edu.period,
          industry: this.currentLanguage === 'zh' ? '开源项目' : 'Open Source Projects',
          backgroundImage: this.openSourceProjectImages[index % this.openSourceProjectImages.length],
          logo: '',
          logoColor: this.colors[(index + 4) % this.colors.length],
          url: this.projectUrls.openSource[edu.school] || ''
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
  margin-bottom: 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #ffffff;
  text-align: left;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 0;
}

/* Career部分 - 3个卡片水平排列 */
.career-grid {
  grid-template-columns: repeat(3, 1fr);
}

/* Internal Projects部分 - 2x3网格 */
.internal-projects-grid {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.back-button {
  margin-bottom: 20px;
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

/* 响应式设计 */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .career-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .internal-projects-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .career-grid {
    grid-template-columns: 1fr;
  }
  
  .internal-projects-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .project-section {
    margin-bottom: 0;
  }
}
</style>