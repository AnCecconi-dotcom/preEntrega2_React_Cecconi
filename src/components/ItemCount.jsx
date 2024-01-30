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
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-6 d-flex justify-content-end align-items-center m-3">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-dark rounded-0" onClick={decrementar}>-</button>
                            <button type="button" className="btn btn-dark rounded-0 px-4">{counter}</button>
                            <button type="button" className="btn btn-dark rounded-0" onClick={incrementar}>+</button>
                        </div>
                        <div className="col-md-6 d-flex justify-content-start align-items-center m-3">
                            <button type="button" className="btn btn-dark rounded-0 px-5" onClick={onAdd}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
