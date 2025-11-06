interface ProjectSEOProps {
  project: {
    titleKey: string
    technologies: string[]
    github?: string
    link?: string
  }
  locale: string
}

export default function ProjectSEO({ project, locale }: ProjectSEOProps) {
  const isEnglish = locale === 'en'
  
  // Gerar meta keywords baseado no projeto
  const projectKeywords = [
    ...project.technologies,
    isEnglish ? 'portfolio project' : 'projeto portfolio',
    isEnglish ? 'Rian Moraes project' : 'projeto Rian Moraes',
    isEnglish ? 'full stack development' : 'desenvolvimento full stack',
    isEnglish ? 'modern web application' : 'aplicação web moderna',
  ]

  // Adicionar keywords específicas baseado nas tecnologias
  if (project.technologies.includes('Industry 4.0') || project.technologies.includes('IIoT')) {
    projectKeywords.push(
      isEnglish ? 'industrial IoT' : 'IoT industrial',
      isEnglish ? 'digital factory' : 'fábrica digital',
      isEnglish ? 'predictive maintenance' : 'manutenção preditiva',
      'MQTT', 'TimescaleDB', 'sensor data'
    )
  }

  if (project.technologies.includes('React Native')) {
    projectKeywords.push(
      isEnglish ? 'mobile app development' : 'desenvolvimento app mobile',
      isEnglish ? 'cross platform app' : 'app multiplataforma',
      isEnglish ? 'gamification' : 'gamificação',
      'iOS', 'Android'
    )
  }

  if (project.technologies.includes('GSAP')) {
    projectKeywords.push(
      isEnglish ? 'web animations' : 'animações web',
      isEnglish ? 'landing page optimization' : 'otimização landing page',
      isEnglish ? 'conversion optimization' : 'otimização de conversão',
      'UX/UI'
    )
  }

  if (project.technologies.includes('Go')) {
    projectKeywords.push(
      'CLI tool', 'command line interface',
      isEnglish ? 'development tools' : 'ferramentas de desenvolvimento',
      'API generator', 'YAML parser', 'code generation'
    )
  }

  return (
    <>
      {/* Meta tags invisíveis para SEO */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <span itemProp="keywords">{projectKeywords.join(', ')}</span>
        <span itemProp="programmingLanguage">{project.technologies.join(', ')}</span>
        {project.github && (
          <a href={project.github} rel="noopener noreferrer" itemProp="codeRepository">
            GitHub Repository
          </a>
        )}
        {project.link && (
          <a href={project.link} rel="noopener noreferrer" itemProp="url">
            Project Link
          </a>
        )}
      </div>

      {/* Microdata estruturada */}
      <div itemScope itemType="https://schema.org/SoftwareApplication" style={{ display: 'none' }}>
        <span itemProp="applicationCategory">WebApplication</span>
        <span itemProp="operatingSystem">Web Browser</span>
        <div itemProp="author" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">Rian Moraes</span>
        </div>
        {project.technologies.map((tech, index) => (
          <span key={index} itemProp="programmingLanguage">{tech}</span>
        ))}
      </div>
    </>
  )
}