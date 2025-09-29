import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <strong>
            <Link to="/" className="text-fluor">
              GYM PRO ONE-LINE
            </Link>
          </strong>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <NavLink to="/categoria/proteinas" className="text-fluor">
                  Proteinas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/creatinas" className="text-fluor">
                  Creatinas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/quemadores" className="text-fluor">
                  Quemadores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/preentrenos" className="text-fluor">
                  Pre-Entrenos
                </NavLink>
                 </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
