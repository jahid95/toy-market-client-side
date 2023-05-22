import { useLoaderData } from "react-router-dom";


const Detail = () => {
    const car = useLoaderData();
    const {image,name,price,catagory,storeQty,seller,rating} = car;
    return (
        <div>
            <img src={image} alt="" />
            <div className="text-left w-1/2 mx-auto my-4">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-red-700 text-xl font-semibold py-2">Price: {price}</p>
                <p className="text-red-700 text-xl font-semibold py-2">Catagories: {catagory}</p>
                <p className="text-red-700 text-xl font-semibold py-2">Available Quantity: {storeQty}</p>
                <p className="text-red-700 text-xl font-semibold py-2">Seller: {seller}</p>
                <p className="text-red-700 text-xl font-semibold py-2">Rating: {rating}</p>
            </div>
           
        </div>
    );
};

export default Detail;