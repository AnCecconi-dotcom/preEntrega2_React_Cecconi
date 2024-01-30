import { useEffect } from "react"
import { useState } from "react"
import { ItemDetail } from "./ItemDetail";
import arrayProductos from "./json/productos.json"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id == 1);
                resolve(producto);
            }, 2000)
        })
        promise.then(data => {
            setItem(data);
            console.log(data);
        })
    }, []);

    return (
        <ItemDetail item={item} />
    )
}
