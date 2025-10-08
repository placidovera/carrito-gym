import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"



const CartItem = ({item,cantidad}) => {
    const{eliminarProducto}=useContext(CarritoContext)


  return (
 <div style={{ borderBottom: '2px solid #D4AF37' }}>
  <h3>{item.nombre}</h3>
  <p><strong>Cantidad: {cantidad}</strong></p>
  <p><strong>Precio: $ {item.precio}</strong></p>
<button 
  style={{ marginBottom: '10px' }}
  onClick={() => eliminarProducto(item.id)}
>
  Eliminar
</button>
</div>
  )
}

export default CartItem
