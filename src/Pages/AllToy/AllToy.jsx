import { useEffect, useState } from "react";
import ToyRow from "../MyToy/ToyRow";

const AllToy = () => {
    
    const [toys, setToys] = useState([]);

    const url = `https://kids-cars-assignment-server.vercel.app/toys`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);
    return (
        <div>
       
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead className="text-red-600 font-semibold">
                    <tr>
                        
                        <th>Image</th>
                        <th>Seller</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <ToyRow
                            key={toy._id}
                            toy={toy}
                           
                        ></ToyRow>)
                    }
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default AllToy;