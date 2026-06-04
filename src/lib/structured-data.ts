export const generatePersonSchema = (locale: string = 'pt') => {
  const isEnglish = locale === 'en'
  
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rian Moraes",
    "alternateName": "rshmdev",
    "description": isEnglish
      ? "Full Stack Developer and Tech Lead specialized in React, Next.js, Node.js, TypeScript, .NET, and Industry 4.0 solutions"
      : "Desenvolvedor Full Stack e Líder Técnico especializado em React, Next.js, Node.js, TypeScript, .NET e soluções de Indústria 4.0",
    "url": "https://rshmdev.com",
    "image": "https://rshmdev.com/rian-moraes.jpg",
    "sameAs": [
      "https://github.com/rshmdev",
      "https://linkedin.com/in/rianmoraes",
      "https://twitter.com/rshmdev"
    ],
    "jobTitle": isEnglish ? "Tech Lead & Full Stack Developer" : "Líder Técnico e Desenvolvedor Full Stack",
    "worksFor": {
      "@type": "Organization",
      "name": "SMI",
      "description": isEnglish ? "Technical Lead at Intellifix platform" : "Líder Técnico da plataforma Intellifix"
    },
    "knowsAbout": [
      "React.js",
      "Next.js", 
      "Node.js",
      "TypeScript",
      "JavaScript",
      ".NET",
      "C#",
      "Go",
      "Python",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Azure",
      "Docker",
      "Industry 4.0",
      "IIoT",
      "MQTT",
      "TimescaleDB",
      "Full Stack Development",
      "Software Architecture",
      "Technical Leadership"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "SP",
      "addressLocality": "São Paulo"
    }
  }
}

export const generateWebsiteSchema = (locale: string = 'pt') => {
  const isEnglish = locale === 'en'
  
  return {
    "@context": "https://schema.org",
    "@type": "Website",
    "name": isEnglish ? "Rian Moraes - Portfolio" : "Rian Moraes - Portfólio",
    "description": isEnglish
      ? "Portfolio of Rian Moraes, Full Stack Developer and Tech Lead specialized in modern web technologies and Industry 4.0 solutions"
      : "Portfólio de Rian Moraes, Desenvolvedor Full Stack e Líder Técnico especializado em tecnologias web modernas e soluções de Indústria 4.0",
    "url": "https://rshmdev.com",
    "inLanguage": [
      {
        "@type": "Language",
        "name": "Portuguese",
        "alternateName": "pt-BR"
      },
      {
        "@type": "Language", 
        "name": "English",
        "alternateName": "en-US"
      }
    ],
    "author": {
      "@type": "Person",
      "name": "Rian Moraes"
    },
    "publisher": {
      "@type": "Person",
      "name": "Rian Moraes"
    }
  }
}

export const generateSoftwareApplicationSchema = () => {
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Intellifix",
      "applicationCategory": "IndustrialSoftware",
      "description": "Innovative industrial platform that transforms maintenance through cutting-edge technology with AI, IoT and predictive analysis",
      "operatingSystem": "Web",
      "author": {
        "@type": "Person",
        "name": "Rian Moraes"
      },
      "keywords": "Industry 4.0, IIoT, Predictive Maintenance, Industrial IoT, Digital Factory"
    },
    {
      "@context": "https://schema.org", 
      "@type": "SoftwareApplication",
      "name": "Gapizer",
      "applicationCategory": "DeveloperApplication",
      "description": "CLI tool built in Go to generate complete Go APIs from YML files",
      "operatingSystem": "Cross-platform",
      "programmingLanguage": "Go",
      "codeRepository": "https://github.com/rshmdev/gapizer",
      "author": {
        "@type": "Person",
        "name": "Rian Moraes"
      },
      "keywords": "CLI, Go, API Generator, YAML, Development Tools"
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication", 
      "name": "Digital Factory",
      "applicationCategory": "IndustrialSoftware",
      "description": "Complete digital factory system with IIoT simulation, real-time monitoring and industrial data analysis",
      "operatingSystem": "Web",
      "programmingLanguage": [".NET", "TypeScript", "React"],
      "codeRepository": "https://github.com/rshmdev/digital-factory",
      "author": {
        "@type": "Person",
        "name": "Rian Moraes"
      },
      "keywords": "Digital Factory, IIoT Simulation, Industry 4.0, MQTT, TimescaleDB, Real-time Monitoring"
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Cultura Connect", 
      "applicationCategory": "SocialNetworkingApplication",
      "description": "Complete web platform to connect artists and cultural producers, promoting local culture",
      "operatingSystem": "Web",
      "programmingLanguage": ["React", "TypeScript", "Node.js"],
      "author": {
        "@type": "Person", 
        "name": "Rian Moraes"
      },
      "keywords": "Cultural Platform, Artist Management, Event Management, Social Impact"
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Razão Quest",
      "applicationCategory": "EducationalApplication", 
      "description": "Gamified mobile application for public exam studies with ranking system and achievements",
      "operatingSystem": "Android, iOS",
      "programmingLanguage": "React Native",
      "author": {
        "@type": "Person",
        "name": "Rian Moraes" 
      },
      "keywords": "Educational App, Gamification, Mobile App, Study Platform, React Native"
    }
  ]
}

export const generateOrganizationSchema = (locale: string = 'pt') => {
  const isEnglish = locale === 'en'
  
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": isEnglish ? "Rian Moraes - Full Stack Development Services" : "Rian Moraes - Serviços de Desenvolvimento Full Stack",
    "description": isEnglish 
      ? "Professional full stack development services specializing in modern web technologies, Industry 4.0 solutions, and enterprise applications"
      : "Serviços profissionais de desenvolvimento full stack especializados em tecnologias web modernas, soluções Industry 4.0 e aplicações enterprise",
    "url": "https://rshmdev.com", 
    "email": "rianherminio2002@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Rian Moraes"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "SP", 
      "addressLocality": "São Paulo"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    },
    "serviceType": [
      "Full Stack Development",
      "Web Application Development",
      "API Development", 
      "Industrial Software Development",
      "Mobile App Development",
      "Technical Leadership",
      "Software Architecture"
    ]
  }
}