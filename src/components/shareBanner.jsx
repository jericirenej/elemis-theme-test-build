import shareBanner from "../resources/shareBanner.jpg";

const ShareBanner = () => {
  return (
    <div className="share-banner">
      <img src={shareBanner} alt="Click and Share" />
      <h2>
        <a href="#">
          Click <span className="blue">&</span> share the love
        </a>
      </h2>
    </div>
  );
};

export default ShareBanner;
