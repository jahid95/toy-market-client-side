import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AddToy = () => {


    const { user } = useContext(AuthContext);
    console.log(user);


    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const catagories = form.catagories.value;
        const photo = form.photo.value;
        const toyName = form.toyname.value;
        const email = user.email;

        const toy = { 
            email,
            name,
            quantity,
            price,
            catagories,
            photo,
            toyName

        }

        console.log(toy);

        fetch('http://localhost:5000/toys',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(toy)
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })

    }

    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-red-600 mb-8'>Add Your Toy { } </h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" className="input input-bordered" placeholder="photo url" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy name</span>
                        </label>
                        <input type="text" name="toyname" placeholder="Toy Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Catagories</span>
                        </label>
                        <input type="text" name="catagories" placeholder="Catagories" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" placeholder="$" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-warning btn-block" type="submit" value="Upload Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default AddToy;