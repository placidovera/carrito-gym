import { useState, useEffect } from "react";
import { db } from "../Services/Config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true)
   
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error))
      .finally(()=>{
        console.log("Proceso Terminado")
        setLoading(false)
      })
  }, [idCategoria]);

  return (
    <>
      <h1 className="titulo-motivador">{props.texto}</h1>
      {loading ? <Loader/>:<ItemList productos={productos} />}
      
    </>
  );
};

export default ItemListContainer;
