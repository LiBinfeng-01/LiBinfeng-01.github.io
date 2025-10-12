<template>
  <div class="home-page">
    <!-- 头部 -->
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

    <!-- 主要内容 -->
    <main class="main">
      <div class="container">
        <div class="content-wrapper">
          <!-- 左侧内容 -->
          <div class="left-content">
            <h1 class="main-heading">{{ currentLocale.homePage.greeting }}</h1>
            <p class="description">{{ currentLocale.homePage.description }}</p>
            
            <!-- 社交媒体链接 -->
            <div class="social-links">
              <a 
                v-for="link in currentLocale.homePage.socialLinks" 
                :key="link.name"
                :href="link.url" 
                :title="link.name"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i :class="link.icon"></i>
              </a>
            </div>
          </div>

          <!-- 右侧按钮 -->
          <div class="right-content">
            <router-link to="/projects" class="cta-button">
              {{ currentLocale.homePage.ctaText }}
              <span class="arrow">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import zhLocale from '../locales/zh.js'
import enLocale from '../locales/en.js'

export default {
  name: 'HomePage',
  data() {
    return {
      currentLanguage: 'zh',
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
      localStorage.setItem('resume-language', lang)
    }
  },
  mounted() {
    const savedLanguage = localStorage.getItem('resume-language')
    if (savedLanguage && this.locales[savedLanguage]) {
      this.currentLanguage = savedLanguage
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #222222;
  color: white;
}

.header {
  background: #222222;
  color: white;
  padding: 20px 0;
  border-bottom: 1px solid #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tennis-logo {
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-15deg);
  transition: transform 0.3s ease;
}

.tennis-logo:hover {
  transform: rotate(-15deg) scale(1.1);
}

.tennis-ball {
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  box-shadow: 
    0 2px 8px rgba(0,0,0,0.2),
    0 1px 3px rgba(0,0,0,0.1),
    inset 0 1px 0 rgba(255,255,255,0.8);
  border: 1px solid rgba(0,0,0,0.1);
}

.tennis-ball::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 2px;
  right: 2px;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #333 20%, #333 80%, transparent 100%);
  transform: translateY(-50%);
}

.tennis-ball::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 2px;
  bottom: 2px;
  width: 1px;
  background: linear-gradient(180deg, transparent 0%, #333 20%, #333 80%, transparent 100%);
  transform: translateX(-50%);
}

.tennis-racket {
  width: 32px;
  height: 32px;
  border: 2px solid #2c3e50;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
  box-shadow: 
    0 2px 6px rgba(0,0,0,0.3),
    inset 0 1px 0 rgba(255,255,255,0.1);
}

.tennis-racket::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 22px;
  height: 22px;
  border: 1px solid #34495e;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: 
    linear-gradient(45deg, transparent 48%, #34495e 49%, #34495e 51%, transparent 52%),
    linear-gradient(-45deg, transparent 48%, #34495e 49%, #34495e 51%, transparent 52%);
  background-size: 3px 3px;
}

.tennis-racket::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 3px;
  height: 12px;
  background: linear-gradient(180deg, #2c3e50 0%, #1a252f 100%);
  transform: translateX(-50%);
  border-radius: 0 0 2px 2px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.logo-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
}

.language-switcher {
  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 4px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
}

.lang-btn {
  background: transparent;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.lang-btn.active {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.main {
  flex: 1;
  padding: 80px 0;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 80px);
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 60px;
  align-items: center;
  width: 100%;
}

.left-content {
  max-width: 600px;
}

.main-heading {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 30px 0;
  line-height: 1.1;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #cccccc;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-link {
  width: 50px;
  height: 50px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-link:hover {
  background: #00D4AA;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 212, 170, 0.3);
}

.right-content {
  display: flex;
  align-items: center;
}

.cta-button {
  background: #00D4AA;
  color: white;
  padding: 20px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 212, 170, 0.3);
}

.cta-button:hover {
  background: #00B894;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 212, 170, 0.4);
}

.arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(4px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .main-heading {
    font-size: 2.5rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .cta-button {
    padding: 16px 32px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .main-heading {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .social-link {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
}
</style>
