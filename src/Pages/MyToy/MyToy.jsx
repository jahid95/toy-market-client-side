import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ToyRow from "./ToyRow";


const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    const isMyToy = true;

    const url = `http://localhost:5000/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);

    const handleDelete = id => {
        const process = confirm('Are You sure you want to delete');
        if (process) {
            fetch(`http://localhost:5000/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
        }
    }


    return (
        <div>
        
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead className="text-red-600">
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <ToyRow
                            key={toy._id}
                            toy={toy}
                            isMyToy={isMyToy}
                            handleDelete={handleDelete}
                           
                        ></ToyRow>)
                    }
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default MyToy;