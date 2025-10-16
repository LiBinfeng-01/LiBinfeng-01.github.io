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
    internalProjects: '内部项目',
    openSourceProjects: '开源项目'
  },
  skills: [
    {
      category: 'YashanKnows知识库系统',
      items: ['Node.js', 'Vue.js', 'Golang', 'RAG', '向量数据库', 'YashanDB', 'Markdown解析', '流式处理']
    },
    {
      category: 'Doris Outline (SQL Plan Manager)',
      items: ['C++', 'Apache Doris', 'SQL优化', '执行计划管理']
    },
    {
      category: 'Doris数据库优化器Hints模块',
      items: ['C++', 'Apache Doris', 'Hints', '查询优化', '性能调优']
    },
    {
      category: 'Doris数据库优化器MiniDump模块',
      items: ['C++', 'Apache Doris', 'MiniDump', '问题诊断', '环境收集']
    },
    {
      category: 'Yashan数据库优化器分布式模块',
      items: ['C++', 'YashanDB', '分布式优化', '架构设计']
    },
    {
      category: 'Yashan数据库优化器集成模块',
      items: ['C++', 'YashanDB', 'PostgreSQL', '执行引擎', '兼容性']
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
      duration: '2023年03月 - 2025年04月',
      description: '在Apache Doris项目中负责数据库优化器模块开发，包括Outline、Hints、MiniDump等核心功能。作为核心开发人员，深度参与了数据库优化器的设计和实现。',
      responsibilities: [
        '负责Apache Doris数据库优化器模块的架构设计和开发',
        '从零到一实现了Outline(SQL Plan Manager)模块',
        '开发了数据库优化器Hints功能模块',
        '实现了MiniDump(Plan Replayer)模块',
        '与团队协作完成多个重要功能模块',
        '参与代码审查和技术方案讨论'
      ]
    },
    {
      id: 3,
      position: '全栈开发工程师',
      company: '深圳崖山科技有限公司',
      duration: '2025年05月 - 至今',
      description: '深圳崖山科技有限公司(简称:崖山科技)是由深圳计算科学研究院孵化，并由YashanDB团队直接组建设立的商业公司，公司坚持全自研工程实践的模式，致力于YashanDB的创新、开发、销售和服务等，打造中国原创的基础软件品牌。',
      responsibilities: [
        '负责YashanDB相关产品的全栈开发',
        '参与产品创新和开发工作',
        '与YashanDB团队协作技术方案',
        '为建设中国原创的基础软件品牌贡献力量',
        '参与销售和服务支持活动'
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: 'CBO优化器',
      school: 'CSO-Demo Cascade风格优化器',
      period: '2023年 - 至今',
      description: '从零到一实现了cbo优化器模块，能够进行计划枚举，根据cost进行计划选择。目前实现了index计划选择。',
      url: 'https://github.com/nothing-new-labs/cso-demo',
      documentation: 'https://nothing-newlabs.github.io/'
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
        duration: '2023年03月 - 2025年04月'
      },
      3: {
        title: '深圳崖山科技有限公司 - 全栈开发工程师',
        description: '深圳崖山科技有限公司(简称:崖山科技)是由深圳计算科学研究院孵化，并由YashanDB团队直接组建设立的商业公司，公司坚持全自研工程实践的模式，致力于YashanDB的创新、开发、销售和服务等，打造中国原创的基础软件品牌。',
        responsibilities: [
          '负责YashanDB相关产品的全栈开发',
          '参与产品创新和开发工作',
          '与YashanDB团队协作技术方案',
          '为建设中国原创的基础软件品牌贡献力量',
          '参与销售和服务支持活动'
        ],
        technologies: ['全栈开发', 'YashanDB', '数据库技术', '产品开发', '销售与服务'],
        achievements: [
          '为YashanDB产品开发和创新做出贡献',
          '参与建设中国原创的基础软件品牌',
          '与YashanDB团队有效协作',
          '参与全面的产品生命周期活动'
        ],
        duration: '2025年05月 - 至今'
      }
    },
    // 内部项目详细内容
    skills: {
      'YashanKnows知识库系统': {
        title: 'YashanKnows知识库系统',
        description: '基于RAG技术实现的全栈知识库系统，利用YashanDB数据库系统的向量和文档存储能力，实现文档和向量的统一存储。主要开发了分块模块和任务管理器，支持流式分块和结构化Markdown文档处理。',
        details: [
          '开发了基于开源项目goldmark的分块模块',
          '将reader改造为stream reader支持流式分块',
          '实现结构化Markdown文档分块处理',
          '开发了包含网站和服务端的任务管理器',
          '使用Node.js和Vue.js构建前端界面',
          '使用Golang开发服务端API',
          '充分利用YashanDB的向量和文档存储能力'
        ],
        experience: '2024年 - 至今',
        url: 'https://www.yashandb.com/'
      },
      'Doris Outline (SQL Plan Manager)': {
        title: 'Doris Outline (SQL Plan Manager)',
        description: '从零到一实现了doris outline(SQL PLAN MANAGER)模块，能够固定执行计划来避免性能出现波动。',
        details: [
          '从零开始设计和实现SQL Plan Manager模块',
          '实现执行计划的固定和缓存机制',
          '避免查询性能波动，提升系统稳定性',
          '支持复杂查询的执行计划管理'
        ],
        experience: '2023年 - 至今',
        url: 'https://doris.apache.org/zh-CN/docs/query-acceleration/hints/hints-overview'
      },
      'Doris数据库优化器Hints模块': {
        title: 'Doris数据库优化器Hints模块',
        description: '实现了doris数据库cbo优化器hint功能，能够根据用户设定进行自定义的join计划选择，进行调优。',
        details: [
          '设计和实现CBO优化器hint功能',
          '支持用户自定义join计划选择',
          '提供灵活的性能调优选项',
          '与现有优化器架构深度集成'
        ],
        experience: '2023年 - 至今',
        url: 'https://doris.apache.org/zh-CN/docs/query-acceleration/hints/hints-overview'
      },
      'Doris数据库优化器MiniDump模块': {
        title: 'Doris数据库优化器MiniDump模块',
        description: '开发doris数据库优化器模块minidump(PLAN REPLAYER)模块，能够一键式收集环境信息，使得分析客户问题更加便捷。',
        details: [
          '实现一键式环境信息收集工具',
          '简化客户问题分析和诊断流程',
          '提供完整的执行计划重放功能',
          '类似gporca的minidump功能'
        ],
        experience: '2023年 - 至今'
      },
      'Yashan数据库优化器分布式模块': {
        title: 'Yashan数据库优化器分布式模块',
        description: '崖山数据库优化器模块分布式模块能力，由于架构的演变分别有两种实现。',
        details: [
          '实现分布式优化器核心功能',
          '支持架构演进的两种实现方案',
          '提供分布式查询优化能力',
          '确保系统架构的灵活性和可扩展性'
        ],
        experience: '2020年 - 2023年'
      },
      'Yashan数据库优化器集成模块': {
        title: 'Yashan数据库优化器集成模块',
        description: '崖山数据库优化器模块对接postgresql与yashan执行引擎，使得行列执行引擎分别可以跑通。',
        details: [
          '实现与PostgreSQL的深度集成',
          '支持行列执行引擎的兼容性',
          '确保不同执行引擎的协调工作',
          '提供统一的查询处理接口'
        ],
        experience: '2020年 - 2023年'
      }
    },
    // 开源项目详细内容
    education: {
      'CSO-Demo Cascade风格优化器': {
        title: 'CSO-Demo Cascade风格优化器',
        description: '从零到一实现了cbo优化器模块，能够进行计划枚举，根据cost进行计划选择。目前实现了index计划选择。',
        details: [
          '项目类型: 开源项目',
          '开发语言: C++',
          '项目时间: 2023年 - 至今',
          '核心功能: CBO优化器、计划枚举、成本计算',
          '当前状态: 支持index计划选择'
        ],
        achievements: [
          '从零开始设计和实现CBO优化器',
          '实现了完整的计划枚举功能',
          '支持基于成本的计划选择',
          '开源项目，为社区贡献代码'
        ],
        url: 'https://github.com/nothing-new-labs/cso-demo',
        documentation: 'https://nothing-newlabs.github.io/'
      }
    }
  }
}
