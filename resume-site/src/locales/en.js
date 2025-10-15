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
    technicalSkills: 'Technical Skills',
    education: 'Education & Certifications'
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
    // Technical skills detailed content
    skills: {
      'Programming Languages': {
        title: 'Programming Languages',
        description: 'Proficient in multiple programming languages with solid programming foundation and extensive development experience.',
        details: [
          'C/C++: Expert in system-level programming with database kernel development experience',
          'Java: Familiar with enterprise application development, mastering Spring framework',
          'Rust: Understanding of systems programming and memory-safe programming',
          'Python: Proficient in data analysis and script development'
        ],
        experience: '5+ years of database system development experience'
      },
      'Database Technologies': {
        title: 'Database Technologies',
        description: 'Specialized in database optimizer and query processing technologies with deep database theoretical foundation.',
        details: [
          'Apache Doris: Deep involvement in optimizer module development',
          'YashanDB: Responsible for distributed optimizer development',
          'PostgreSQL: Familiar with query optimization and extension development',
          'SQL Optimization: Expert in query plan optimization and performance tuning'
        ],
        experience: '3+ years of database optimizer development experience'
      },
      'Development Environment': {
        title: 'Development Environment',
        description: 'Proficient in various development tools and environments with efficient development workflow.',
        details: [
          'Linux: Expert in Linux system administration and development environment configuration',
          'Git: Proficient in version control and collaborative development',
          'Docker: Master containerized deployment and development',
          'Performance Analysis: Proficient in various performance analysis tools'
        ],
        experience: '5+ years of Linux development experience'
      }
    },
    // Education background detailed content
    education: {
      'Harbin Institute of Technology': {
        title: 'Harbin Institute of Technology - Master\'s Degree in Physics',
        description: 'Pursued Master\'s degree in Physics at Harbin Institute of Technology, developing rigorous scientific thinking and solid theoretical foundation.',
        details: [
          'Major: Physics',
          'Degree: Master\'s Degree',
          'Period: September 2018 - August 2020',
          'Research Focus: Theoretical Physics and Computational Physics',
          'Main Courses: Quantum Mechanics, Statistical Physics, Computational Physics'
        ],
        achievements: [
          'Completed high-quality master\'s thesis',
          'Participated in multiple research projects',
          'Developed rigorous research attitude'
        ]
      },
      'Southern University of Science and Technology': {
        title: 'Southern University of Science and Technology - Bachelor\'s Degree in Physics',
        description: 'Completed Bachelor\'s degree in Physics at Southern University of Science and Technology, establishing solid foundation in physics and mathematics.',
        details: [
          'Major: Physics',
          'Degree: Bachelor\'s Degree',
          'Period: September 2014 - June 2018',
          'Main Courses: Advanced Mathematics, Linear Algebra, Probability Theory, Physics Experiments',
          'GPA: Excellent'
        ],
        achievements: [
          'Gained solid foundation in mathematics and physics',
          'Developed strong logical thinking abilities',
          'Participated in multiple experimental projects'
        ]
      }
    }
  }
}
