import { headerMenuItems } from "../../constants";
import Buttons from "../Buttons/Buttons";

function Header() {
  return (
    <header className="header">
      <div>
        <img src="../public/images/logo.png" className="logo-header" alt="" />
      </div>
      <nav className="hidden md:inline">
        <ul className="flex items-center gap-5">
          {headerMenuItems.map((navItems) => {
            return (
              <li className="nav-menu-li" key={navItems.id}>
                <a href={navItems.link} className="nav-menu-item">
                  {navItems.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <Buttons name1="Sign In" name2="Download App" />
    </header>
  );
}

export default Header;
