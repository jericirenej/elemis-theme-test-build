import InputField from "./inputField";
import TextField from "./textAreaField";

const ContactForm = props => {
  const { onInputHandle, onSingleValidate, onSubmit, message } = props;
  return (
    <form id="about-us-inputs">
      <div id="contact-name-input-div">
        <InputField  type="text"
          message={message}
          id="contact-name-input"
          category="name"
          defaultText="Full name"
          onSingleValidate={(category, value) => onSingleValidate(category, value)}
          onInputHandle={(value, category) => onInputHandle(value, category)} />
      </div>
      <div id="contact-email-input-div">
        <InputField
          type="string"
          message={message}
          id="contact-email-input"
          category="email"
          defaultText="Email address"
          onSingleValidate={(category, value) => onSingleValidate(category, value)}
          onInputHandle={(value, category) => onInputHandle(value, category)}
        />
      </div>
      <div id="contact-message-input-div">
        <TextField  type="email"
          message={message}
          id="contact-message-input"
          category="message"
          defaultText="Tell us all about it!"
          onSingleValidate={(category, value) => onSingleValidate(category, value)}
          onInputHandle={(value, category) => onInputHandle(value, category)}/>
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
