import { useEffect } from "react";
import { useState } from "react";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
import  arrayProductos  from "./json/productos.json";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(arrayProductos);
      }, 2000);
    })
    promise.then(data => {
      setItems(data);
      console.log(data);
    })
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  )
}
