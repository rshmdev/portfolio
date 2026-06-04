export const seoConfig = {
  // URLs base
  baseUrl: 'https://rianmoraes.dev',
  
  // Informações do desenvolvedor
  developer: {
    name: 'Rian Moraes',
    email: 'rianherminio2002@gmail.com',
    github: 'https://github.com/rshmdev',
    linkedin: 'https://linkedin.com/in/rianmoraes',
    twitter: 'https://twitter.com/rshmdev',
  },

  // Meta tags por idioma
  meta: {
    pt: {
      title: 'Rian Moraes - Desenvolvedor Full Stack | React, Next.js, Node.js, TypeScript',
      description: 'Rian Moraes - Desenvolvedor Full Stack e Líder Técnico. Especialista em React, Next.js, Node.js, TypeScript, .NET, Go e Azure. Líder técnico do Intellifix (Indústria 4.0) na SMI. Criador do Gapizer (CLI em Go), Digital Factory IIoT, apps educacionais gamificados e landing pages de alta performance. Portfólio com projetos reais em IoT industrial, ferramentas de desenvolvimento, educação e web.',
      keywords: [
        // Core competências
        'Rian Moraes', 'rshmdev', 'desenvolvedor full stack', 'React developer', 'Next.js specialist',
        'Node.js developer', 'TypeScript expert', '.NET developer', 'Go developer',
        
        // Projetos específicos
        'Intellifix', 'Digital Factory', 'Gapizer', 'Industry 4.0', 'IIoT', 'IoT industrial',
        'PDR descartaveis', 'Cultura Connect', 'Razão Quest', 'gamificação educacional',
        
        // Tecnologias
        'React.js', 'Next.js 14', 'TypeScript', 'Node.js', 'PostgreSQL', 'MQTT',
        'TimescaleDB', 'Docker', 'Azure', 'GSAP', 'TailwindCSS', 'Prisma',
        
        // Localização e mercado
        'desenvolvedor São Paulo', 'freelancer Brasil', 'tech lead', 'líder técnico',
        'SMI', 'Faciltel', 'Direção Concursos',
        
        // Serviços
        'desenvolvimento web', 'aplicações enterprise', 'sistemas industriais',
        'landing pages', 'APIs REST', 'microservices', 'arquitetura software',
        
        // Setores
        'industrial software', 'educational technology', 'cultural platform',
        'e-commerce solutions', 'business automation', 'digital transformation'
      ]
    },
    en: {
      title: 'Rian Moraes - Full Stack Developer | React, Next.js, Node.js, TypeScript',
      description: 'Rian Moraes - Full Stack Developer and Tech Lead. Expert in React, Next.js, Node.js, TypeScript, .NET, Go and Azure. Technical lead of Intellifix (Industry 4.0) at SMI. Creator of Gapizer (Go CLI), Digital Factory IIoT, gamified educational apps and high-performance landing pages. Portfolio with real projects in industrial IoT, development tools, education and web.',
      keywords: [
        // Core competencies 
        'Rian Moraes', 'rshmdev', 'full stack developer', 'React developer', 'Next.js specialist',
        'Node.js developer', 'TypeScript expert', '.NET developer', 'Go developer',
        
        // Specific projects
        'Intellifix', 'Digital Factory', 'Gapizer', 'Industry 4.0', 'IIoT', 'industrial IoT',
        'PDR disposables', 'Cultura Connect', 'Razão Quest', 'educational gamification',
        
        // Technologies
        'React.js', 'Next.js 14', 'TypeScript', 'Node.js', 'PostgreSQL', 'MQTT', 
        'TimescaleDB', 'Docker', 'Azure', 'GSAP', 'TailwindCSS', 'Prisma',
        
        // Location and market
        'developer Brazil', 'freelancer Brazil', 'tech lead', 'technical leader',
        'SMI', 'Faciltel', 'Direção Concursos',
        
        // Services
        'web development', 'enterprise applications', 'industrial systems',
        'landing pages', 'REST APIs', 'microservices', 'software architecture',
        
        // Sectors
        'industrial software', 'educational technology', 'cultural platform',
        'e-commerce solutions', 'business automation', 'digital transformation'
      ]
    }
  },

  // Configurações de robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph por projeto
  projectOG: {
    intellifix: {
      title: 'Intellifix - Industry 4.0 Platform by Rian Moraes',
      description: 'Innovative industrial platform with AI, IoT and predictive analysis'
    },
    gapizer: {
      title: 'Gapizer - Go API Generator CLI by Rian Moraes', 
      description: 'CLI tool to generate complete Go APIs from YAML files'
    },
    digitalfactory: {
      title: 'Digital Factory - Complete IIoT System by Rian Moraes',
      description: 'Digital factory system with 7 production line simulators and real-time monitoring'
    },
    pdrlelo: {
      title: 'PDR & Lelo - Landing Page with GSAP by Rian Moraes',
      description: 'Modern landing page with fluid animations and SEO optimization'
    },
    culturaconnect: {
      title: 'Cultura Connect - Cultural Platform by Rian Moraes',
      description: 'Platform connecting artists and cultural producers in Brazil'
    },
    razaoquest: {
      title: 'Razão Quest - Gamified Education App by Rian Moraes',
      description: 'Mobile application with gamification for public exam studies'
    }
  }
}

export const generateProjectKeywords = (projectKey: string, locale: string = 'pt') => {
  const isEnglish = locale === 'en'
  const baseKeywords = ['Rian Moraes', 'rshmdev', 'portfolio project']
  
  const projectSpecificKeywords: Record<string, string[]> = {
    intellifix: [
      'Industry 4.0', 'IIoT', 'industrial IoT', 'predictive maintenance',
      'digital factory', 'SMI', 'technical leader', 'AI', 'machine learning'
    ],
    gapizer: [
      'Go', 'CLI tool', 'API generator', 'YAML', 'development tools', 
      'code generation', 'NPM', 'open source'
    ],
    digitalfactory: [
      '.NET 9', 'MQTT', 'TimescaleDB', 'Docker', 'microservices',
      'real-time monitoring', 'production simulation', 'sensor data'
    ],
    pdrlelo: [
      'GSAP', 'landing page', 'SEO optimization', 'conversion optimization',
      'animations', 'business website', 'Rio de Janeiro'
    ],
    culturaconnect: [
      'React', 'Node.js', 'Prisma', 'cultural management', 'artist platform',
      'event management', 'social impact', 'Brazilian culture'
    ],
    razaoquest: [
      'React Native', 'gamification', 'educational app', 'mobile development',
      'QR Code', 'ranking system', 'study platform'
    ]
  }

  return [
    ...baseKeywords,
    ...(projectSpecificKeywords[projectKey] || []),
    isEnglish ? 'full stack development' : 'desenvolvimento full stack'
  ]
}