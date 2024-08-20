import BannerFooter from "./BannerFooter";
import EarnMoneyItem from "./EarnMoneyItem";
import EngageFooterItem from "./EngageFooterItem";
import FooterItemLogoCaption from "./FooterItemLogoCaption";
import FooterProductItems from "./FooterProductItems";
function Footer() {
  return (
    <footer className="absolute bg-gray-200 left-0 right-0">
      <BannerFooter />
      <div className=" p-4 grid grid-cols-2 md:grid-cols-4 container gap-10">
        <FooterItemLogoCaption />
        <div className="footer-item-2 ">
          <FooterProductItems />
        </div>
        <div className="footer-item-3 space-y-5">
          <EngageFooterItem />
        </div>
        <div className="footer-item-2 space-y-5">
          <EarnMoneyItem />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
