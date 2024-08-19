import { footerLinks1, footerLinks2 } from "../../constants";
import BannerFooter from "../BannerFooter/BannerFooter";
import logo from "../../../public/images/logo.png";
import Facebook from "../../../public/images/icons/Facebook.svg";
import Twitter from "../../../public/images/icons/Twitter.svg";
import Instagram from "../../../public/images/icons/Instagram.svg";
function Footer() {
  return (
    <footer className="absolute bg-gray-200 left-0 right-0">
      <BannerFooter />
      <div className=" p-4 grid grid-cols-2 md:grid-cols-4 container gap-10">
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
        <div className="footer-item-2 space-y-5">
          <p className="font-bold text-m">Product</p>
          <ul className="space-y-4">
            {footerLinks1.map((item1) => {
              return (
                <li key={item1.id}>
                  <a href={item1.link}>{item1.name} </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-item-3 space-y-5">
          <p className="font-bold text-m">Engage</p>
          <ul className="space-y-4">
            {footerLinks2.map((item2) => {
              return (
                <li key={item2.id}>
                  <a href={item2.link}>{item2.name} </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-item-2 space-y-5">
          <p className="font-bold text-m">Earn Money</p>
          <ul className="space-y-4">
            <li>
              <a href="#">Affiliate </a>
            </li>
            <li>
              <a href="#">Become Partner</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
