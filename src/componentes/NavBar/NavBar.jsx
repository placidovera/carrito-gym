import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link,NavLink } from "react-router-dom"
const NavBar = () => {

  return (

  <header>
    <nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid">
<strong><Link to ="/">GYM PRO ONE-LINE</Link></strong>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
       <ul className="navbar-nav text-center"> 
        <li className="nav-item"><NavLink to ="/categoria/proteinas">Proteinas</NavLink></li>
        <li className="nav-item"><NavLink to ="/categoria/creatinas">Creatinas</NavLink></li>
        <li className="nav-item"><NavLink to ="/categoria/quemadores">Quemadores</NavLink></li>
       </ul>
    </div>
  </div>
  <CartWidget/>
</nav>

  </header>
  )
}

export default NavBar