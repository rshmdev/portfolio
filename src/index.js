import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";

import NuKenzieImage from "./assets/NuKenzie.webp";
import KenzieBurguerImage from "./assets/KenzieBurguer.webp";
import TravelAppImage from "./assets/TravelApp.webp";
import DuckPlayImage from "./assets/DuckPlay.webp";
import YoutubeImage from "./assets/YoutubeClone.webp";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "pt",
  resources: {
    en: {
      translation: {
        // HERO

        heroTitle: "Hey, I`m Rian",
        heroP: "Front end developer focused on Next.js",
        heroResume: "Resume",
        heroContact: "Contact me",

        // ABOUT

        aboutTitle: "ABOUT ME",
        aboutP:
          "Hello, my name is Rian! I`m a passionate and experienced front-end developer specializing in technologies such as React, Next.js, Webflow, Node.js, TypeScript and React Native. I love creating innovative solutions and overcoming challenges in my projects. I`m a communicative person and I love working as part of a team to achieve our goals. In addition, I have a high level of knowledge in SEO and performance improvement, which allows me to optimize my projects to get the best results. I`m always looking for new opportunities to grow and learn more.",

        // SKILLS

        skillsTitle: "SKILLS",

        // EXPERIENCE

        experienceTitle: "EXPERIENCE",
        experienceDate: "JAN/2023 - SEP/2023",
        experienceInfo: "Direção concursos - FRONTEND DEVELOPER",
        experienceP:
          "During my time at Direção Concursos, I worked as a Junior T2 Front-End developer with a special focus on Next.js and SEO, and occasionally ventured into the Back-End. I worked with technologies such as ReactJS and Next.js to create captivating web experiences that were optimized for SEO. In the Back-End, I used Node.js to improve our API and performed database queries to ensure that our applications had fast and secure access to the necessary information. Additionally, I created attractive Landing Pages in Webflow, adding value to our customer acquisition strategy.",

        // PROJECTS

        projectsTitle: "PROJECTS",
        projectsInfo: "Know more",
        projects: [
          {
            name: "NuKenzie",
            image: NuKenzieImage,
            description:
              "NuKenzie was one of my first applications in React.js. It is a simple project that demonstrates my early skills in React development.",
            live: "https://react-entrega-s1-nu-kenzie-tiozinfk.vercel.app/",
            repository:
              "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-tiozinfk",

            repo: "repository",
            liveText: "Live View",
          },

          {
            name: "Kenzie Burger",
            image: KenzieBurguerImage,
            description:
              "Kenzie Burger is an academic project where we had to create a web application for managing a burger restaurant. It showcases my ability to build complex applications with React.js.",
            live: "https://react-entrega-s1-hamburgueria-da-kenzie-tiozinfk.vercel.app/",
            repository: "https://github.com/tiozinfk/KenzieBurguer",
            repo: "repository",
            liveText: "Live View",
          },
          {
            name: "Travel App",
            image: TravelAppImage,
            description:
              "Travel App is an application made using React.js. It allows users to explore various travel destinations and plan their trips effectively.",
            live: "https://travel-map-nine.vercel.app/",
            repository: "https://github.com/tiozinfk/travel-map",
            repo: "repository",
            liveText: "Live View",
          },
          {
            name: "DuckPlay",
            image: DuckPlayImage,
            description:
              "DuckPlay is a project developed using React, API REST, and TypeScript. It is an interactive web application where users can discover and stream their favorite movie.  OBS: the api was hosted on heroku, but it is no longer free, making it impossible to create a user and login.",
            live: "https://superducks-final-project-m3.vercel.app/",
            repository:
              "https://github.com/tiozinfk/superducks-final-project-m3",
            repo: "repository",
            liveText: "Live View",
          },
          {
            name: "Youtube",
            image: YoutubeImage,
            description:
              "This is a YouTube clone built with React, integrated with the YouTube API. It includes a video player, the ability to search videos by their ID, and displays related videos based on the initial video's tag. Additionally, users can access detailed information such as video descriptions, channel names, channel profile pictures, and like counts. The application also offers a dark mode for an improved user experience. This project showcases the capabilities of React and API integration, providing users with an interactive and familiar experience akin to YouTube.",
            live: "https://youtube-omega-orcin.vercel.app/",
            repository: "https://github.com/tiozinfk/Youtube/tree/master",
            repo: "repository",
            liveText: "Live View",
          },
        ],

        // CONTACT ME
        contactTitle: "CONTACT ME",
        contactName: "Your name",
        contactEmail: "Your Email",
        contactMessage: "Enter your message...",
        contactButton: "Send Email",

        headerAbout: "About Me",
        headerStacks: "Technologies",
        headerProjects: "Projects",

        resume:
          "https://drive.google.com/file/d/1R4I7nnTg7FBQRPWgSUjlKkuzOxSH2MXH/view?usp=sharing",
      },
    },
    pt: {
      translation: {
        // HERO
        heroTitle: "Olá, sou o Rian",
        heroP: "Programador front-end especializado em Next.js",
        heroResume: "Curriculo",
        heroContact: "Contato",

        // ABOUT

        aboutTitle: "SOBRE MIM",
        aboutP:
          "Olá, meu nome é Rian! Sou um desenvolvedor front-end apaixonado e experiente, especializado em tecnologias como React, Next.js, Webflow, Node.js, TypeScript e React Native. Adoro criar soluções inovadoras e superar desafios nos meus projetos. Sou uma pessoa comunicativa e adoro trabalhar em equipa para atingir os nossos objectivos. Além disso, tenho um alto nível de conhecimento em SEO e melhoria de performance, o que me permite otimizar os meus projectos para obter os melhores resultados. Estou sempre à procura de novas oportunidades para crescer e aprender mais.",

        // SKILLS

        skillsTitle: "HABILIDADES",

        // EXPERIENCE

        experienceTitle: "EXPERIÊNCIA",
        experienceDate: "JAN/2023 - SET/2023",
        experienceInfo: "Direção concursos - DESENVOLVEDOR FRONT-END",
        experienceP:
          "Durante o meu tempo na Direção Concursos, trabalhei como Front-End Junior T2 com especial foco em Next.js e SEO, e ocasionalmente aventurei-me no Back-End. Trabalhei com tecnologias como ReactJS e Next.js para criar experiências web cativantes e optimizadas para SEO. No Back-End, utilizei Node.js para melhorar a nossa API e efectuei consultas à base de dados para garantir que as nossas aplicações tinham acesso rápido e seguro à informação necessária. Além disso, criei Landing Pages atractivas em Webflow, acrescentando valor à nossa estratégia de aquisição de clientes.",

        // PROJECTS

        projectsTitle: "PROJETOS",
        projectsInfo: "Saiba mais",
        projects: [
          {
            name: "NuKenzie",
            image: NuKenzieImage,
            description:
              "NuKenzie foi uma das minhas primeiras aplicações em React.js. É um projeto simples para gerenciamento de pagamentos que demonstra as minhas primeiras competências no desenvolvimento em React.",
            live: "https://react-entrega-s1-nu-kenzie-tiozinfk.vercel.app/",
            repository:
              "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-tiozinfk",
            repo: "Repositório",
            liveText: "Deploy",
          },
          {
            name: "Kenzie Burger",
            image: KenzieBurguerImage,
            description:
              "O Kenzie Burger é um projeto académico em que tivemos de criar uma aplicação Web para gerir um restaurante de hambúrgueres, a aplicação permitia adicionar e removar produtos do carrinho, com mensagens de erro utlizando toasts. Este projeto demonstra a minha capacidade de criar aplicações complexas e responsivas com React.js.",
            live: "https://react-entrega-s1-hamburgueria-da-kenzie-tiozinfk.vercel.app/",
            repository: "https://github.com/tiozinfk/KenzieBurguer",
            repo: "Repositório",
            liveText: "Deploy",
          },
          {
            name: "Travel App",
            image: TravelAppImage,
            description:
              "Travel App é uma aplicação feita com React.js. Permite aos utilizadores explorar vários destinos de viagem e planear as suas viagens de forma eficaz, o usuario pode filtrar por resutantes, hoteis e atrações proximo da sua localização, tambem é possivel ver o marcador no mapa para facilitar a localização, foi utilizado a api do google.",
            live: "https://travel-map-nine.vercel.app/",
            repository: "https://github.com/tiozinfk/travel-map",
            repo: "Repositório",
            liveText: "Deploy",
          },
          {
            name: "DuckPlay",
            image: DuckPlayImage,
            description:
              "DuckPlay é um projeto desenvolvido com React, API REST e TypeScript. É uma aplicação web interativa onde os utilizadores podem descobrir e transmitir o seu filme favorito.  OBS: a api estava hospedada no heroku, mas não é mais gratuita, impossibilitando a criação de um usuário e login.",
            live: "https://superducks-final-project-m3.vercel.app/",
            repository:
              "https://github.com/tiozinfk/superducks-final-project-m3",
            repo: "Repositório",
            liveText: "Deploy",
          },
          {
            name: "Youtube",
            image: YoutubeImage,
            description:
              "É uma versão do YouTube feita com React, usando a API do YouTube. Tem leitor de vídeo, busca por ID, e mostra vídeos relacionados. Mostra detalhes como descrições, nomes de canais e contagem de gostos. Tem um modo escuro. Destaca as capacidades do React e integração de API, oferecendo uma experiência semelhante ao YouTube.",
            live: "https://youtube-omega-orcin.vercel.app/",
            repository: "https://github.com/tiozinfk/Youtube/tree/master",
            repo: "Repositório",
            liveText: "Deploy",
          },
        ],

        // CONTACT ME
        contactTitle: "CONTATO",
        contactName: "Seu nome",
        contactEmail: "Seu Email",
        contactMessage: "Insira sua mensagem...",
        contactButton: "Enviar Email",

        headerAbout: "Sobre Mim",
        headerStacks: "Habilidades",
        headerProjects: "Projetos",

        resume:
          "https://drive.google.com/file/d/1lf_koivMK9JEp1zUcc__tic2tgOeZzuz/view?usp=sharing",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
