import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div className="contenedor">
      <h2 className="titulo-motivador">{props.texto}</h2>
    </div>
  );
};

export default ItemListContainer;
