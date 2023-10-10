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
import { useEffect } from "react";

export const Header = ({ isDark, setIsDark }) => {
  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if (dark) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const { t } = useTranslation();

  return (
    <header className={isDark ? "header dark" : "header"}>
      <div className="container-header">
        <nav className="anchor-nav">
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
        <nav className="icons-nav">
          <div className="icons-header">
            <div className="btn">
              <LanguageSwitcher isDark={isDark} />

              <Toggle
                checked={isDark}
                onChange={({ target }) => setIsDark(target.checked)}
                icons={{ checked: "🌙", unchecked: "🔆" }}
                aria-label="Dark mode toggle"
              />
            </div>

            <div className="icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/rshmdev"
                aria-label="My Profile in GitHub"
              >
                <AiFillGithub
                  color={isDark ? "#fff" : "#333"}
                  size={24}
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
                  size={24}
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
                  size={24}
                  alt="Whatsapp icon"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
