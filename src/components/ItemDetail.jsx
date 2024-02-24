import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>USD {item.price}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>

    )
}
