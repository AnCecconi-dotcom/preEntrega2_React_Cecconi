import { useState } from "react"

export const ItemCount = ({ stock }) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            console.log("Agregaste " + counter + " productos al carrito. Quedan " + (itemStock - counter) + " disponibles");
        }
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 d-flex justify-content-end pe-3">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-dark" onClick={decrementar}>-</button>
                            <button type="button" className="btn btn-dark">{counter}</button>
                            <button type="button" className="btn btn-dark" onClick={incrementar}>+</button>
                        </div>
                        <div className="col-md-6 d-flex justify-content-start ps-3">
                            <button type="button" className="btn btn-dark" onClick={onAdd}>Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
