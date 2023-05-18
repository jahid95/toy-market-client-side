import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/footer";
import Navbar from "../Pages/shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>            
        </div>
    );
};

export default Main;