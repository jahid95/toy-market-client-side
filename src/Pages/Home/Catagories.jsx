import { useEffect, useState } from "react";
import Products from "./Products";


const Catagories = () => {
    const [products, setProducts] = useState([])
    const [showAll, setShowAll] = useState(true);

    useEffect(()=>{
        fetch('https://kids-cars-assignment-server.vercel.app/cars')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleShowMore =()=>{
        setShowAll(!showAll);

    }
    return (
        <div>
            <h2 className="text-3xl text-red-600 font-bold">| Products</h2>
            <div>
            <div>
                {showAll?( <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                    {
                products.slice(0,6).map(product => <Products key={product.id} product={product}></Products>)
            }
                </div>) : (<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                {
                products.map(product => <Products key={product.id} product={product}></Products>)
            }
                </div>)}
            </div>
            
            </div>
            <div className="text-white mx-auto bg-red-600 py-2 px-4 my-8 rounded-lg w-36 text-center">
            <button onClick={handleShowMore}>{showAll ? 'Show More' : 'Show Less'}</button>
            </div>
        </div>
    );
};

export default Catagories;