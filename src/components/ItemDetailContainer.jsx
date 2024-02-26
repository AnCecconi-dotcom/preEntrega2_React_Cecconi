import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
//import arrayProductos from "./json/productos.json"
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Loading } from "./Loading";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    /*    useEffect(() => {
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
        }, [id]); */

    //LLamada del producto desde Firestore
    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
            setItem({id:resultado.id, ...resultado.data()});
        });
    }, [id]);

    return (
        <>
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </>

    )
}
