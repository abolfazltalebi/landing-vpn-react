import Buttons from "../Buttons";

function CaptionHeroSection() {
  return (
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
  );
}

export default CaptionHeroSection;
