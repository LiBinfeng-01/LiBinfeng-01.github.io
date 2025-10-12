<template>
  <div class="project-card" :style="{ backgroundImage: `url(${project.backgroundImage})` }">
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
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
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
}
</style>
