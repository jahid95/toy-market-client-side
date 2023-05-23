import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Products = ({ product }) => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    const {image,_id,price,name,rating} = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-44" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">$ {price}5</div>
                    </h2>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline bg-red-600 text-white px-4 py-4">Buy Now</div>
                        <Link to={`/detail/${_id}`} className="badge badge-outline  text-red-600 px-4 py-4">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;