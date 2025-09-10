import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";
import { useState } from "react";
const ItemDetail = ({ id, nombre,stock, precio, img }) => {

  const [agregarCantidad,setAgregarCantidad]=useState(0)
  
  const manejadorCantidad = (cantidad)=>{
   setAgregarCantidad(cantidad);
   console.log("productos agregados:" + cantidad)
  }
  return (
    <div className="item-card">
   
      <img src={img} alt={nombre} className="item-img" />
      <div className="item-info">
        <h2 className="item-title">{nombre}</h2>
        <p className="item-id">ID: {id}</p>
        <div className="item-price-container">
          <span className="item-price">Precio ${precio}</span>
        </div>
        <p className="item-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsam
          cumque repellat culpa soluta error libero maiores quisquam eos enim
          deserunt mollitia iure.
        </p> 
        { 
          agregarCantidad > 0 ?(<Link to ="/cart">Terminar compra</Link>):(<ItemCount inicial={1} stock={stock} funcionAgregar ={manejadorCantidad}/>)
        }
      </div>
    </div>
  );
};

export default ItemDetail;
