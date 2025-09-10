import Item from "../Item/Item";


const ItemList = ({ productos }) => {
  return (
    <div className="container">
      <div className="row">
        {productos.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
