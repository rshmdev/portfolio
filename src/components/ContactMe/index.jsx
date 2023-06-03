import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "./styles.css";

function ContactMe() {
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
          <div className="contact-item">
            <AiFillGithub color="white" size={22} />
            <li>github.com/tiozinfk</li>
          </div>
          <div className="contact-item">
            <AiFillLinkedin color="white" size={22} />
            <li>linkedin.com/in/rian-moraes</li>
          </div>
          <div className="contact-item">
            <AiOutlineWhatsApp color="white" size={22} />
            <li>(21) 96745-3096</li>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default ContactMe;
