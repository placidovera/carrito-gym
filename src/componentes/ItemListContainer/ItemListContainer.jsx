import { useState, useEffect } from "react";
import { db } from "../Services/Config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos"); 

    const misProductos = idCategoria
      ? query(productosRef, where("idCat", "==", idCategoria))
      : productosRef;

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <>
      <h1 className="titulo-motivador">{props.texto}</h1>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
