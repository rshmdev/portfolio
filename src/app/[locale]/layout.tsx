import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FloatHeader from "@/components/float-header";
import { NextIntlClientProvider } from "next-intl";
import {
  generatePersonSchema,
  generateWebsiteSchema,
  generateSoftwareApplicationSchema,
  generateOrganizationSchema
} from "@/lib/structured-data";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Rian Moraes - Desenvolvedor Full Stack | React, Next.js, Node.js, TypeScript",
    template: "%s | Rian Moraes - Desenvolvedor Full Stack",
  },
  description:
    "Rian Moraes — Desenvolvedor Full Stack e Líder Técnico. Especialista em React, Next.js, Node.js, TypeScript, .NET, Go e Azure. Líder técnico do Intellifix (Indústria 4.0) na SMI. Criador do Gapizer (CLI em Go), Digital Factory IIoT, apps educacionais gamificados e landing pages de alta performance. Portfólio com projetos reais em IoT industrial, ferramentas de desenvolvimento, educação e web.",
  keywords: [
    // Nome e marca pessoal
    "Rian Moraes",
    "rshmdev",
    "Rian Moraes desenvolvedor",
    "Rian Moraes portfolio",
    "Rian Moraes full stack",
    // Especialidades principais
    "desenvolvedor full stack",
    "desenvolvedor full stack sênior",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "desenvolvedor Node.js",
    "desenvolvedor TypeScript",
    // Tecnologias frontend
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "JavaScript developer",
    "frontend developer",
    "React specialist",
    // Tecnologias backend
    "Node.js developer",
    "NestJS developer",
    ".NET developer",
    "C# developer",
    "backend developer",
    "API developer",
    "REST API",
    "GraphQL",
    // Banco de dados
    "MySQL developer",
    "PostgreSQL developer",
    "NoSQL developer",
    "MongoDB developer",
    "database developer",
    "SQL developer",
    "TimescaleDB",
    // Cloud e DevOps
    "Azure developer",
    "cloud developer",
    "DevOps developer",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "deployment specialist",
    // Linguagens
    "Python developer",
    "JavaScript",
    "TypeScript",
    "C#",
    "SQL",
    "Go developer",
    "Golang",
    // Projetos específicos - Industrial/IoT
    "Industry 4.0 developer",
    "IIoT developer",
    "Industrial IoT",
    "Digital Factory",
    "MQTT developer",
    "sensor data processing",
    "predictive maintenance",
    "industrial automation",
    "factory simulation",
    "OEE monitoring",
    // Projetos específicos - Ferramentas
    "CLI tool developer",
    "Gapizer",
    "API generator",
    "code generation",
    "YAML parser",
    "Swagger documentation",
    "development tools",
    // Projetos específicos - Educação
    "gamification developer",
    "educational apps",
    "React Native developer",
    "mobile app development",
    "school management system",
    "learning platform",
    // Projetos específicos - Cultural/Social
    "cultural platform",
    "artist management",
    "event management",
    "social impact projects",
    "community platform",
    // Projetos específicos - E-commerce/Landing
    "landing page developer",
    "GSAP animations",
    "animation developer",
    "conversion optimization",
    "SEO specialist",
    "e-commerce solutions",
    "business websites",
    "PDR descartaveis",
    // Localização e mercado
    "desenvolvedor Brasil",
    "desenvolvedor São Paulo",
    "freelancer Brasil",
    "consultor tecnologia",
    "tech lead",
    "technical leadership",
    "SMI Intellifix",
    "Faciltel",
    "Direção Concursos",
    // Serviços
    "desenvolvimento web",
    "criação de sites",
    "sistemas web",
    "aplicações web",
    "e-commerce",
    "landing pages",
    "portfolio profissional",
    "sistema enterprise",
    "microservices",
    "real-time applications",
    // Tecnologias avançadas
    "microservices architecture",
    "distributed systems",
    "real-time data processing",
    "websocket implementation",
    "container orchestration",
    "scalable applications",
    // Experiência
    "5 anos experiência",
    "desenvolvedor experiente",
    "líder técnico",
    "arquitetura software",
    "clean code",
    "boas práticas",
    "code quality",
    "performance optimization",
    "team leadership",
    // Setores de atuação
    "industrial software",
    "educational technology",
    "cultural technology",
    "business automation",
    "digital transformation",
    "startup development",
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
  metadataBase: new URL("https://rshmdev.com"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title:
      "Rian Moraes - Desenvolvedor Full Stack e Líder Técnico | React, Next.js, Node.js, TypeScript",
    description:
      "Desenvolvedor Full Stack e Líder Técnico. Especialista em React, Next.js, Node.js, TypeScript, .NET e Azure. Projetos reais em Indústria 4.0, IIoT, ferramentas dev e web.",
    url: "https://rianmoraes.dev",
    siteName: "Rian Moraes - Portfolio Desenvolvedor Full Stack",
    images: [
      {
        url: '/api/og?title=Rian%20Moraes%20-%20Desenvolvedor%20Full%20Stack&description=Especialista%20em%20React,%20Next.js,%20Industry%204.0%20e%20IIoT',
        width: 1200,
        height: 630,
        alt: 'Rian Moraes - Desenvolvedor Full Stack Portfolio',
      },
    ],
    locale: "pt_BR",
    type: "profile",
  },
  twitter: {
    card: "summary",
    site: "@rshmdev",
    creator: "@rshmdev",
    title:
      "Rian Moraes - Desenvolvedor Full Stack e Líder Técnico | React, Next.js, Node.js",
    description:
      "Desenvolvedor Full Stack e Líder Técnico. React, Next.js, Node.js, TypeScript, .NET, Azure. Portfólio com projetos reais em Indústria 4.0 e ferramentas dev.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application-name": "Rian Moraes Portfolio",
    "apple-mobile-web-app-title": "Rian Moraes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#f1ede2",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#f1ede2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/web-app-manifest-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Rian Moraes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#f1ede2" />
        <meta
          name="msapplication-TileImage"
          content="/web-app-manifest-192x192.png"
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://rshmdev.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo, Brasil" />
        <meta name="ICBM" content="-23.5505,-46.6333" />
        <meta
          name="DC.title"
          content="Rian Moraes - Desenvolvedor Full Stack"
        />
        <meta name="DC.creator" content="Rian Moraes" />
        <meta
          name="DC.subject"
          content="Desenvolvimento Web, Full Stack, React, Next.js"
        />
        <meta
          name="DC.description"
          content="Portfolio profissional de Rian Moraes, desenvolvedor full stack"
        />
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
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#f1ede2" />
        <meta name="msapplication-navbutton-color" content="#f1ede2" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
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
            __html: JSON.stringify([
              generatePersonSchema('pt'),
              generateWebsiteSchema('pt'),
              generateOrganizationSchema('pt'),
              ...generateSoftwareApplicationSchema()
            ]),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider>
          <FloatHeader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
