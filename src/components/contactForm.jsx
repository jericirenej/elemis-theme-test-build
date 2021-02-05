import { BsCheck, BsX } from "react-icons/bs";
const ContactForm = props => {
  const { onInputHandle, onSingleValidate, onSubmit, message } = props;

  return (
    <form id="about-us-inputs">
      <div id="contact-name-input-div">
        <input
          type="text"
          placeholder="Full name"
          id="contact-name-input"
          className={
            onSingleValidate("name", message.name) &&
            message.name.length &&
            "validate-error"
          }
          title={onSingleValidate("name", message.name)}
          onChange={input => onInputHandle(input.target.value, "name")}
          value={message.name}></input>
        {onSingleValidate("name", message.name) ? (
          <p className="invalid-input">
            <BsX className="icon"/> {onSingleValidate("name", message.name)}
          </p>
        ) : (
          <p className="valid-input">
            <BsCheck className="icon"/>
          </p>
        )}
      </div>
      <div id="contact-email-input-div">
        <input
          type="email"
          id="contact-email-input"
          className={
            onSingleValidate("email", message.email) &&
            message.email.length &&
            "validate-error"
          }
          title={onSingleValidate("email", message.email)}
          placeholder="Email address"
          onChange={input => onInputHandle(input.target.value, "email")}
          value={message.email}></input>
        {onSingleValidate("email", message.email) ? (
          <p className="invalid-input">
            <BsX className="icon"/> {onSingleValidate("email", message.email)}
          </p>
        ) : (
          <p className="valid-input">
            <BsCheck className="icon"/>
          </p>
        )}
      </div>
      <div id="contact-message-input-div">
        <textarea
          id="contact-message-input"
          className={
            onSingleValidate("message", message.message) &&
            message.message.length &&
            "validate-error"
          }
          title={onSingleValidate("message", message.message)}
          placeholder="Your message"
          onChange={input => onInputHandle(input.target.value, "message")}
          value={message.message}></textarea>
        {onSingleValidate("message", message.message) ? (
          <p className="invalid-input">
            <BsX className="icon"/> {onSingleValidate("message", message.message)}
          </p>
        ) : (
          <p className="valid-input">
            <BsCheck className="icon"/>
          </p>
        )}
      </div>
      <button
        disabled={!message.validated}
        onClick={() => onSubmit(message)}
        id="contact-submit-input"
        type="button"
        className="submit blue-background">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
