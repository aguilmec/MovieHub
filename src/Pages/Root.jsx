import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root(){
    return(
        <div className="relative w-full ">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}