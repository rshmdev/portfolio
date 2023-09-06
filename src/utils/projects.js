import NuKenzieImage from "../assets/NuKenzie.webp";
import KenzieBurguerImage from "../assets/KenzieBurguer.webp";
import TravelAppImage from "../assets/TravelApp.webp";
import DuckPlayImage from "../assets/DuckPlay.webp";
import YoutubeImage from "../assets/YoutubeClone.png";

const projectsData = [
  {
    name: "NuKenzie",
    image: NuKenzieImage,
    description:
      "NuKenzie was one of my first applications in React.js. It is a simple project that demonstrates my early skills in React development.",
    live: "https://react-entrega-s1-nu-kenzie-tiozinfk.vercel.app/",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-tiozinfk",
  },
  {
    name: "Kenzie Burger",
    image: KenzieBurguerImage,
    description:
      "Kenzie Burger is an academic project where we had to create a web application for managing a burger restaurant. It showcases my ability to build complex applications with React.js.",
    live: "https://react-entrega-s1-hamburgueria-da-kenzie-tiozinfk.vercel.app/",
    repository: "https://github.com/tiozinfk/KenzieBurguer",
  },
  {
    name: "Travel App",
    image: TravelAppImage,
    description:
      "Travel App is an application made using React.js. It allows users to explore various travel destinations and plan their trips effectively.",
    live: "https://travel-map-nine.vercel.app/",
    repository: "https://github.com/tiozinfk/travel-map",
  },
  {
    name: "DuckPlay",
    image: DuckPlayImage,
    description:
      "DuckPlay is a project developed using React, API REST, and TypeScript. It is an interactive web application where users can discover and stream their favorite movie.  OBS: the api was hosted on heroku, but it is no longer free, making it impossible to create a user and login.",
    live: "https://superducks-final-project-m3.vercel.app/",
    repository: "https://github.com/tiozinfk/superducks-final-project-m3",
  },
  {
    name: "Youtube",
    image: YoutubeImage,
    description:
      "This application is a fully functional clone of YouTube, developed using React and integrated with the YouTube v3 API. It offers a range of features including a video player, the ability to search for videos by their ID, and displays related videos based on the initial tag of the selected video. Additionally, users can access detailed information such as video descriptions, channel names, channel profile pictures, and like counts. The application also offers a dark mode for enhanced user experience. This project demonstrates the capabilities of React and API integration, providing users with an interactive and familiar YouTube-like experience",
    live: "https://youtube-omega-orcin.vercel.app/",
    repository: "https://github.com/tiozinfk/Youtube/tree/master",
  },
];

export default projectsData;
