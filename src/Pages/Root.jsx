import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Root({children}){
    return(
        <div className="relative w-full ">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}