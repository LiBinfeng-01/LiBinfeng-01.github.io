<template>
  <div class="project-card" :class="{ 'logo-card': project.isLogo }" :style="{ backgroundImage: `url(${project.backgroundImage})` }" @click="openModal">
      <div class="project-overlay">
      <div class="project-info">
        <h3 class="project-title">{{ project.name }}</h3>
        <p class="project-subtitle">{{ project.subtitle }}</p>
      </div>
    </div>
  </div>

  <!-- 弹窗 -->
  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal">&times;</button>
      
      <!-- 左侧图片区域 -->
      <div class="modal-image-section">
        <div class="modal-image" :class="{ 'modal-logo-image': project.isLogo }" :style="{ backgroundImage: `url(${project.backgroundImage})` }">
        </div>
      </div>
      
      <!-- 右侧内容区域 -->
      <div class="modal-content-section">
        <div class="modal-header">
          <h2 class="modal-title">
            {{ project.name }}
            <span v-if="project.url" class="modal-link-icon">🔗</span>
          </h2>
          <p class="modal-date">{{ project.duration || ($parent.currentLanguage === 'zh' ? '项目时间' : 'Project Duration') }}</p>
          <div class="modal-meta">
            <div class="modal-meta-item">
              <span class="modal-meta-label">{{ $parent.currentLanguage === 'zh' ? '行业:' : 'Industry:' }}</span>
              <span class="modal-meta-value">{{ project.industry || ($parent.currentLanguage === 'zh' ? '技术开发' : 'Technology Development') }}</span>
            </div>
            <div class="modal-meta-item">
              <span class="modal-meta-label">{{ $parent.currentLanguage === 'zh' ? '角色:' : 'Role:' }}</span>
              <span class="modal-meta-value">{{ project.subtitle }}</span>
            </div>
          </div>
        </div>
        
        <div class="modal-body">
          <div v-if="project.description" class="modal-description">
            <p>{{ project.description }}</p>
          </div>
          
          <div v-if="project.responsibilities && project.responsibilities.length > 0" class="modal-responsibilities">
            <p>{{ project.responsibilities.join(' ') }}</p>
          </div>
          
          <div v-if="project.technologies" class="modal-technologies">
            <div class="tech-tags">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true
      document.body.style.overflow = 'hidden' // 防止背景滚动
    },
    closeModal() {
      this.showModal = false
      document.body.style.overflow = 'auto' // 恢复滚动
    }
  },
  beforeUnmount() {
    // 组件销毁时恢复滚动
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
.project-card {
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 12px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f8f9fa;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Logo卡片特殊样式 */
.logo-card {
  background-size: contain !important;
  background-color: #ffffff !important;
  background-position: center !important;
  padding: 20px;
}

.logo-card .project-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
}

.project-info {
  margin-top: auto;
}

.project-title {
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}

.project-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: #2a2a2a;
  border-radius: 16px;
  width: 90%;
  height: 85%;
  max-width: 1400px;
  max-height: 900px;
  display: flex;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  transition: color 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ff6b6b;
}

/* 左侧图片区域 */
.modal-image-section {
  flex: 0 0 55%;
  position: relative;
}

.modal-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

/* Logo图片在弹窗中的特殊样式 */
.modal-logo-image {
  background-size: contain !important;
  background-color: #ffffff !important;
  background-position: center !important;
  padding: 40px;
}


/* 右侧内容区域 */
.modal-content-section {
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  overflow-y: auto;
  background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
}

.modal-header {
  margin-bottom: 30px;
}

.modal-title {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.3;
}

.modal-link-icon {
  font-size: 1rem;
  opacity: 0.7;
}

.modal-date {
  color: #B0B0B0;
  font-size: 1rem;
  margin: 0 0 25px 0;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
}

.modal-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modal-meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.modal-meta-label {
  color: #A0A0A0;
  font-size: 0.95rem;
  font-weight: 500;
  min-width: 60px;
}

.modal-meta-value {
  color: #E0E0E0;
  font-size: 0.95rem;
  font-weight: 400;
}

.modal-body {
  flex: 1;
}

.modal-description {
  margin-bottom: 25px;
}

.modal-description p {
  color: #D0D0D0;
  line-height: 1.7;
  margin: 0;
  font-size: 1.05rem;
  text-align: justify;
}

.modal-responsibilities {
  margin-bottom: 25px;
}

.modal-responsibilities p {
  color: #D0D0D0;
  line-height: 1.7;
  margin: 0;
  font-size: 1.05rem;
  text-align: justify;
}

.modal-technologies {
  margin-bottom: 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: linear-gradient(135deg, #00D4AA 0%, #00B894 100%);
  color: #000000;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 212, 170, 0.3);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 212, 170, 0.4);
}

@media (max-width: 768px) {
  .project-card {
    height: 250px;
  }
  
  .project-logo {
    font-size: 1.2rem;
  }
  
  .project-title {
    font-size: 1.2rem;
  }
  
  .project-subtitle {
    font-size: 0.9rem;
  }

  .modal-content {
    width: 95%;
    height: 90%;
    flex-direction: column;
  }

  .modal-image-section {
    flex: 0 0 40%;
  }

  .modal-content-section {
    flex: 0 0 60%;
    padding: 20px;
  }

  .modal-title {
    font-size: 1.4rem;
  }

  .modal-date {
    font-size: 0.8rem;
  }

  .modal-meta-label,
  .modal-meta-value {
    font-size: 0.8rem;
  }

  .modal-description p,
  .modal-responsibilities p {
    font-size: 0.9rem;
  }
}
</style>
