import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProtectedRoutes from "../Protected Routes/ProtectedRoutes";
import { Outlet } from "react-router-dom";

export default function Root({children}){
    return(
        <div className="relative w-full ">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}