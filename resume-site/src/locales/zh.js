export default {
  personalInfo: {
    name: '张三',
    title: '前端开发工程师',
    summary: '拥有5年前端开发经验，熟练掌握Vue.js、React、Node.js等技术栈，具备丰富的项目经验和团队协作能力。热爱技术，持续学习新技术，致力于创造优秀的用户体验。',
    contact: [
      { type: 'email', icon: '📧', value: 'zhangsan@example.com' },
      { type: 'phone', icon: '📱', value: '+86 138-0000-0000' },
      { type: 'location', icon: '📍', value: '北京市朝阳区' },
      { type: 'github', icon: '🐙', value: 'github.com/zhangsan' }
    ]
  },
  sections: {
    about: '个人简介',
    skills: '技能专长',
    experience: '工作经验',
    education: '教育背景',
    projects: '项目经验',
    awards: '证书奖项'
  },
  skills: [
    {
      category: '前端技术',
      items: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'Webpack', 'Vite']
    },
    {
      category: '后端技术',
      items: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis', 'RESTful API']
    },
    {
      category: '工具与框架',
      items: ['Git', 'Docker', 'Linux', 'AWS', 'Nginx', 'Jest', 'Cypress']
    }
  ],
  experience: [
    {
      id: 1,
      position: '高级前端开发工程师',
      company: '科技有限公司',
      duration: '2021.03 - 至今',
      description: '负责公司核心产品的前端开发工作，带领团队完成多个重要项目。',
      responsibilities: [
        '负责公司主要产品的前端架构设计和开发',
        '带领3人前端团队，指导初级开发人员',
        '优化前端性能，提升用户体验',
        '参与产品需求分析和技术方案制定'
      ]
    },
    {
      id: 2,
      position: '前端开发工程师',
      company: '互联网公司',
      duration: '2019.06 - 2021.02',
      description: '参与多个B端和C端项目的前端开发，积累了丰富的项目经验。',
      responsibilities: [
        '开发企业级管理系统前端界面',
        '与后端团队协作完成API对接',
        '参与移动端H5页面开发',
        '维护和优化现有项目代码'
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: '计算机科学与技术 学士',
      school: '北京理工大学',
      period: '2015.09 - 2019.06',
      description: '主修课程：数据结构、算法设计、软件工程、数据库系统、计算机网络'
    }
  ],
  projects: [
    {
      id: 1,
      name: '企业级管理系统',
      period: '2022.01 - 2022.08',
      description: '基于Vue3 + TypeScript开发的企业级管理系统，支持多租户、权限管理、数据可视化等功能。',
      technologies: ['Vue3', 'TypeScript', 'Element Plus', 'Echarts', 'WebSocket']
    },
    {
      id: 2,
      name: '移动端电商平台',
      period: '2021.05 - 2021.12',
      description: '使用Vue.js开发的移动端电商平台，支持商品展示、购物车、订单管理等功能。',
      technologies: ['Vue.js', 'Vant', 'Axios', 'Sass', 'PWA']
    }
  ],
  awards: [
    {
      id: 1,
      name: '优秀员工奖',
      issuer: '科技有限公司',
      date: '2023.12'
    },
    {
      id: 2,
      name: '前端技术分享最佳讲师',
      issuer: '技术社区',
      date: '2023.08'
    }
  ],
  footer: {
    copyright: '保留所有权利。'
  }
}
