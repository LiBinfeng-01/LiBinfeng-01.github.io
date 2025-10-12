export default {
  homePage: {
    greeting: '李彬峰',
    description: '数据库优化器开发工程师，专注于Apache Doris和YashanDB数据库优化器开发。拥有丰富的数据库优化器模块开发经验，包括Outline、Hints、MiniDump等核心功能。',
    ctaText: '查看我的项目经验',
    socialLinks: [
      { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nothing-new-labs/cso-demo' },
      { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:1204975323@qq.com' }
    ]
  },
  personalInfo: {
    name: '李彬峰',
    title: '数据库优化器开发工程师',
    summary: '专注于数据库优化器开发，拥有丰富的Apache Doris和YashanDB数据库优化器模块开发经验。熟练掌握C/C++、Java、Rust等编程语言，具备扎实的数据库理论基础和丰富的项目实践经验。',
    contact: [
      { type: 'email', icon: '📧', value: '1204975323@qq.com' },
      { type: 'phone', icon: '📱', value: '18565770096' },
      { type: 'birth', icon: '🎂', value: '1996.02' }
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
      category: '编程语言',
      items: ['C/C++', 'Java', 'Rust', 'Python', 'SQL', 'Shell脚本']
    },
    {
      category: '数据库技术',
      items: ['Apache Doris', 'YashanDB', 'PostgreSQL', 'SQL优化', '查询优化器', '分布式数据库', '数据库内核开发']
    },
    {
      category: '开发环境',
      items: ['Linux', 'Git', 'Docker', '数据库调优', '性能分析', '调试工具', '版本控制', 'CI/CD']
    }
  ],
  experience: [
    {
      id: 1,
      position: '数据库优化器开发工程师',
      company: '深圳计算科学研究院',
      duration: '2020年11月 - 2023年02月',
      description: '在YashanDB项目中负责数据库优化器模块开发，包括分布式优化器和与PostgreSQL的集成。参与了数据库架构的演进和优化。',
      responsibilities: [
        '负责YashanDB数据库优化器模块开发',
        '实现了分布式优化器功能',
        '开发了与PostgreSQL的集成模块',
        '参与了数据库架构的演进设计',
        '优化了行列执行引擎的兼容性',
        '提供了技术支持和问题解决'
      ]
    },
    {
      id: 2,
      position: '数据库优化器开发工程师',
      company: '北京飞轮科技有限公司',
      duration: '2023年03月 - 至今',
      description: '在Apache Doris项目中负责数据库优化器模块开发，包括Outline、Hints、MiniDump等核心功能。作为核心开发人员，深度参与了数据库优化器的设计和实现。',
      responsibilities: [
        '负责Apache Doris数据库优化器模块的架构设计和开发',
        '从零到一实现了Outline(SQL Plan Manager)模块',
        '开发了数据库优化器Hints功能模块',
        '实现了MiniDump(Plan Replayer)模块',
        '与团队协作完成多个重要功能模块',
        '参与代码审查和技术方案讨论'
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: '物理学 硕士',
      school: '哈尔滨工业大学',
      period: '2018年09月 - 2020年08月',
      description: '在哈尔滨工业大学攻读物理学硕士学位，培养了严谨的科学思维和扎实的理论基础。主要研究方向为理论物理和计算物理，完成了高质量的硕士论文。'
    },
    {
      id: 2,
      degree: '物理学 学士',
      school: '南方科技大学',
      period: '2014年09月 - 2018年06月',
      description: '在南方科技大学完成物理学本科学位，建立了扎实的物理和数学基础。主要课程包括高等数学、线性代数、概率论、物理实验等，培养了良好的逻辑思维能力。'
    }
  ],
  projects: [
    {
      id: 1,
      name: 'Doris Outline (SQL Plan Manager)',
      period: '2023年 - 至今',
      description: '从零到一实现了doris outline(SQL PLAN MANAGER)模块，能够固定执行计划来避免性能出现波动。',
      technologies: ['C++', 'Apache Doris', 'SQL优化']
    },
    {
      id: 2,
      name: 'CSO-Demo Cascade-Style Optimizer',
      period: '2023年 - 至今',
      description: '从零到一实现了cbo优化器模块，能够进行计划枚举，根据cost进行计划选择。目前实现了index计划选择。',
      technologies: ['C++', 'CBO优化器', '计划枚举'],
      url: 'https://github.com/nothing-new-labs/cso-demo'
    },
    {
      id: 3,
      name: 'Doris数据库优化器Hints模块',
      period: '2023年 - 至今',
      description: '实现了doris数据库cbo优化器hint功能，能够根据用户设定进行自定义的join计划选择，进行调优。',
      technologies: ['C++', 'Apache Doris', 'Hints', '查询优化'],
      url: 'https://doris.apache.org/zh-CN/docs/query-acceleration/hints/hints-overview'
    },
    {
      id: 4,
      name: 'Doris数据库优化器MiniDump模块',
      period: '2023年 - 至今',
      description: '开发doris数据库优化器模块minidump(PLAN REPLAYER)模块，能够一键式收集环境信息，使得分析客户问题更加便捷。',
      technologies: ['C++', 'Apache Doris', 'MiniDump', '问题诊断']
    }
  ],
  awards: [
    {
      id: 1,
      name: 'CET-6',
      issuer: '大学英语六级',
      date: '492分'
    },
    {
      id: 2,
      name: 'TOEFL',
      issuer: '托福考试',
      date: '86分'
    }
  ],
  footer: {
    copyright: '保留所有权利。'
  }
}
