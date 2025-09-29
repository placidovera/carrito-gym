 import "./CartWidget.css"
 import { Link } from "react-router-dom"
 import { useContext } from "react"
 import {CarritoContext} from "../../componentes/context/CarritoContext"

const CartWidget = () => {
    const imagCarrito ="https://thumbs.dreamstime.com/b/icono-de-las-compras-del-carro-la-compra-en-fondo-oscuro-116659167.jpg"
    const{cantidadTotal}=useContext(CarritoContext)

  return (
    <>
    <Link to="/cart">
  <img src={imagCarrito} alt="Imagen carrito" />
  <strong className="cantidades">{cantidadTotal}</strong>
</Link>
  </>
  )
}

export default CartWidget