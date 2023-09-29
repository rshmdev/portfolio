import React from "react";
import { useTranslation } from "react-i18next";
import br from "../../assets/brasil.png";
import us from "../../assets/estados-unidos-da-america.png";
import "./style.css";

const LanguageSwitcher = ({ isDark }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLanguageToggle = () => {
    const newLanguage = i18n.language === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <div className="switch">
      <input
        id="language-toggle"
        className={"check-toggle check-toggle-round-flat"}
        type="checkbox"
        onChange={handleLanguageToggle} // Chama a função quando o checkbox muda de estado
        checked={i18n.language === "en"} // Define o estado do checkbox com base no idioma atual
      />
      <label
        className={isDark ? "label-dark" : "label"}
        htmlFor="language-toggle"
      ></label>
      <span className="on">
        <img width={18} height={18} src={br} alt="" />
      </span>
      <span className="off">
        <img width={18} height={18} src={us} alt="" />
      </span>
    </div>
  );
};

export default LanguageSwitcher;
