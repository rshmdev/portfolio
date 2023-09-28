import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";

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

        // CONTACT ME
        contactTitle: "CONTACT ME",
        contactName: "Your name",
        contactEmail: "Your Email",
        contactMessage: "Enter your message...",
        contactButton: "Send Email",

        headerAbout: "About Me",
        headerStacks: "Technologies",
        headerProjects: "Projects",
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

        // CONTACT ME
        contactTitle: "CONTATO",
        contactName: "Seu nome",
        contactEmail: "Seu Email",
        contactMessage: "Insira sua mensagem...",
        contactButton: "Enviar Email",

        headerAbout: "Sobre Mim",
        headerStacks: "Habilidades",
        headerProjects: "Projetos",
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
