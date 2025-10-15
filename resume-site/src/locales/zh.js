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
  projectsPage: {
    backButton: '返回首页',
    career: '职业经历',
    technicalSkills: '技术技能',
    education: '教育背景'
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
  },
  // 详细内容 - 用于弹窗显示
  modalDetails: {
    // 职业经历详细内容
    career: {
      1: {
        title: '深圳计算科学研究院 - 数据库优化器开发工程师',
        description: '深圳计算科学研究院以建设世界一流的计算基础科学研究机构为目标，致力于打破国外技术垄断，重点研究以大数据为代表的基础理论，发展底层技术，开发核心系统，打造中国原创的基础软件品牌，提供源头技术，培育高端人才，引领产业创新。',
        responsibilities: [
          '我加入其数据库优化器团队，负责YashanDB数据库优化器模块开发。主要开发了与PostgreSQL的集成模块，实现了分布式优化器功能，参与了数据库架构的演进设计，优化了行列执行引擎的兼容性，提供了技术支持和问题解决。',
        ],
        technologies: ['C++', 'YashanDB', 'PostgreSQL', '分布式系统', '数据库优化'],
        achievements: [
          '成功实现了分布式优化器功能',
          '完成了与PostgreSQL的深度集成',
          '提升了数据库系统的整体性能',
          '积累了丰富的分布式数据库开发经验'
        ],
        duration: '2020年11月 - 2023年02月'
      },
      2: {
        title: '北京飞轮科技有限公司 - 数据库优化器开发工程师',
        description: '在Apache Doris项目中负责数据库优化器模块开发，包括Outline、Hints、MiniDump等核心功能。作为核心开发人员，深度参与了数据库优化器的设计和实现。',
        responsibilities: [
          '负责Apache Doris数据库优化器模块的架构设计和开发',
          '从零到一实现了Outline(SQL Plan Manager)模块',
          '开发了数据库优化器Hints功能模块',
          '实现了MiniDump(Plan Replayer)模块',
          '与团队协作完成多个重要功能模块',
          '参与代码审查和技术方案讨论'
        ],
        technologies: ['C++', 'Apache Doris', 'SQL优化', '查询优化器', '数据库内核'],
        achievements: [
          '成功交付了多个核心优化器模块',
          '显著提升了数据库查询性能',
          '为生产环境提供了稳定的性能保障',
          '获得了团队和客户的高度认可'
        ],
        duration: '2023年03月 - 至今'
      }
    },
    // 技术技能详细内容
    skills: {
      '编程语言': {
        title: '编程语言',
        description: '熟练掌握多种编程语言，具备扎实的编程基础和丰富的开发经验。',
        details: [
          'C/C++: 精通系统级编程，具备数据库内核开发经验',
          'Java: 熟悉企业级应用开发，掌握Spring框架',
          'Rust: 了解系统编程和内存安全编程',
          'Python: 熟练使用数据分析和脚本开发'
        ],
        experience: '5年以上数据库系统开发经验'
      },
      '数据库技术': {
        title: '数据库技术',
        description: '专注于数据库优化器和查询处理技术，具备深厚的数据库理论基础。',
        details: [
          'Apache Doris: 深度参与优化器模块开发',
          'YashanDB: 负责分布式优化器开发',
          'PostgreSQL: 熟悉查询优化和扩展开发',
          'SQL优化: 精通查询计划优化和性能调优'
        ],
        experience: '3年以上数据库优化器开发经验'
      },
      '开发环境': {
        title: '开发环境',
        description: '熟练使用各种开发工具和环境，具备高效的开发工作流程。',
        details: [
          'Linux: 精通Linux系统管理和开发环境配置',
          'Git: 熟练使用版本控制和协作开发',
          'Docker: 掌握容器化部署和开发',
          '性能分析: 熟练使用各种性能分析工具'
        ],
        experience: '5年以上Linux开发经验'
      }
    },
    // 教育背景详细内容
    education: {
      '哈尔滨工业大学': {
        title: '哈尔滨工业大学 - 物理学硕士',
        description: '在哈尔滨工业大学攻读物理学硕士学位，培养了严谨的科学思维和扎实的理论基础。',
        details: [
          '专业: 物理学',
          '学位: 硕士学位',
          '时间: 2018年09月 - 2020年08月',
          '研究方向: 理论物理和计算物理',
          '主要课程: 量子力学、统计物理、计算物理'
        ],
        achievements: [
          '完成了高质量的硕士论文',
          '参与了多个科研项目',
          '培养了严谨的科研态度'
        ]
      },
      '南方科技大学': {
        title: '南方科技大学 - 物理学学士',
        description: '在南方科技大学完成物理学本科学位，建立了扎实的物理和数学基础。',
        details: [
          '专业: 物理学',
          '学位: 学士学位',
          '时间: 2014年09月 - 2018年06月',
          '主要课程: 高等数学、线性代数、概率论、物理实验',
          'GPA: 优秀'
        ],
        achievements: [
          '获得了扎实的数学和物理基础',
          '培养了良好的逻辑思维能力',
          '参与了多个实验项目'
        ]
      }
    }
  }
}
