import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";


export const Cart = () => {
  const { cart, removeItem, clear, totalAmountProducts, totalPricePurchase } = useContext(CartContext);

  if (totalAmountProducts() == 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center my-2">
            <div className="alert alert-dark my-4" role="alert">
              No products found in cart!
            </div>
            <Link to={"/"} className="btn btn-dark my-4 px-5">Go back</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center my-2">
          <h1>Your cart</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product =>
                <tr key={product.id}>
                  <td className="text-center align-middle">
                    <img src={product.image} alt={product.name} width={80} />
                  </td>
                  <td className="align-middle">{product.title}</td>
                  <td className="align-middle">U$D {product.price}</td>
                  <td className="align-middle">{product.quantity}</td>
                  <td className="align-middle">U$D {product.quantity * product.price}</td>
                  <td className="text-center align-middle">
                    <a href="#" onClick={() => { removeItem(product.id) }} className="btn btn-dark my-4 px-5">Remove</a>
                  </td>
                </tr>
              )}
              <tr>
                <td className="text-center" colSpan={4}>Total Amount</td>
                <td className="text-start align-middle"> U$D {totalPricePurchase()}</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col text-center">
            <Link to={"/"} className="btn btn-dark my-4 px-5">Go back</Link>
            <Link to={"/checkout"} className="btn btn-dark ms-4 my-4 px-5">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
