import "./index.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div>
          <h4>© 2022 Rian Moraes.</h4>
        </div>
        <div>
          <nav className="nav-icons-footer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/tiozinfk"
            >
              <AiFillGithub size={22} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/rian-moraes/"
            >
              <AiFillLinkedin size={22} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=5521982024176&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20para%20saber%20sobre%20seus%20servi%C3%A7os%20de%20programador%20web"
            >
              <AiOutlineWhatsApp size={22} />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
