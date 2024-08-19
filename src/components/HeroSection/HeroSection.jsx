import Buttons from "../Buttons/Buttons";
import sectionImage from "../../../public/images/hero-section.png"
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="space-y-6">
        <h2 className="title-section">
          Connect to the infinity border with
          <span className="text-title">SafeVpn</span>
        </h2>
        <p className="text-md">
          Provide a network for all your needs with ease and fun using SafeVPN
          discover interesting features from us.
        </p>
        <Buttons name1="Sign In" name2="Download App" />
      </div>
      <div className="order-first md:order-last">
        <img
          src={sectionImage}
          className="img-fluid"
          alt=""
        />
      </div>
    </section>
  );
}

export default HeroSection;
