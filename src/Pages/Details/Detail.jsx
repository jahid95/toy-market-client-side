import { useLoaderData } from "react-router-dom";


const Detail = () => {
    const car = useLoaderData();
    const {name, image} = car;
    return (
        <div>
            <img src={image} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Detail;