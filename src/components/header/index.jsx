import Whatsapp from "../../assets/whatsapp.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import "./styles.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container-header">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#About">
                <span>About Me</span>
              </a>
            </li>
            <li>
              <a href="#Techs">
                <span>Technologies</span>
              </a>
            </li>
            <li>
              <a href="#Projects">
                <span>Projects</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <div className="icons-header">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/tiozinfk"
              aria-label="My Profile in GitHub"
            >
              <img
                src={Github}
                width={20}
                height={20}
                loading="lazy"
                alt="Github icon"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/rian-moraes/"
              aria-label="My Profile in LinkedIn"
            >
              <img
                src={Linkedin}
                width={20}
                height={20}
                loading="lazy"
                alt="Linkedin icon"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="My Whatsapp number"
              href="https://wa.me/5521967453096"
            >
              <img
                src={Whatsapp}
                width={20}
                height={20}
                loading="lazy"
                alt="Whatsapp icon"
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
