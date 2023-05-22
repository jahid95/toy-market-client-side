import { useEffect, useState } from "react";
import ToyRow from "../MyToy/ToyRow";

const AllToy = () => {
    
    const [toys, setToys] = useState([]);

    const url = `http://localhost:5000/toys`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);
    return (
        <div>
        <h2 className="text-5xl">Your bookings: {toys.length}</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
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