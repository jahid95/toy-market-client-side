import Location from "../Location/Location";
import Offer from "../Offer/Offer";
import Carousel from "./Carousel";
import Catagories from "./Catagories";
import Gallery from "./Gallery";


const Home = () => {
    return (
        <div className="">
            <Carousel></Carousel>
            <Catagories></Catagories>
            <Offer></Offer>
            <Gallery></Gallery>
            <Location></Location>
        </div>
    );
};

export default Home;