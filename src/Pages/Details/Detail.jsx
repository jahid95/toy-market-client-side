import { useLoaderData } from "react-router-dom";


const Detail = () => {
    const car = useLoaderData();
    const {image} = car;
    return (
        <div>
            <img src={image} alt="" />
           
        </div>
    );
};

export default Detail;