import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <NavLink to="/" end></NavLink>
      </div>
      <ul className="header-ul">
        <li>
          <NavLink to="/login" end>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/" end>
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
