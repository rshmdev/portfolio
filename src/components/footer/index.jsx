import "./styles.css";

import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillGithub,
} from "react-icons/ai";
export const Footer = ({ isDark }) => {
  return (
    <div className="footer">
      <div className={isDark ? "container-footer dark" : "container-footer"}>
        <div>
          <span className={isDark ? "dark-name" : "name"}>
            © 2022 Rian Moraes.
          </span>
        </div>
        <div>
          <nav className="nav-icons-footer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/tiozinfk"
              aria-label="My Profile in GitHub"
            >
              <AiFillGithub
                color={isDark ? "#fff" : "#333"}
                size={20}
                alt="Github icon"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/rian-moraes/"
              aria-label="My Profile in LinkedIn"
            >
              <AiFillLinkedin
                color={isDark ? "#fff" : "#333"}
                size={20}
                alt="Linkedin icon"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="My Whatsapp number"
              href="https://wa.me/5521967453096"
            >
              <AiOutlineWhatsApp
                color={isDark ? "#fff" : "#333"}
                size={20}
                alt="Whatsapp icon"
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
