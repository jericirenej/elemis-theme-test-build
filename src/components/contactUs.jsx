import { BsCardHeading as EmailIcon} from "react-icons/bs";
import { TiLocationOutline as LocationIcon } from "react-icons/ti";
import { AiOutlinePhone as PhoneIcon } from "react-icons/ai";
import { contactUs } from "../resources/data.js";
import { useState } from "react";
import Joi from "joi";
import schemaValidate from "../resources/formValidation.js";
import ContactForm from "./contactForm.jsx";

const ContactUs = ({ handleSubmit }) => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
    validated: false,
  });

  const formInputHandle = (value, category) => {
    setMessage(prevState => ({
      ...prevState,
      [category]: value,
      validated: validateInput({ ...prevState, [category]: value }),
    }));
  };

  const validateInput = message => {
    const validation = schemaValidate.validate(
      {
        name: message.name,
        email: message.email,
        message: message.message,
      },
      { abortEarly: false }
    );
    return validation.error ? false : true;
  };

  const singleValidate = (parameter, value) => {
    const validation = schemaValidate.validate(
      { [parameter]: value },
      { abortEarly: false }
    );
    const result = validation.error.details.filter(
      item => item.context.key === parameter
    );
    return result.length ? result[0].message : null;
  };

  const onSubmit = message => {
    try {
      handleSubmit(message);
      alert("Your message was sent. We'll get back to you shortly!");
    } catch (error) {
      alert(
        "Ooops, something went wrong while trying to send your message. Please try again later or send us an email!"
      );
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
          <LocationIcon className="about-icon location" />
          {contactUs.address}
        </p>
        <p>
          <PhoneIcon className="about-icon phone" />
          {contactUs.phone}
        </p>
        <p>
          <EmailIcon className="about-icon mail" /> {contactUs.email}
        </p>
      </div>
      <ContactForm
        message={message}
        onSubmit={message => onSubmit(message)}
        onSingleValidate={(parameter, value) => singleValidate(parameter, value)}
        onInputHandle={(input, category) => formInputHandle(input, category)}
      />
    </div>
  );
};

export default ContactUs;
