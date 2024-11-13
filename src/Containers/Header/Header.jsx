import style from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
      <header>
          <div className={style.empty}></div>

          <Link to="/">
              <img
                  className={style.generalLogo}
                  src={logo}
                  alt="Logo du site"
                  style={{width: "200px", height: "auto"}}
              />
          </Link>

          <nav className={style.menu}>
              <ul>
                  <li>
                      <NavLink
                          to="/"
                          className={({isActive}) => (isActive ? `${style.navLink} ${style.active}` : style.navLink)}
                      >
                          Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/brands"
                          className={({isActive}) => (isActive ? `${style.navLink} ${style.active}` : style.navLink)}
                      >
                          All Brands
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/configurator"
                          className={({isActive}) => (isActive ? `${style.navLink} ${style.active}` : style.navLink)}
                      >
                          Configurator
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/contact"
                          className={({isActive}) => (isActive ? `${style.navLink} ${style.active}` : style.navLink)}
                      >
                          Contact
                      </NavLink>
                  </li>
              </ul>
          </nav>
      </header>
  );
};

export default Header;
