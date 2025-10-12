<template>
  <div class="project-card" :style="{ backgroundImage: `url(${project.backgroundImage})` }" @click="openModal">
    <div class="project-overlay">
      <div class="project-logo" :style="{ color: project.logoColor }">
        {{ project.logo }}
      </div>
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
      <div class="modal-header">
        <h2 class="modal-title">{{ project.name }}</h2>
        <p class="modal-subtitle">{{ project.subtitle }}</p>
      </div>
      <div class="modal-body">
        <div v-if="project.description" class="modal-description">
          <h3>{{ $parent.currentLocale?.sections?.about || '项目描述' }}</h3>
          <p>{{ project.description }}</p>
        </div>
        <div v-if="project.technologies" class="modal-technologies">
          <h3>{{ $parent.currentLocale?.sections?.skills || '技术栈' }}</h3>
          <div class="tech-tags">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
        <div v-if="project.responsibilities && project.responsibilities.length > 0" class="modal-responsibilities">
          <h3>主要职责</h3>
          <ul>
            <li v-for="responsibility in project.responsibilities" :key="responsibility">
              {{ responsibility }}
            </li>
          </ul>
        </div>
        <div v-if="project.achievements && project.achievements.length > 0" class="modal-achievements">
          <h3>主要成就</h3>
          <ul>
            <li v-for="achievement in project.achievements" :key="achievement">
              {{ achievement }}
            </li>
          </ul>
        </div>
        <div v-if="project.details && project.details.length > 0" class="modal-details">
          <h3>详细信息</h3>
          <ul>
            <li v-for="detail in project.details" :key="detail">
              {{ detail }}
            </li>
          </ul>
        </div>
        <div v-if="project.experience" class="modal-experience">
          <h3>工作经验</h3>
          <p>{{ project.experience }}</p>
        </div>
        <div v-if="project.url" class="modal-links">
          <h3>相关链接</h3>
          <a :href="project.url" target="_blank" class="modal-link">
            <i class="fas fa-external-link-alt"></i>
            查看项目
          </a>
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
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
  justify-content: space-between;
  padding: 20px;
}

.project-logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: auto;
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: #1a1a1a;
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: #00D4AA;
}

.modal-header {
  padding: 30px 30px 20px 30px;
  border-bottom: 1px solid #333;
}

.modal-title {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 10px 0;
}

.modal-subtitle {
  color: #00D4AA;
  font-size: 1.1rem;
  margin: 0;
}

.modal-body {
  padding: 30px;
}

.modal-body h3 {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  border-bottom: 2px solid #00D4AA;
  padding-bottom: 5px;
  display: inline-block;
}

.modal-description p {
  color: #cccccc;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.modal-technologies {
  margin-bottom: 20px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: #00D4AA;
  color: #000000;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.modal-responsibilities,
.modal-achievements,
.modal-details,
.modal-experience {
  margin-bottom: 20px;
}

.modal-responsibilities ul,
.modal-achievements ul,
.modal-details ul {
  color: #cccccc;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}

.modal-responsibilities li,
.modal-achievements li,
.modal-details li {
  margin-bottom: 8px;
}

.modal-experience p {
  color: #cccccc;
  line-height: 1.6;
  margin: 0;
  font-style: italic;
}

.modal-links {
  margin-bottom: 0;
}

.modal-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #00D4AA;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.modal-link:hover {
  color: #00B894;
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
    margin: 10px;
    max-height: 90vh;
  }

  .modal-header {
    padding: 20px 20px 15px 20px;
  }

  .modal-body {
    padding: 20px;
  }

  .modal-title {
    font-size: 1.5rem;
  }
}
</style>
