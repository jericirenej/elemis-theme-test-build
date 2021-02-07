import workTogether from "../resources/workTogether.jpg";

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <img src={workTogether} alt="Let's work together" />
      <h2>
        We create unique <span className="blue">&</span> gorgeous things.
      </h2>
      <a href="#contact-us">Let's work together</a>
    </div>
  );
};

export default ContactBanner;
