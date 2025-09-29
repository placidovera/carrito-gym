import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";
import { useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, stock, precio, img, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };
  return (
    <div className="item-card">
      <img src={img} alt={nombre} className="item-img" />
      <div className="item-info">
        <h2 className="item-title">{nombre}</h2>
        <p className="item-id">ID: {id}</p>
        <div className="item-price-container">
          <span className="item-price">Precio $ {precio}</span>
        </div>
        <p className="item-desc">
          <strong>Descripcion: </strong>
          {descripcion}
        </p>
        {agregarCantidad > 0 ? (
          <Link to="/cart" className="link-carrito">
            Terminar compra
          </Link>
        ) : (
          <ItemCount
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
        <Link to="/">
          <button className="item-button">Ver Productos</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
