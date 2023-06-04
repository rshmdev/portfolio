import "./styles.css";

import Whatsapp from "../../assets/whatsapp.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div>
          <span>© 2022 Rian Moraes.</span>
        </div>
        <div>
          <nav className="nav-icons-footer">
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
          </nav>
        </div>
      </div>
    </div>
  );
};
