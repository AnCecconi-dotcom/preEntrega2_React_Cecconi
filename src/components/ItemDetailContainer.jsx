import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import arrayProductos from "./json/productos.json"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams ();

    useEffect(() => {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id === parseInt(id));
                resolve(producto);
            }, 2000)
        })
        promise.then(data => {
            setItem(data);
            console.log(data);
        })
    }, [id]);

    return (
        <ItemDetail item={item} />
    )
}
