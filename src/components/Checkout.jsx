import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";


export const Checkout = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [orderId, setOrderId] = useState();
    const { cart, clear, totalAmountProducts, totalPricePurchase } = useContext(CartContext);


    const generateOrder = () => {
        if (name.length == 0) {
            return false;
        }

        if (email.length == 0) {
            return false;
        }

        if (phone.length == 0) {
            return false;
        }

        const client = { name: name, email: email, phone: phone };
        const items = cart.map(item => ({ id: item.idx, title: item.title, price: item.price }));
        const day = new Date();
        const date = `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()} ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
        const total = totalPricePurchase();
        const order = { client: client, items: items, date: date, total: total };


        //Insertar documetno en Firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order).then(resultado => {
            console.log(resultado);
            clear();
            setOrderId(resultado.id);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center my-2">
                    <h1>Checkout</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Enter you name</label>
                            <input type="text" className="form-control" onInput={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter you email</label>
                            <input type="text" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter you phone number</label>
                            <input type="text" className="form-control" onInput={(e) => { setPhone(e.target.value) }} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="button" className="btn btn-dark" onClick={generateOrder}>Generate Order</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Item</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="text-center">
                                        <img src={product.image} alt={product.name} width={80} />
                                    </td>
                                    <td>{product.title}</td>
                                    <td>U$D {product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>U$D {product.quantity * product.price}</td>
                                </tr>
                            )}
                            <tr>
                                <td className="text-center" colSpan={4}>Total Amount</td>
                                <td className="text-start"> U$D {totalPricePurchase()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <Link to={"/"} className="btn btn-dark my-4 px-5">Go back to main</Link>
                        {/* <Link to={"/checkout"} className="btn btn-dark ms-4 my-4 px-5">Checkout</Link> */}
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    {orderId ? <div class="alert alert-dark p-5 text-center" role="alert">
                        <h2>Thanks for buying!</h2>
                        <p>Your purchase was succesful! This is the order's id: <b>{orderId}</b></p>
                    </div> : ""};
                </div>
            </div>
        </div>
    )
}
