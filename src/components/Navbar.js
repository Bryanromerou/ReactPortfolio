import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Navbar = (props)=>{
  return(
    <nav>
      <div className ="navLogo">
        <Link to="/">
          <h1>Bryan Romero</h1>
        </Link>
      </div>
      <ul className = "navLinks">
        <li>
          <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/education">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/experience">
            Experience
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;