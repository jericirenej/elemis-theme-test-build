import { BsCardHeading } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { AiOutlinePhone } from "react-icons/ai";
import { contactUs } from "../resources/data.js";
import { useState } from "react";

const ContactUs = ({ handleSubmit }) => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formInputHandle = (value, category) => {
    setMessage(prevState => ({
      ...prevState,
      [category]: value,
    }));
  };

  const onSubmit = message => {
    try {
      handleSubmit(message);
      alert("Your message was sent. We'll get back to you shortly!");
    }
    catch(error) {
      alert("Ooops, something went wrong while trying to send your message. Please try again later or send us an email!");
      console.error(error);
    }
    let keys = Object.keys(message);
    let newState = message;
    keys.forEach(key => (newState[key] = ""));
    setMessage({ ...newState });
  };

  return (
    <div id="contact-us">
      <h2>{contactUs.title}</h2>
      <h3>{contactUs.subtitle}</h3>
      <p>{contactUs.content}</p>
      <div id="contact-information">
        <p>
          <TiLocationOutline className="about-icon location" />
          {contactUs.address}
        </p>
        <p>
          <AiOutlinePhone className="about-icon phone" />
          {contactUs.phone}
        </p>
        <p>
          <BsCardHeading className="about-icon mail" /> {contactUs.email}
        </p>
      </div>
      <form id="about-us-inputs">
        <input
          type="text"
          placeholder="Full name"
          id="contact-name-input"
          onChange={input => formInputHandle(input.target.value, "name")}
          value={message.name}></input>
        <input
          type="email"
          id="contact-email-input"
          placeholder="Email address"
          onChange={input => formInputHandle(input.target.value, "email")}
          value={message.email}></input>
        <textarea
          id="contact-message-input"
          placeholder="Your message"
          onChange={input => formInputHandle(input.target.value, "message")}
          value={message.message}></textarea>
        <button
          onClick={() => onSubmit(message)}
          id="contact-submit-input"
          type="button"
          className="submit blue-background">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
