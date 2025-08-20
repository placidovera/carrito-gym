import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
  <header>
    <nav class="navbar navbar-expand-lg custom-navbar">
  <div class="container-fluid">
     <a class="navbar-brand d-flex align-items-center" href="#">
    </a>
    <a class="navbar-brand text-fluor fw-bold" href="#">GYM PRO ONE-LINE</a>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav text-center">
        <li class="nav-item">
          <a class="nav-link text-fluor" href="#">Proteinas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-fluor" href="#">Quemadores</a>
        </li>
          <li class="nav-item">
          <a class="nav-link text-fluor" href="#">Creatinas</a>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>

  </header>
  )
}

export default NavBar