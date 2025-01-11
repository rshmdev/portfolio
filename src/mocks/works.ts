import ecommerce from "@images/Ecommerce.png";
import gapizer from "@images/gapizer-image.png";
import assinatura from "@images/assinatura.png";

const works = [
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
    title: "GAPizer",
    description:
      "CLI para gerar apis em Go a partir de um arquivo de definição de endpoints. O projeto foi desenvolvido para facilitar a criação de APIs RESTful em Go, seguindo as melhores práticas de design de APIs.",
    image: gapizer,
    technologies: ["React.js", "TailwindCSS", "Go"],
    methods: [
      "Desenvolvimento de interfaces gráficas",
      "Geração de código a partir de templates",
      "Integração com CLI em Go",
    ],
    benefits: [
      "Facilita a criação de APIs RESTful em Go",
      "Padroniza o design e a estrutura de APIs",
      "Reduz o tempo de desenvolvimento de APIs",
    ],
    results: [
      "Aumento na produtividade de desenvolvedores",
      "Melhoria na qualidade e consistência de APIs",
      "Redução de erros e retrabalho",
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
