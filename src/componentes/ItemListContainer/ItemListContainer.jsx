import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div className="contenedor">
      <h1 className="titulo-motivador">{props.texto}</h1>
    </div>
  );
};

export default ItemListContainer;
