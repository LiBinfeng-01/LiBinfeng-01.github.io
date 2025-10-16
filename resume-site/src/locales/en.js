export default {
  homePage: {
    greeting: 'Binfeng Li',
    description: 'Database optimizer developer specializing in Apache Doris and YashanDB database optimizer development. Extensive experience in database optimizer module development including Outline, Hints, MiniDump and other core functionalities.',
    ctaText: 'View my project experience',
    socialLinks: [
      { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nothing-new-labs/cso-demo' },
      { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:1204975323@qq.com' }
    ]
  },
  personalInfo: {
    name: 'Binfeng Li',
    title: 'Database Optimizer Developer',
    summary: 'Specialized in database optimizer development with extensive experience in Apache Doris and YashanDB database optimizer module development. Proficient in C/C++, Java, Rust and other programming languages with solid database theoretical foundation and rich project experience.',
    contact: [
      { type: 'email', icon: '📧', value: '1204975323@qq.com' },
      { type: 'phone', icon: '📱', value: '18565770096' },
      { type: 'birth', icon: '🎂', value: '1996.02' }
    ]
  },
  sections: {
    about: 'About Me',
    skills: 'Skills',
    experience: 'Work Experience',
    education: 'Education',
    projects: 'Projects',
    awards: 'Awards & Certifications'
  },
  projectsPage: {
    backButton: 'Head Back',
    career: 'Career',
    internalProjects: 'Internal Projects',
    openSourceProjects: 'Open Source Projects'
  },
  skills: [
    {
      category: 'YashanKnows Knowledge Base System',
      items: ['Node.js', 'Vue.js', 'Golang', 'RAG', 'Vector Database', 'YashanDB', 'Markdown Parsing', 'Stream Processing']
    },
    {
      category: 'Doris Outline (SQL Plan Manager)',
      items: ['C++', 'Apache Doris', 'SQL Optimization', 'Execution Plan Management']
    },
    {
      category: 'Doris Database Optimizer Hints Module',
      items: ['C++', 'Apache Doris', 'Hints', 'Query Optimization', 'Performance Tuning']
    },
    {
      category: 'Doris Database Optimizer MiniDump Module',
      items: ['C++', 'Apache Doris', 'MiniDump', 'Issue Diagnosis', 'Environment Collection']
    },
    {
      category: 'Yashan Database Optimizer Distributed Module',
      items: ['C++', 'YashanDB', 'Distributed Optimization', 'Architecture Design']
    },
    {
      category: 'Yashan Database Optimizer Integration Module',
      items: ['C++', 'YashanDB', 'PostgreSQL', 'Execution Engine', 'Compatibility']
    }
  ],
  experience: [
    {
      id: 1,
      position: 'Database Optimizer Developer',
      company: 'Shenzhen Institute of Computing Science',
      duration: 'November 2020 - February 2023',
      description: 'The institute is committed to advancing fundamental research in China, developing core computing systems, and taking global lead in research areas in connection with big data analytics..',
      responsibilities: [
        'Responsible for YashanDB database optimizer module development',
        'Implemented distributed optimizer functionality',
        'Developed integration modules with PostgreSQL',
        'Participated in database architecture evolution design',
        'Optimized compatibility between row-based and columnar execution engines',
        'Provided technical support and problem resolution'
      ]
    },
    {
      id: 2,
      position: 'Database Optimizer Developer',
      company: 'Beijing Feilun Technology Co., Ltd.',
      duration: 'March 2023 - April 2025',
      description: 'Responsible for Apache Doris database optimizer module development, including Outline, Hints, MiniDump and other core functionalities. As a core developer, deeply involved in the design and implementation of database optimizers.',
      responsibilities: [
        'Responsible for architecture design and development of Apache Doris database optimizer modules',
        'Implemented Outline (SQL Plan Manager) module from scratch',
        'Developed database optimizer Hints functionality module',
        'Implemented MiniDump (Plan Replayer) module',
        'Collaborated with team to complete multiple important functional modules',
        'Participated in code reviews and technical solution discussions'
      ]
    },
    {
      id: 3,
      position: 'Full Stack Developer',
      company: 'Shenzhen Yashan Technology Co., Ltd.',
      duration: 'May 2025 - Present',
      description: 'Shenzhen Yashan Technology Co., Ltd. (Yashan Technology) is a commercial company incubated by Shenzhen Institute of Computing Science and directly established by the YashanDB team. The company adheres to a fully self-developed engineering practice model, dedicated to innovation, development, sales and services of YashanDB, building China\'s original basic software brand.',
      responsibilities: [
        'Responsible for full-stack development of YashanDB related products',
        'Participated in product innovation and development',
        'Collaborated with the YashanDB team on technical solutions',
        'Contributed to building China\'s original basic software brand',
        'Engaged in sales and service support activities'
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: 'CBO Optimizer',
      school: 'CSO-Demo Cascade-Style Optimizer',
      period: '2023 - Present',
      description: 'Developed the CBO optimizer module from scratch, enabling plan enumeration and cost-based plan selection. Currently supports index plan selection.',
      url: 'https://github.com/nothing-new-labs/cso-demo',
      documentation: 'https://nothing-newlabs.github.io/'
    }
  ],
  projects: [
    {
      id: 1,
      name: 'Doris Outline (SQL Plan Manager)',
      period: '2023 - Present',
      description: 'Implemented the Doris Outline module from scratch to fix execution plans and avoid performance fluctuations.',
      technologies: ['C++', 'Apache Doris', 'SQL Optimization']
    },
    {
      id: 2,
      name: 'CSO-Demo Cascade-Style Optimizer',
      period: '2023 - Present',
      description: 'Developed the CBO optimizer module from scratch, enabling plan enumeration and cost-based plan selection. Currently supports index plan selection.',
      technologies: ['C++', 'CBO Optimizer', 'Plan Enumeration'],
      url: 'https://github.com/nothing-new-labs/cso-demo'
    },
    {
      id: 3,
      name: 'Doris Database Optimizer Hints Module',
      period: '2023 - Present',
      description: 'Designed and implemented hint functionality for the Doris CBO optimizer, enabling user-defined join plan selection for performance tuning.',
      technologies: ['C++', 'Apache Doris', 'Hints', 'Query Optimization'],
      url: 'https://doris.apache.org/docs/query-acceleration/hints/hints-overview'
    },
    {
      id: 4,
      name: 'Doris Database Optimizer MiniDump Module',
      period: '2023 - Present',
      description: 'Built a one-click environment information collection tool to streamline customer issue analysis. Just like minidump in gporca.',
      technologies: ['C++', 'Apache Doris', 'MiniDump', 'Issue Diagnosis']
    }
  ],
  awards: [
    {
      id: 1,
      name: 'CET-6',
      issuer: 'College English Test',
      date: '492'
    },
    {
      id: 2,
      name: 'TOEFL',
      issuer: 'Test of English as a Foreign Language',
      date: '86'
    }
  ],
  footer: {
    copyright: 'All rights reserved.'
  },
  // Detailed content for modal display
  modalDetails: {
    // Career experience detailed content
    career: {
      1: {
        title: 'Shenzhen Institute of Computing Science - Database Optimizer Developer',
        description: 'The institute is committed to advancing fundamental research in China, developing core computing systems, and taking global lead in research areas in connection with big data analytics..',
        responsibilities: [
          'I work with the Database Optimizer Team and responsible for YashanDB database optimizer module development. ',
          'Implemented distributed optimizer functionality',
          'Developed integration modules with PostgreSQL',
          'Participated in database architecture evolution design',
          'Optimized compatibility between row-based and columnar execution engines',
          'Provided technical support and problem resolution'
        ],
        technologies: ['C++', 'YashanDB', 'PostgreSQL', 'Distributed Systems', 'Database Optimization'],
        achievements: [
          'Successfully implemented distributed optimizer functionality',
          'Completed deep integration with PostgreSQL',
          'Improved overall database system performance',
          'Accumulated extensive distributed database development experience'
        ],
        duration: 'November 2020 - February 2023'
      },
      2: {
        title: 'Beijing Feilun Technology Co., Ltd. - Database Optimizer Developer',
        description: 'Responsible for Apache Doris database optimizer module development, including Outline, Hints, MiniDump and other core functionalities. As a core developer, deeply involved in the design and implementation of database optimizers.',
        responsibilities: [
          'Responsible for architecture design and development of Apache Doris database optimizer modules',
          'Implemented Outline (SQL Plan Manager) module from scratch',
          'Developed database optimizer Hints functionality module',
          'Implemented MiniDump (Plan Replayer) module',
          'Collaborated with team to complete multiple important functional modules',
          'Participated in code reviews and technical solution discussions'
        ],
        technologies: ['C++', 'Apache Doris', 'SQL Optimization', 'Query Optimizer', 'Database Kernel'],
        achievements: [
          'Successfully delivered multiple core optimizer modules',
          'Significantly improved database query performance',
          'Provided stable performance guarantees for production environments',
          'Received high recognition from team and customers'
        ],
        duration: 'March 2023 - April 2025'
      },
      3: {
        title: 'Shenzhen Yashan Technology Co., Ltd. - Full Stack Developer',
        description: 'Shenzhen Yashan Technology Co., Ltd. (Yashan Technology) is a commercial company incubated by Shenzhen Institute of Computing Science and directly established by the YashanDB team. The company adheres to a fully self-developed engineering practice model, dedicated to innovation, development, sales and services of YashanDB, building China\'s original basic software brand.',
        responsibilities: [
          'Responsible for full-stack development of YashanDB related products',
          'Participated in product innovation and development',
          'Collaborated with the YashanDB team on technical solutions',
          'Contributed to building China\'s original basic software brand',
          'Engaged in sales and service support activities'
        ],
        technologies: ['Full Stack Development', 'YashanDB', 'Database Technology', 'Product Development', 'Sales & Service'],
        achievements: [
          'Contributed to YashanDB product development and innovation',
          'Participated in building China\'s original basic software brand',
          'Collaborated effectively with the YashanDB team',
          'Engaged in comprehensive product lifecycle activities'
        ],
        duration: 'May 2025 - Present'
      }
    },
    // Internal projects detailed content
    skills: {
      'YashanKnows Knowledge Base System': {
        title: 'YashanKnows Knowledge Base System',
        description: 'A full-stack knowledge base system implemented using RAG technology, leveraging YashanDB database system\'s vector and document storage capabilities to achieve unified storage of documents and vectors. Mainly developed the chunking module and task manager, supporting streaming chunking and structured Markdown document processing.',
        details: [
          'Developed chunking module based on open source project goldmark',
          'Transformed reader into stream reader to support streaming chunking',
          'Implemented structured Markdown document chunking processing',
          'Developed task manager including website and server-side components',
          'Built frontend interface using Node.js and Vue.js',
          'Developed server-side API using Golang',
          'Fully utilized YashanDB\'s vector and document storage capabilities'
        ],
        experience: '2024 - Present',
        url: 'https://www.yashandb.com/'
      },
      'Doris Outline (SQL Plan Manager)': {
        title: 'Doris Outline (SQL Plan Manager)',
        description: 'Implemented the Doris Outline module from scratch to fix execution plans and avoid performance fluctuations.',
        details: [
          'Designed and implemented SQL Plan Manager module from scratch',
          'Implemented execution plan fixation and caching mechanisms',
          'Avoided query performance fluctuations and improved system stability',
          'Supported execution plan management for complex queries'
        ],
        experience: '2023 - Present',
        url: 'https://doris.apache.org/docs/query-acceleration/hints/hints-overview'
      },
      'Doris Database Optimizer Hints Module': {
        title: 'Doris Database Optimizer Hints Module',
        description: 'Designed and implemented hint functionality for the Doris CBO optimizer, enabling user-defined join plan selection for performance tuning.',
        details: [
          'Designed and implemented CBO optimizer hint functionality',
          'Enabled user-defined join plan selection',
          'Provided flexible performance tuning options',
          'Deeply integrated with existing optimizer architecture'
        ],
        experience: '2023 - Present',
        url: 'https://doris.apache.org/docs/query-acceleration/hints/hints-overview'
      },
      'Doris Database Optimizer MiniDump Module': {
        title: 'Doris Database Optimizer MiniDump Module',
        description: 'Built a one-click environment information collection tool to streamline customer issue analysis. Just like minidump in gporca.',
        details: [
          'Implemented one-click environment information collection tool',
          'Simplified customer issue analysis and diagnosis process',
          'Provided complete execution plan replay functionality',
          'Similar to minidump functionality in gporca'
        ],
        experience: '2023 - Present'
      },
      'Yashan Database Optimizer Distributed Module': {
        title: 'Yashan Database Optimizer Distributed Module',
        description: 'Delivered two implementations of distributed optimization capabilities to align with architectural evolution.',
        details: [
          'Implemented core distributed optimizer functionality',
          'Supported two implementation approaches for architectural evolution',
          'Provided distributed query optimization capabilities',
          'Ensured system architecture flexibility and scalability'
        ],
        experience: '2020 - 2023'
      },
      'Yashan Database Optimizer Integration Module': {
        title: 'Yashan Database Optimizer Integration Module',
        description: 'Enabled compatibility between row-based and columnar execution engines.',
        details: [
          'Implemented deep integration with PostgreSQL',
          'Supported compatibility between row and column execution engines',
          'Ensured coordination between different execution engines',
          'Provided unified query processing interface'
        ],
        experience: '2020 - 2023'
      }
    },
    // Open source projects detailed content
    education: {
      'CSO-Demo Cascade-Style Optimizer': {
        title: 'CSO-Demo Cascade-Style Optimizer',
        description: 'Developed the CBO optimizer module from scratch, enabling plan enumeration and cost-based plan selection. Currently supports index plan selection.',
        details: [
          'Project Type: Open Source Project',
          'Development Language: C++',
          'Project Period: 2023 - Present',
          'Core Features: CBO Optimizer, Plan Enumeration, Cost Calculation',
          'Current Status: Supports index plan selection'
        ],
        achievements: [
          'Designed and implemented CBO optimizer from scratch',
          'Implemented complete plan enumeration functionality',
          'Supported cost-based plan selection',
          'Open source project contributing to the community'
        ],
        url: 'https://github.com/nothing-new-labs/cso-demo',
        documentation: 'https://nothing-newlabs.github.io/'
      }
    }
  }
}
