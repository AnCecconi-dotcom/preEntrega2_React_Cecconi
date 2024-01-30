import { useEffect, useState } from "react";
import  arrayProductos  from "./json/productos.json";
import { HomeCarousel } from "./HomeCarousel";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {id} = useParams (); 

  useEffect(() => {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(id ? arrayProductos.filter (item => item.category == id) : arrayProductos);
      }, 2000);
    })
    promise.then(data => {
      setItems(data);
      console.log(data);
    })
  }, [id]);

  return (
    <>
      {id ? "" : <HomeCarousel />}
      <ItemList items={items} />
    </>
  )
}
