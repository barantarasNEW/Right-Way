import { NavLink } from "react-router-dom";
import './Navbar.scss';

import cn from 'classnames';

import { links } from "./constants";

const linkClasses = ({ isActive }: { isActive: boolean }) => cn(
  "navbar__link", { active: isActive }
);

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {links.map(({ href, name }) => (
          <li key={href} className="navbar__item">
            <NavLink to={href} className={linkClasses}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;