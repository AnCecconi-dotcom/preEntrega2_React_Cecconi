import { CartWidget } from "./CartWidget"
import { Categorias } from "./Categorias"
import { Logo } from "./Logo"

export const NavBar = () => {
    return (
        <div className="bg-dark text-light m-0 p-1 sticky-top">
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-2 justify-content-end d-flex align-items-center ">
                        <Logo />
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                        <Categorias />
                    </div>
                    <div className="col-md-3 txt-end d-flex align-items-center">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </div>
    )
}

