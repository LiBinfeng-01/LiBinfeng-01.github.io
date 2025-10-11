export default {
  personalInfo: {
    name: 'John Smith',
    title: 'Frontend Developer',
    summary: 'Experienced frontend developer with 5+ years of expertise in Vue.js, React, Node.js and other modern technologies. Passionate about creating exceptional user experiences and continuously learning new technologies.',
    contact: [
      { type: 'email', icon: '📧', value: 'john.smith@example.com' },
      { type: 'phone', icon: '📱', value: '+1 (555) 123-4567' },
      { type: 'location', icon: '📍', value: 'San Francisco, CA' },
      { type: 'github', icon: '🐙', value: 'github.com/johnsmith' }
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
      category: 'Frontend Technologies',
      items: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'Webpack', 'Vite']
    },
    {
      category: 'Backend Technologies',
      items: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis', 'RESTful API']
    },
    {
      category: 'Tools & Frameworks',
      items: ['Git', 'Docker', 'Linux', 'AWS', 'Nginx', 'Jest', 'Cypress']
    }
  ],
  experience: [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Mar 2021 - Present',
      description: 'Leading frontend development for core company products and managing a team of developers.',
      responsibilities: [
        'Architect and develop frontend solutions for main company products',
        'Lead a team of 3 frontend developers and mentor junior developers',
        'Optimize frontend performance and enhance user experience',
        'Participate in product requirement analysis and technical solution planning'
      ]
    },
    {
      id: 2,
      position: 'Frontend Developer',
      company: 'Digital Innovation Co.',
      duration: 'Jun 2019 - Feb 2021',
      description: 'Developed frontend solutions for various B2B and B2C projects, gaining extensive project experience.',
      responsibilities: [
        'Develop enterprise-level management system frontend interfaces',
        'Collaborate with backend teams for API integration',
        'Participate in mobile H5 page development',
        'Maintain and optimize existing project code'
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      school: 'University of California, Berkeley',
      period: 'Sep 2015 - Jun 2019',
      description: 'Core courses: Data Structures, Algorithm Design, Software Engineering, Database Systems, Computer Networks'
    }
  ],
  projects: [
    {
      id: 1,
      name: 'Enterprise Management System',
      period: 'Jan 2022 - Aug 2022',
      description: 'Enterprise-level management system built with Vue3 + TypeScript, featuring multi-tenancy, permission management, and data visualization.',
      technologies: ['Vue3', 'TypeScript', 'Element Plus', 'Echarts', 'WebSocket']
    },
    {
      id: 2,
      name: 'Mobile E-commerce Platform',
      period: 'May 2021 - Dec 2021',
      description: 'Mobile e-commerce platform developed with Vue.js, supporting product display, shopping cart, and order management.',
      technologies: ['Vue.js', 'Vant', 'Axios', 'Sass', 'PWA']
    }
  ],
  awards: [
    {
      id: 1,
      name: 'Employee of the Year',
      issuer: 'Tech Solutions Inc.',
      date: 'Dec 2023'
    },
    {
      id: 2,
      name: 'Best Technical Speaker',
      issuer: 'Developer Community',
      date: 'Aug 2023'
    }
  ],
  footer: {
    copyright: 'All rights reserved.'
  }
}
