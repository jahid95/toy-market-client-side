import { Link } from "react-router-dom";

const Products = ({ product }) => {
    const {image} = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-44" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Cars
                        <div className="badge badge-secondary">$ 15</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline bg-red-600 text-white px-4 py-4">Buy Now</div>
                        <Link className="badge badge-outline  text-red-600 px-4 py-4">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;