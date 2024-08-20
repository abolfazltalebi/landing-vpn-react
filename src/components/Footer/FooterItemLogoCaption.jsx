import logo from "../../../public/images/logo.png";
import Facebook from "../../../public/images/icons/Facebook.svg";
import Twitter from "../../../public/images/icons/Twitter.svg";
import Instagram from "../../../public/images/icons/Instagram.svg";

function FooterItemLogoCaption() {
  return (
    <div className="footer-item-1 space-y-5 ">
      <div>
        <img src={logo} alt="" />
      </div>
      <p>
        <strong>SafeVpn</strong>is a private virtual network that has unique
        features and has high security.
      </p>
      <div className="flex items-center">
        <img src={Facebook} alt="" />
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
      </div>
    </div>
  );
}

export default FooterItemLogoCaption;
