import { headerMenuItems } from "../../constants/HeaderMenuItem";

function Navbar() {
  return (
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
  );
}

export default Navbar;
