import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { CartContextProvider } from "./components/context/CartContext";

export const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}
