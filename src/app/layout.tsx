import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";
import FloatHeader from "@/components/float-header";
import "react-vertical-timeline-component/style.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: "Rian Moraes - Desenvolvedor Full Stack | React, Next.js, Node.js, TypeScript",
    template: "%s | Rian Moraes - Desenvolvedor Full Stack"
  },
  description: "🚀 Rian Moraes - Desenvolvedor Full Stack Sênior especializado em React, Next.js, Node.js, TypeScript, .NET, MySQL, PostgreSQL, Azure. +5 anos criando soluções web inovadoras, sistemas enterprise e experiências digitais excepcionais. Portfolio profissional com projetos reais.",
  keywords: [
    // Nome e marca pessoal
    "Rian Moraes", "rshmdev", "Rian Moraes desenvolvedor", "Rian Moraes portfolio", "Rian Moraes full stack",
    // Especialidades principais
    "desenvolvedor full stack", "desenvolvedor full stack sênior", "desenvolvedor React", "desenvolvedor Next.js", "desenvolvedor Node.js", "desenvolvedor TypeScript",
    // Tecnologias frontend
    "React developer", "Next.js developer", "TypeScript developer", "JavaScript developer", "frontend developer", "React specialist",
    // Tecnologias backend
    "Node.js developer", "NestJS developer", ".NET developer", "C# developer", "backend developer", "API developer", "REST API", "GraphQL",
    // Banco de dados
    "MySQL developer", "PostgreSQL developer", "NoSQL developer", "MongoDB developer", "database developer", "SQL developer",
    // Cloud e DevOps
    "Azure developer", "cloud developer", "DevOps developer", "CI/CD", "Docker", "Kubernetes", "deployment specialist",
    // Linguagens
    "Python developer", "JavaScript", "TypeScript", "C#", "SQL",
    // Localização e mercado
    "desenvolvedor Brasil", "desenvolvedor São Paulo", "freelancer Brasil", "consultor tecnologia", "tech lead",
    // Serviços
    "desenvolvimento web", "criação de sites", "sistemas web", "aplicações web", "e-commerce", "landing pages", "portfolio profissional",
    // Experiência
    "5 anos experiência", "desenvolvedor experiente", "líder técnico", "arquitetura software", "clean code", "boas práticas"
  ].join(", "),
  authors: [{ name: "Rian Moraes", url: "https://github.com/rshmdev" }],
  creator: "Rian Moraes",
  publisher: "Rian Moraes",
  category: "Technology",
  classification: "Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rianmoraes.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Rian Moraes - Desenvolvedor Full Stack Sênior | React, Next.js, Node.js, TypeScript",
    description: "🚀 Desenvolvedor Full Stack com +5 anos de experiência. Especialista em React, Next.js, Node.js, TypeScript, .NET, Azure. Criando soluções web inovadoras e sistemas enterprise. Veja meu portfolio com projetos reais!",
    url: 'https://rianmoraes.dev',
    siteName: 'Rian Moraes - Portfolio Desenvolvedor Full Stack',
    locale: 'pt_BR',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    site: '@rshmdev',
    creator: '@rshmdev',
    title: "Rian Moraes - Desenvolvedor Full Stack Sênior | React, Next.js, Node.js",
    description: "🚀 +5 anos criando soluções web inovadoras. Especialista em React, Next.js, Node.js, TypeScript, .NET, Azure. Portfolio com projetos reais!",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  other: {
    'application-name': 'Rian Moraes Portfolio',
    'apple-mobile-web-app-title': 'Rian Moraes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/web-app-manifest-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Rian Moraes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-TileImage" content="/web-app-manifest-192x192.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://rianmoraes.dev" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo, Brasil" />
        <meta name="ICBM" content="-23.5505,-46.6333" />
        <meta name="DC.title" content="Rian Moraes - Desenvolvedor Full Stack" />
        <meta name="DC.creator" content="Rian Moraes" />
        <meta name="DC.subject" content="Desenvolvimento Web, Full Stack, React, Next.js" />
        <meta name="DC.description" content="Portfolio profissional de Rian Moraes, desenvolvedor full stack" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="language" content="pt-BR" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="dark light" />
        <meta name="supported-color-schemes" content="dark light" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="msapplication-navbutton-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="google-site-verification" content="" />
        <meta name="bing-site-verification" content="" />
        <meta name="yandex-verification" content="" />
        <meta name="pinterest-site-verification" content="" />
        <meta name="facebook-domain-verification" content="" />
        <meta name="norton-safeweb-site-verification" content="" />
        <meta name="p:domain_verify" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rian Moraes",
              "alternateName": "rshmdev",
              "jobTitle": "Desenvolvedor Full Stack Sênior",
              "description": "Desenvolvedor Full Stack Sênior com mais de 5 anos de experiência especializado em React, Next.js, Node.js, TypeScript, .NET, MySQL, PostgreSQL e Azure. Líder técnico com expertise em arquitetura de software e desenvolvimento de sistemas enterprise.",
              "url": "https://rianmoraes.dev",
              "image": "https://rianmoraes.dev/profile-image.jpg",
              "email": "contato@rianmoraes.dev",
              "telephone": "+55-11-99999-9999",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://github.com/rshmdev",
                "https://linkedin.com/in/rshmdev",
                "https://twitter.com/rshmdev"
              ],
              "knowsAbout": [
                "React", "Next.js", "Node.js", "TypeScript", "JavaScript", "C#", ".NET", "Python",
                "MySQL", "PostgreSQL", "NoSQL", "MongoDB", "Azure", "Docker", "Kubernetes",
                "CI/CD", "DevOps", "REST API", "GraphQL", "Microservices", "Clean Architecture",
                "SOLID Principles", "Design Patterns", "Agile", "Scrum", "Git", "GitHub",
                "Full Stack Development", "Frontend Development", "Backend Development",
                "Web Development", "Software Architecture", "Database Design", "Cloud Computing"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Desenvolvedor Full Stack",
                "occupationLocation": {
                  "@type": "City",
                  "name": "São Paulo, Brasil"
                },
                "skills": "React, Next.js, Node.js, TypeScript, .NET, Azure, MySQL, PostgreSQL"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Universidade/Curso de Tecnologia"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "SMI",
                "description": "Líder Técnico do Intellifix"
              },
              "award": [
                "Líder Técnico SMI",
                "Desenvolvedor Full Stack Sênior",
                "Especialista em React e Next.js"
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "Comunidade de Desenvolvedores Brasil"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Rian Moraes - Portfolio Desenvolvedor Full Stack",
              "alternateName": "rshmdev Portfolio",
              "url": "https://rianmoraes.dev",
              "description": "Portfolio profissional de Rian Moraes, desenvolvedor full stack sênior especializado em React, Next.js, Node.js, TypeScript e tecnologias modernas.",
              "author": {
                "@type": "Person",
                "name": "Rian Moraes"
              },
              "inLanguage": "pt-BR",
              "copyrightYear": "2024",
              "copyrightHolder": {
                "@type": "Person",
                "name": "Rian Moraes"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://rianmoraes.dev/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Rian Moraes - Desenvolvimento Full Stack",
              "description": "Serviços profissionais de desenvolvimento web full stack, criação de aplicações React, Next.js, sistemas Node.js e soluções em nuvem Azure.",
              "provider": {
                "@type": "Person",
                "name": "Rian Moraes"
              },
              "areaServed": "Brasil",
              "availableLanguage": ["pt-BR", "en-US"],
              "serviceType": [
                "Desenvolvimento Web",
                "Desenvolvimento Full Stack",
                "Consultoria em React",
                "Desenvolvimento Next.js",
                "Arquitetura de Software",
                "Desenvolvimento de APIs",
                "Integração de Sistemas",
                "Otimização de Performance"
              ],
              "offers": {
                "@type": "Offer",
                "description": "Desenvolvimento de aplicações web modernas e escaláveis",
                "areaServed": "Brasil"
              }
            })
          }}
        />
      </head>
      <body className={poppins.className}>
        <FloatHeader/>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
