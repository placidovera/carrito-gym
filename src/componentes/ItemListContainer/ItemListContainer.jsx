import { useState,useEffect } from "react"
import { getProductos ,getProductosPorCategoria} from "../../assets/asycmocks"
import ItemList from "../ItemList/ItemList"
import "../ItemListContainer/ItemListContainer.css"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
const [productos,setProductos]=useState([])
const {idCategoria} = useParams();

useEffect(() => {
  const funcionProductos = idCategoria ? getProductosPorCategoria :getProductos;
  funcionProductos(idCategoria)
  .then(res=> setProductos(res));
},[idCategoria]);


  return (
    <>
      <h1 className="titulo-motivador">{props.texto}</h1>
      <ItemList productos={productos}/>
    </>
  );
};

export default ItemListContainer;
