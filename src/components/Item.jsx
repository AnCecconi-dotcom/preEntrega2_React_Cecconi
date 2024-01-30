import { ItemCount } from "./ItemCount"

export const Item = ({ item }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="card border-0 p-5">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <button className="btn btn-dark rounded-0">Ver Más</button>
                </div>
            </div>
        </div>
    )
}
