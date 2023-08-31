import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillGithub,
} from "react-icons/ai";
import "./styles.css";

function ContactMe({ isDark }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function SendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Fill in all the fields");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_kvew5so",
        "template_hhe3btq",
        templateParams,
        "91Hl83BAKsCT3zBqE"
      )
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        alert("Email sent successfully");
      })
      .catch((err) => {
        alert("An error occurred");
      });
  }

  return (
    <section id="Contact-me" className="contact-me">
      <div className="text-tittle">
        <h1>CONTACT ME</h1>
      </div>
      <div className="div-contact-me">
        <form className="form-contact" onSubmit={SendEmail}>
          <input
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            value={name}
          />
          <input
            placeholder="Your Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            value={email}
          />
          <textarea
            placeholder="Enter your message..."
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="message"
            value={message}
          />
          <button type="submit" className="btn-form">
            Send email
          </button>
        </form>
        <ul className="ul-contact">
          <li className={isDark ? "contact-item dark" : "contact-item"}>
            <AiFillGithub
              color={isDark ? "#fff" : "#333"}
              size={20}
              alt="Whatsapp icon"
            />
            github.com/tiozinfk
          </li>
          <li className={isDark ? "contact-item dark" : "contact-item"}>
            <AiFillLinkedin
              color={isDark ? "#fff" : "#333"}
              size={20}
              alt="Linkedin icon"
            />
            linkedin.com/in/rian-moraes
          </li>
          <li className={isDark ? "contact-item dark" : "contact-item"}>
            <AiOutlineWhatsApp
              color={isDark ? "#fff" : "#333"}
              size={20}
              alt="Github icon"
            />
            (21) 96745-3096
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactMe;
