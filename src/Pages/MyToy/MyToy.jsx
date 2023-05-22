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
    return (
        <div>
        
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
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
                           
                        ></ToyRow>)
                    }
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default MyToy;