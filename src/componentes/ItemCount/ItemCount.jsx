import { useState } from "react"


const ItemCount = ({stock,inicial,funcionAgregar}) => {

    const[contador,setContador]= useState(inicial)

    const incrementar = () =>{
if (contador < stock){
setContador(contador + 1 )
}
    }
   const decrementar = () =>{
    if(contador > inicial){
        setContador(contador - 1)
    }
   }
  return (
 <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
  <button className="item-button" onClick={incrementar}>+</button>
  <p>{contador}</p>
  <button className="item-button" onClick={decrementar}>-</button>
  <button className="item-button" onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
</div>

  )
}

export default ItemCount