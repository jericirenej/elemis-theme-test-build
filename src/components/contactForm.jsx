const ContactForm = props => {
  const { onInputHandle, onSingleValidate, onSubmit, message } = props;

  return (
    <form id="about-us-inputs">
      <input
        type="text"
        placeholder="Please enter your full name"
        id="contact-name-input"
        className={
          onSingleValidate("name", message.name) &&
          message.name.length &&
          "validate-error"
        }
        title={onSingleValidate("name", message.name)}
        onChange={input => onInputHandle(input.target.value, "name")}
        value={message.name}></input>
      <input
        type="email"
        id="contact-email-input"
        className={
          onSingleValidate("email", message.email) &&
          message.email.length &&
          "validate-error"
        }
        title={onSingleValidate("email", message.email)}
        placeholder="Please enter a valid email address"
        onChange={input => onInputHandle(input.target.value, "email")}
        value={message.email}></input>
      <textarea
        id="contact-message-input"
        className={
          onSingleValidate("message", message.message) &&
          message.message.length &&
          "validate-error"
        }
        title={onSingleValidate("message", message.message)}
        placeholder="Your message (5 characters minimum)"
        onChange={input => onInputHandle(input.target.value, "message")}
        value={message.message}></textarea>
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
