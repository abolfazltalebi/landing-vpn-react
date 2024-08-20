import Buttons from "../Buttons";
import BrandLogo from "./BrandLogo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <BrandLogo />
      <Navbar />
      <Buttons name1="Sign In" name2="Download App" />
    </header>
  );
}

export default Header;
