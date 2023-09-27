import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillGithub,
} from "react-icons/ai";

import "./styles.css";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
import LanguageSwitcher from "../switch";
import { useTranslation } from "react-i18next";

export const Header = ({ isDark, setIsDark }) => {
  const { t } = useTranslation();

  return (
    <header className={isDark ? "header dark" : "header"}>
      <div className="container-header">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#About">
                <span>{t("headerAbout")}</span>
              </a>
            </li>
            <li>
              <a href="#Techs">
                <span>{t("headerStacks")}</span>
              </a>
            </li>
            <li>
              <a href="#Projects">
                <span>{t("headerProjects")}</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <div className="icons-header">
            <LanguageSwitcher isDark={isDark} />

            <Toggle
              checked={isDark}
              onChange={({ target }) => setIsDark(target.checked)}
              icons={{ checked: "🌙", unchecked: "🔆" }}
              aria-label="Dark mode toggle"
            />
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
          </div>
        </nav>
      </div>
    </header>
  );
};
