<template>
  <div id="app">
    <!-- 顶部头部 -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <div class="logo-icon">J.L</div>
            <span class="logo-text">joshen.me</span>
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
          <button class="back-btn">
            <span class="back-arrow">←</span>
            Head Back
          </button>
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

          <!-- Freelance Projects 部分 -->
          <section class="project-section">
            <h2 class="section-title">Freelance Projects</h2>
            <div class="projects-grid">
              <ProjectCard 
                v-for="project in freelanceProjects" 
                :key="project.id"
                :project="project"
              />
            </div>
          </section>

          <!-- Personal Projects 部分 -->
          <section class="project-section">
            <h2 class="section-title">Personal Projects</h2>
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
import ProjectCard from './components/ProjectCard.vue'
import zhLocale from './locales/zh.js'
import enLocale from './locales/en.js'

export default {
  name: 'App',
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
      // 职业项目数据
      careerProjects: [
        {
          id: 1,
          name: 'ServisHero',
          subtitle: 'Booking Platform (Services)',
          backgroundImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
          logo: 'H ServisHero',
          logoColor: '#FFD700'
        },
        {
          id: 2,
          name: 'Pencil',
          subtitle: 'Creative AI (Advertising)',
          backgroundImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
          logo: 'p-e-n-c-i-l',
          logoColor: '#00D4AA'
        },
        {
          id: 3,
          name: 'Supabase',
          subtitle: 'Realtime Database',
          backgroundImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
          logo: 'supabase',
          logoColor: '#3ECF8E'
        }
      ],
      // 自由职业项目数据
      freelanceProjects: [
        {
          id: 4,
          name: 'Lightbox Rooftop',
          subtitle: 'Event Space',
          backgroundImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
          logo: 'LIGHTBOX',
          logoColor: '#FFFFFF'
        },
        {
          id: 5,
          name: 'Hotel 89',
          subtitle: 'Fashion (E-Commerce)',
          backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
          logo: 'HOTEL 89',
          logoColor: '#FFFFFF'
        },
        {
          id: 6,
          name: 'MyFishman',
          subtitle: 'Seafood',
          backgroundImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
          logo: 'MY FISHMAN',
          logoColor: '#FFFFFF'
        },
        {
          id: 7,
          name: 'Stared',
          subtitle: 'Cosmetics',
          backgroundImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
          logo: 'STARED COSMETICS',
          logoColor: '#FFFFFF'
        },
        {
          id: 8,
          name: 'MadThread',
          subtitle: 'Fashion (Rental)',
          backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
          logo: 'madthread',
          logoColor: '#FFFFFF'
        },
        {
          id: 9,
          name: 'AngelCentral',
          subtitle: 'Investor Community',
          backgroundImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop',
          logo: 'ANGEL CENTRAL',
          logoColor: '#87CEEB'
        }
      ],
      // 个人项目数据
      personalProjects: [
        {
          id: 10,
          name: 'Portfolio',
          subtitle: 'Personal Website',
          backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
          logo: 'PORTFOLIO',
          logoColor: '#FFFFFF'
        },
        {
          id: 11,
          name: 'TaskManager',
          subtitle: 'Productivity App',
          backgroundImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
          logo: 'TASK MANAGER',
          logoColor: '#FFFFFF'
        },
        {
          id: 12,
          name: 'WeatherApp',
          subtitle: 'Weather Dashboard',
          backgroundImage: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
          logo: 'WEATHER APP',
          logoColor: '#FFFFFF'
        }
      ]
    }
  },
  computed: {
    currentLocale() {
      return this.locales[this.currentLanguage]
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
