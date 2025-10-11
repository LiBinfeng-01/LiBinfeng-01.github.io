<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">
        <span class="card-icon">{{ icon }}</span>
        <h3>{{ title }}</h3>
      </div>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: '📄'
    }
  }
}
</script>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-bottom: 24px;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px 24px;
  color: white;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-icon {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}

.card-title h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: white;
}

.card-content {
  padding: 24px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .card {
    margin-bottom: 16px;
  }
  
  .card-header {
    padding: 16px 20px;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .card-title h3 {
    font-size: 18px;
  }
}
</style>
