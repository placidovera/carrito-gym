import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const cart = () => {
  const{carrito,vaciarCarrito,total,cantidadTotal}= useContext(CarritoContext)
  if(cantidadTotal === 0){
    return(
        <>
        <h2>Quieres ver los productos nuevamente?</h2>
        <Link to="/" className="link-carrito">Ver Productos</Link>
        </>
    )
  }

  return (
    <div className="carrito">{
        carrito.map(producto =><CartItem key={producto.id} {...producto}/>)
        }
       <h3>Total: $ {total}</h3>
       <h3>Cantidad: {cantidadTotal}</h3>
     <button className="boton-accion"
  style={{ marginRight: '20px' }}
  onClick={() => vaciarCarrito()}
>
  Vaciar Carrito
</button >
        <Link to="/checkout"><button >Finalizar Compra</button></Link>
    </div>
  )
}

export default cart