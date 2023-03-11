import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo"></div>
      <ul className="header-ul">
        <li>
          <NavLink to="/login" end>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" end>
            Test
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
