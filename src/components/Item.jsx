import { ItemCount } from "./ItemCount"

export const Item = ({ item }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="card border-0">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <ItemCount stock={15} />
                </div>
            </div>
        </div>
    )
}
