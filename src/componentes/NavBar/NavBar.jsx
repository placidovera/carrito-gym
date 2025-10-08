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
             ELIXIR
            </Link>
          </strong>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <NavLink to="/categoria/promos" className="text-fluor">
                  Promos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/botellas" className="text-fluor">
                  Botellas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/latas" className="text-fluor">
                  latas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/combos" className="text-fluor">
                  Combos
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
