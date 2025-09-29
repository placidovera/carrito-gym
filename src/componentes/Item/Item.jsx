import "../Item/Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img ,descripcion}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="col-dos h-100 text-center">
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
     <p>Precio: $ {precio}</p>
        <p>ID: {id}</p>
        <Link to={`/item/${id}`}>
          <button>Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
