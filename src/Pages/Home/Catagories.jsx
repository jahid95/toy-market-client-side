import { useEffect, useState } from "react";
import Products from "./Products";


const Catagories = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl text-red-600 font-bold">| Products</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            {
                products.map(product => <Products key={product.id} product={product}></Products>)
            }
            </div>
        </div>
    );
};

export default Catagories;