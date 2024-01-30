import { NavLink } from "react-router-dom"

export const Categorias = () => {
  return (
    <ul className="nav">
        <li className="nav-item">
            <NavLink className="nav-link fs-7 text-light" to={"/category/Mac"}>Mac</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link fs-7 text-light" to={"/category/iPad"}>iPad</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link fs-7 text-light" to={"/category/iPhone"}>iPhone</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link fs-7 text-light" to={"/category/iWatch"}>iWatch</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link fs-7 text-light" to={"/category/AirPods"}>AirPods</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link fs-7 text-light" to={"/"}>Dónde Comprar</NavLink>
        </li>
    </ul>
  )
}
