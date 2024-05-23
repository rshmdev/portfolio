import recipe from "@images/recipe.png";
import dmc from "@images/dmc.png";
import dynamic from "@images/dynamic.png";
import ecommerce from "@images/Ecommerce.png";
import aluno from "@images/aluno.png";
import assinatura from "@images/assinatura.png";

const works = [
  {
    id: 1,
    title: "Controle Digital de Materiais",
    description:
      "Projeto desenvolvido para automatizar e otimizar o processo de controle de materiais, aumentando a eficiência e precisão, e reduzindo erros e tempo de processamento.",
    image: dmc,
    technologies: [
      "Next.js 13.5",
      "TailwindCSS",
      "ShadCN",
      "ASP.NET",
      "Python",
      "SQL",
    ],
    methods: [
      "Implementações client-side e server-side",
      "Uso de hooks",
      "Conexões com a API",
      "Comunicação entre frontend e backend",
      "Consultas no banco de dados",
      "Otimização do processo de controle de materiais",
    ],
    benefits: [
      "Automação do processo de controle de materiais, reduzindo a necessidade de intervenção manual",
      "Aumento da precisão e redução de erros no gerenciamento de materiais",
      "Redução do tempo de processamento e aumento da eficiência operacional",
      "Interface intuitiva e fácil de usar, melhorando a experiência do usuário",
    ],
    results: [
      "Redução de 50% no tempo necessário para realizar o controle de materiais",
      "Diminuição de 40% nos erros de processamento de materiais",
      "Aumento de 30% na eficiência operacional geral",
    ],
  },
  {
    id: 2,
    title: "Planejamento Dinâmico de Produção",
    description:
      "Ferramenta para planejamento semanal da fábrica, incluindo parametrização de SKU, CUC, rotas das máquinas, restrições e geração de planos com algoritmo Python. Oferece visualização em linha do tempo estilo Gantt, permite replanejamento e melhora a eficiência.",
    image: dynamic,
    technologies: [
      "Next.js",
      "TailwindCSS",
      "ShadCN",
      "ASP.NET Core",
      "Python",
      "SQL",
      "Redux",
      "Tanstack Query",
    ],
    methods: [
      "Implementações client-side e server-side",
      "Uso de hooks",
      "Conexões com a API",
      "Comunicação entre frontend e backend",
      "Consultas no banco de dados",
      "Geração de plano otimizado e simplificado",
      "Gerenciamento de estados com Redux",
      "Gerenciamento de requisições com Tanstack Query",
      "Componentes reutilizáveis com ShadCN",
    ],
    benefits: [
      "Automação do planejamento semanal, reduzindo a necessidade de planilhas Excel",
      "Aumento da precisão e redução de erros no planejamento",
      "Redução do tempo de produção através de algoritmos otimizados",
      "Visualização clara e intuitiva da demanda, changeovers e restrições",
      "Replanejamento eficiente da demanda",
    ],
    results: [
      "Melhoria na eficiência do planejamento semanal",
      "Redução significativa de erros e tempo de produção",
      "Interface intuitiva e fácil de usar",
    ],
  },
  {
    id: 3,
    title: "Gestão de Receitas",
    description:
      "Projeto para consolidar receitas em uma aplicação única, permitindo comunicação direta com máquinas para obter a melhor receita (golden batch). Facilita a gestão de receitas pelos operadores, utilizando Next.js 14 com internacionalização, Tailwind, ASP.NET e Python.",
    image: recipe,
    technologies: ["Next.js 14", "TailwindCSS", "ASP.NET", "Python"],
    methods: [
      "Internacionalização para Espanhol e Inglês",
      "Comunicação direta com máquinas",
      "Implementações client-side e server-side",
      "Otimização de receitas com algoritmos em Python",
    ],
    benefits: [
      "Consolidação de todas as receitas em uma única aplicação",
      "Facilitação da gestão de receitas pelos operadores",
      "Comunicação direta com máquinas para obter a melhor receita",
      "Interface intuitiva e fácil de usar",
    ],
    results: [
      "Melhoria na eficiência de gestão de receitas",
      "Redução de erros na produção",
      "Aumento da consistência e qualidade das receitas",
    ],
  },
  {
    id: 4,
    title: "E-commerce de Cursos",
    description:
      "Desenvolvimento de uma plataforma de e-commerce para venda de cursos, facilitando a compra e gestão de materiais educativos online. A plataforma inclui funcionalidades de catálogo de cursos, carrinho de compras, pagamentos, e gerenciamento de usuários.",
    image: ecommerce,
    technologies: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    methods: [
      "Desenvolvimento client-side e server-side",
      "Integração com sistemas de pagamento",
      "Autenticação e gerenciamento de usuários",
      "Otimização para SEO e performance",
    ],
    benefits: [
      "Facilita a compra e acesso a cursos online",
      "Melhora a experiência do usuário com uma interface intuitiva",
      "Automatiza processos de pagamento e emissão de certificados",
      "Permite fácil gerenciamento de cursos e usuários",
    ],
    results: [
      "Aumento de vendas de cursos",
      "Melhoria na retenção de usuários",
      "Redução de carga administrativa através de automação",
    ],
  },
  {
    id: 5,
    title: "Área do Aluno",
    description:
      "Desenvolvimento da área do aluno para a plataforma de e-commerce de cursos, permitindo que os alunos assistam aulas e utilizem um sistema de questões extenso. A plataforma oferece uma experiência de aprendizado interativa e eficiente.",
    image: aluno,
    technologies: [
      "React.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    methods: [
      "Integração com sistemas de vídeo para aulas",
      "Implementação de um sistema de questões",
      "Autenticação e gerenciamento de usuários",
    ],
    benefits: [
      "Facilita o acesso dos alunos às aulas online",
      "Oferece uma ampla gama de questões para prática",
      "Melhora a experiência de aprendizado com uma interface intuitiva",
      "Permite fácil gerenciamento de progresso e desempenho",
    ],
    results: [
      "Aumento da satisfação dos alunos",
      "Melhoria na retenção e conclusão dos cursos",
      "Redução de carga administrativa através de automação",
    ],
  },
  {
    id: 6,
    title: "Telas de Assinaturas",
    description:
      "Desenvolvimento das telas de assinaturas da plataforma, permitindo que os usuários escolham e gerenciem seus planos de acesso a conteúdos educacionais. Implementado com Webflow para oferecer uma interface intuitiva e moderna.",
    image: assinatura,
    technologies: ["Webflow"],
    methods: [
      "Criação de telas interativas e responsivas",
      "Integração com sistemas de pagamento",
      "Design focado na experiência do usuário",
    ],
    benefits: [
      "Facilita a escolha e gerenciamento de planos de assinatura",
      "Interface intuitiva e moderna",
      "Aumento na conversão de assinantes",
    ],
    results: [
      "Melhoria na experiência do usuário",
      "Aumento nas vendas de assinaturas",
      "Redução de problemas de navegação e compra",
    ],
  },
];

export default works;
