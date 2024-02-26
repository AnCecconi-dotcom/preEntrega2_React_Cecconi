import { useEffect, useState } from "react";
//import  arrayProductos  from "./json/productos.json";
import { HomeCarousel } from "./HomeCarousel";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { HomePage } from "./HomePage";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { Loading } from "./Loading";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState (true);
  const {id} = useParams (); 
  

  //Llamada a productos desde archivo JSON
  /* useEffect(() => {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(id ? arrayProductos.filter (item => item.category == id) : arrayProductos);
      }, 2000);
    })
    promise.then(data => {
      setItems(data);
      console.log(data);
    })
  }, [id]); */


  //Subida de productos a base de datos en firestore (collection "items")
  /* useEffect(() =>{
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    arrayProductos.forEach(producto => {
      addDoc(itemsCollection, producto);
    }); 

    console.log("Los productos se subieron correctamente!");
  }, []); */

  //LLamada de productos desde Firestore
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const consulta = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
    getDocs(consulta).then(resultado => {
      setLoading(false);
      setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
    });
  }, [id]);

  return (
    <>
      {id ? "" : <HomeCarousel />}
      {id ? "" : <HomePage />}
      {loading ? <Loading /> : <ItemList items={items} />}
    </>
  )
}
