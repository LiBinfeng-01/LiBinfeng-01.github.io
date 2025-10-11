<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header-top">
          <h1 class="name">{{ currentLocale.personalInfo.name }}</h1>
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
        <p class="title">{{ currentLocale.personalInfo.title }}</p>
        <div class="contact-info">
          <span v-for="contact in currentLocale.personalInfo.contact" :key="contact.type" class="contact-item">
            <i :class="contact.icon"></i>
            {{ contact.value }}
          </span>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <div class="cards-grid">
          <!-- 个人简介卡片 -->
          <Card :title="currentLocale.sections.about" icon="👤">
            <p>{{ currentLocale.personalInfo.summary }}</p>
          </Card>

          <!-- 技能卡片 -->
          <Card :title="currentLocale.sections.skills" icon="💻">
            <div class="skills-grid">
              <div v-for="skill in currentLocale.skills" :key="skill.category" class="skill-category">
                <h4>{{ skill.category }}</h4>
                <div class="skill-tags">
                  <span v-for="skillName in skill.items" :key="skillName" class="skill-tag">
                    {{ skillName }}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <!-- 工作经验卡片 -->
          <Card :title="currentLocale.sections.experience" icon="💼">
            <div class="experience-list">
              <div v-for="job in currentLocale.experience" :key="job.id" class="experience-item">
                <div class="job-header">
                  <h4>{{ job.position }}</h4>
                  <span class="company">{{ job.company }}</span>
                  <span class="duration">{{ job.duration }}</span>
                </div>
                <p class="description">{{ job.description }}</p>
                <ul v-if="job.responsibilities" class="responsibilities">
                  <li v-for="responsibility in job.responsibilities" :key="responsibility">
                    {{ responsibility }}
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <!-- 教育背景卡片 -->
          <Card :title="currentLocale.sections.education" icon="🎓">
            <div class="education-list">
              <div v-for="edu in currentLocale.education" :key="edu.id" class="education-item">
                <h4>{{ edu.degree }}</h4>
                <p class="school">{{ edu.school }}</p>
                <p class="period">{{ edu.period }}</p>
                <p v-if="edu.description" class="description">{{ edu.description }}</p>
              </div>
            </div>
          </Card>

          <!-- 项目经验卡片 -->
          <Card :title="currentLocale.sections.projects" icon="🚀">
            <div class="project-list">
              <div v-for="project in currentLocale.projects" :key="project.id" class="project-item">
                <div class="project-header">
                  <h4>{{ project.name }}</h4>
                  <span class="project-period">{{ project.period }}</span>
                </div>
                <p class="project-description">{{ project.description }}</p>
                <div v-if="project.technologies" class="tech-tags">
                  <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <!-- 证书奖项卡片 -->
          <Card :title="currentLocale.sections.awards" icon="🏆">
            <div class="awards-list">
              <div v-for="award in currentLocale.awards" :key="award.id" class="award-item">
                <h4>{{ award.name }}</h4>
                <p class="award-issuer">{{ award.issuer }}</p>
                <p class="award-date">{{ award.date }}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 {{ currentLocale.personalInfo.name }}. {{ currentLocale.footer.copyright }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import zhLocale from './locales/zh.js'
import enLocale from './locales/en.js'

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      currentLanguage: 'zh', // 默认中文
      locales: {
        zh: zhLocale,
        en: enLocale
      }
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
