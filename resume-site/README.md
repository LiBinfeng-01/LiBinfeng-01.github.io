# 个人简历展示网站

一个使用 Vue.js 3 和 Vite 构建的现代化个人简历展示网站。

## 功能特点

- 🎨 现代化的卡片式设计
- 📱 完全响应式布局
- ⚡ 基于 Vue 3 和 Vite 的快速开发体验
- 🎯 模块化组件设计
- 🌈 美观的渐变色彩搭配
- 📄 包含个人信息、技能、工作经验、教育背景、项目经验、证书奖项等完整简历信息

## 技术栈

- **前端框架**: Vue.js 3
- **构建工具**: Vite
- **样式**: 原生 CSS3 (支持渐变、阴影、动画等现代特性)
- **开发语言**: JavaScript ES6+

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
resume-site/
├── src/
│   ├── components/
│   │   └── Card.vue          # 卡片组件
│   ├── App.vue              # 主应用组件
│   ├── main.js              # 应用入口
│   └── style.css            # 全局样式
├── index.html               # HTML 模板
├── package.json             # 项目配置
├── vite.config.js           # Vite 配置
└── README.md                # 项目说明
```

## 自定义内容

要修改简历内容，请编辑 `src/App.vue` 文件中的 `data()` 部分：

- `personalInfo`: 个人信息
- `skills`: 技能专长
- `experience`: 工作经验
- `education`: 教育背景
- `projects`: 项目经验
- `awards`: 证书奖项

## 样式自定义

- 全局样式在 `src/style.css` 中定义
- 卡片组件样式在 `src/components/Card.vue` 中定义
- 支持响应式设计，适配桌面端和移动端

## 部署

构建完成后，将 `dist` 目录中的文件部署到任何静态文件服务器即可。

## 许可证

MIT License
