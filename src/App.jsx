import "./App.css";
import { Header } from "./components/header";
import * as animationData from "./assets/animation.json";
import myPhoto from "./assets/myPhoto.png";
import Lottie from "react-lottie";
import { CardStacks } from "./components/cardStacks";
import { CardProjects } from "./components/cardProjects";
import NuKenzie from "./assets/NuKenzie.png";
import KenzieBurguer from "./assets/KenzieBurguer.png";
import TravelApp from "./assets/TravelApp.png";
import DuckPlay from "./assets/DuckPlay.png";
import { Footer } from "./components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper";
import { Slide } from "react-awesome-reveal";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const stacks = [
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Javascript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "HTML5",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Typescript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "GIT",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  const projects = [
    {
      name: "NuKenzie",
      image: NuKenzie,
      description:
        'This was one of my first applications in Reactjs, it is a financial manager, with "input" and "output" functions, it also has a filter function, to separate the types of transactions',
      live: "https://react-entrega-s1-nu-kenzie-tiozinfk-git-master-tiozinfk.vercel.app/",
      repository:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-tiozinfk",
    },
    {
      name: "Kenzie Burguer",
      image: KenzieBurguer,
      description:
        "This was an academic project where we had to create an application based on a hamburger restaurant, with the option to add items to and remove them from the cart",
      live: "https://react-entrega-s1-hamburgueria-da-kenzie-tiozinfk.vercel.app/",
      repository: "https://github.com/tiozinfk/KenzieBurguer",
    },
    {
      name: "Travel App",
      image: TravelApp,
      description:
        "This is an application made using Reactjs, ChakraUI and Google maps Api, it allows the user to explore hotels, restaurants and attractions near your location or a certain location, it also has filters for type and rating",
      live: "https://travel-map-nine.vercel.app/",
      repository: "https://github.com/tiozinfk/travel-map",
    },
    {
      name: "DuckPlay",
      image: DuckPlay,
      description:
        "Project developed using React, Json server and typescript, it is an application with login and registration functions, authenticated users have access to a dashboard where it is possible to see several movie lists.",
      live: "https://superducks-final-project-m3.vercel.app/",
      repository: "https://github.com/SuperDucks/superducks-final-project-m3",
    },
  ];

  return (
    <div className="App">
      <Header />
      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <div>
              <h1>Hey, I'm Rian</h1>
              <p>Front end developer forcused on React</p>
              <div className="hero-buttons">
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1hFqkKBPQU65HmDMExd5_94RTrBpc9BOw/view?usp=share_link"
                  download="Cv Rian moraes"
                >
                  <button>Dowload CV</button>
                </a>
                <a href="#Contact-me">
                  <button>Contact-me</button>
                </a>
              </div>
            </div>
            <div className="Lottie">
              <Lottie width={500} height={500} options={defaultOptions} />
            </div>
          </div>
        </section>
        <Slide>
          <section id="About" className="About-me">
            <div className="text-tittle">
              <h1>ABOUT ME</h1>
            </div>
            <div className="text-about">
              <p>
                My passion for technology started at a young age, and as time
                went by I became more and more interested in the area and its
                possibilities. I had my first experience in Brazilian Air Force
                that made my mind change and follow my dream of being a
                Front-end Developer and seek an opportunity within the
                programming area.
              </p>
              <img src={myPhoto} alt="myPicture" />
            </div>
          </section>
        </Slide>
        <Slide>
          <section className="stacks" id="Techs">
            <div className="text-tittle">
              <h1>TECHNOLOGIES</h1>
            </div>
            <div className="stacks-div">
              {stacks.map((stack, index) => {
                return (
                  <CardStacks
                    key={index}
                    image={stack.image}
                    name={stack.name}
                  />
                );
              })}
            </div>
          </section>
        </Slide>
        <section className="Projects" id="Projects">
          <div className="text-projects">
            <h1>PROJECTS</h1>
          </div>
          <div className="div-grid-projects">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay
              navigation
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1300: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {projects.map((project) => {
                return (
                  <SwiperSlide>
                    <CardProjects
                      name={project.name}
                      description={project.description}
                      image={project.image}
                      live={project.live}
                      repo={project.repository}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </main>
      <footer id="Contact-me" className="contact-me">
        <div className="text-tittle">
          <h1>CONTACT ME</h1>
        </div>
        <div className="div-contact-me">
          <form className="form-contact" action="">
            <input placeholder="Your name" type="text" name="name" id="name" />
            <input
              placeholder="Your Email"
              type="email"
              name="email"
              id="email"
            />
            <textarea
              placeholder="Enter your message..."
              type="text"
              name="message"
              id="message"
              alig
            />
            <button className="btn-form">Send email</button>
          </form>
          <ul className="ul-contact">
            <div
              style={{ display: "flex", alignItems: "center", color: "white" }}
            >
              <AiFillGithub color="white" size={22} />
              <li>&nbsp; &nbsp; github.com/tiozinfk</li>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", color: "white" }}
            >
              <AiFillLinkedin color="white" size={22} />
              <li>&nbsp; &nbsp; linkedin.com/in/rian-moraes</li>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", color: "white" }}
            >
              <AiOutlineWhatsApp color="white" size={22} />
              <li>&nbsp; &nbsp; (21) 96745-3096</li>
            </div>
          </ul>
        </div>
      </footer>
      <Footer />
    </div>
  );
}

export default App;
