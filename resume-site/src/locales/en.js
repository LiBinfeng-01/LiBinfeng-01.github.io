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
  skills: [
    {
      category: 'Programming Languages',
      items: ['C/C++', 'Java', 'Rust', 'Python', 'SQL', 'Shell Scripting']
    },
    {
      category: 'Database Technologies',
      items: ['Apache Doris', 'YashanDB', 'PostgreSQL', 'SQL Optimization', 'Query Optimizer', 'Distributed Databases', 'Database Kernel Development']
    },
    {
      category: 'Development Environment',
      items: ['Linux', 'Git', 'Docker', 'Database Tuning', 'Performance Analysis', 'Debugging Tools', 'Version Control', 'CI/CD']
    }
  ],
  experience: [
    {
      id: 1,
      position: 'Database Optimizer Developer',
      company: 'Shenzhen Institute of Computing Science',
      duration: 'November 2020 - February 2023',
      description: 'Responsible for YashanDB database optimizer module development, including distributed optimizers and integration with PostgreSQL. Participated in database architecture evolution and optimization.',
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
      duration: 'March 2023 - Present',
      description: 'Responsible for Apache Doris database optimizer module development, including Outline, Hints, MiniDump and other core functionalities. As a core developer, deeply involved in the design and implementation of database optimizers.',
      responsibilities: [
        'Responsible for architecture design and development of Apache Doris database optimizer modules',
        'Implemented Outline (SQL Plan Manager) module from scratch',
        'Developed database optimizer Hints functionality module',
        'Implemented MiniDump (Plan Replayer) module',
        'Collaborated with team to complete multiple important functional modules',
        'Participated in code reviews and technical solution discussions'
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Master\'s Degree in Physics',
      school: 'Harbin Institute of Technology',
      period: 'September 2018 - August 2020',
      description: 'Pursued Master\'s degree in Physics at Harbin Institute of Technology, developing rigorous scientific thinking and solid theoretical foundation. Main research focus on theoretical physics and computational physics, completed high-quality master\'s thesis.'
    },
    {
      id: 2,
      degree: 'Bachelor\'s Degree in Physics',
      school: 'Southern University of Science and Technology',
      period: 'September 2014 - June 2018',
      description: 'Completed Bachelor\'s degree in Physics at Southern University of Science and Technology, establishing solid foundation in physics and mathematics. Main courses included Advanced Mathematics, Linear Algebra, Probability Theory, Physics Experiments, developing strong logical thinking abilities.'
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
  }
}
