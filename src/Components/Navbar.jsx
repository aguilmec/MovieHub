import { UserContext } from "../Context/UserContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import Tooltip from "./Tooltip";

export default function Navbar(){

    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);
    const [movie, setMovie] = useState('');
    
    async function handleLogout(){
        try{
            await fetch('http://localhost:3500/logout', {method: 'GET', credentials: 'include', withCredentials: true});
            setCurrentUser(null);
        }catch(error){
            console.error(error)
        }
    };

    return(
        <div className="mt-[10px] z-50 w-full h-[40px] grid grid-cols-12 justify-between absolute gap-x-[20px]">
            <Link className="col-start-2" to={'/'}>
                <button className="cursor-pointer col-span-3 my-auto font-black xl:text-[32px] lg:text-[32px] md:text-[30px] sm:text-[28px] xs:text-[28px] text-[#A70000] drop-shadow-lg">MOVIEBASE</button>
            </Link>
            <div className="xl:hidden lg:hidden md:hidden sm:hidden xs:visible xs:col-start-10 my-auto text-[#A70000] font-bold text-[25px]">
                <button onClick={()=>{setVisible(!visible); console.log(44444444)}}><RxHamburgerMenu /></button>
            </div>
            <div className={`my-auto grid xl:grid-cols-10 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-7 xl:col-span-4 lg:col-span-4 sm:col-span-4 md:col-span-4 xl:col-start-6 lg:col-start-6 md:col-start-6 sm:col-start-6 ${visible ? 'xs:visible xs:col-span-7 xs:col-start-2' : 'xs:hidden'}`}>
                <input onChange={(e)=>{setMovie(e.target.value)}} value={movie} className="xl:col-span-9 lg:col-span-10 md:col-span-10 sm:col-span-9 xs:col-span-5 text-[16px] bg-opacity-40 bg-[#989898] h-[38px] border-r-0 text-slate-200 pl-[15px] py-[5px] text-[D9D9D9]" type="text" placeholder="Search..." />
                <button className="text-[22px] lg:col-span-2 xl:col-span-1 md:col-span-2 sm:col-span-3 xs:col-span-2 bg-opacity-40 bg-[#989898] text-slate-200 border-l-0 border-opacity-40 px-[15px] text-[D9D9D9] relative w-11/12">
                    <IoSearch />
                </button>
            </div>
            {currentUser ? (
                <div className= {`flex xl:col-start-11 lg:col-start-11 md:col-start-11 sm:col-start-11 my-auto text-[25px] text-slate-200 w-max gap-x-[25px] ${visible ? 'xs:visible xs:col-span-3 xs:bg-blue-200' : 'xs:hidden'}`} >
                    <Link to={`/profile/${currentUser.id}`} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}} className="relative w-max">
                        {hovered && <Tooltip tooltip={currentUser.email} />}
                        <CgProfile />
                    </Link>
                    <Link to='/' onClick={()=>{handleLogout()}}><IoIosLogOut /></Link>
                </div>
            ) : (
                <button className={`xl:col-start-11 lg:col-start-11 md:col-start-11 sm:col-start-10 col-span-1 w-max text-white xl:font-[15px] lg:font-[15px] md:font-[15px] sm:font-[15px] xs:text-[15px] text-left font-semibold ${visible ? 'xs:visible xs:col-span-4 xs:col-start-9' : 'xs:hidden'}`}><Link to={'/login'}>Login/signup</Link></button>
            )}
            
        </div>
    );
};