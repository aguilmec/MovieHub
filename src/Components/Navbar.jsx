import { UserContext } from "../Context/UserContext";
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
                <button className="cursor-pointer col-span-3 my-auto font-black text-[32px] text-[#A70000] drop-shadow-lg">MOVIEBASE</button>
            </Link>
            <div className="my-auto grid grid-cols-10 col-span-3 col-start-7">
                <input onChange={(e)=>{setMovie(e.target.value)}} value={movie} className="col-span-9 text-[16px] bg-opacity-40 bg-[#989898] h-[38px] border-r-0 text-slate-200 pl-[15px] py-[5px] text-[D9D9D9]" type="text" placeholder="Search..." />
                <button className="text-[16px] col-span-1 bg-opacity-40 bg-[#989898] text-slate-200 border-l-0 border-opacity-40 px-[15px] text-[D9D9D9] relative">
                    <IoSearch />
                </button>
            </div>
            {currentUser ? (
                <div className="flex col-start-11 my-auto text-[25px] text-slate-200 w-max gap-x-[25px]">
                    <Link to={`/profile/${currentUser.id}`} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}} className="relative w-max">
                        {hovered && <Tooltip tooltip={currentUser.email} />}
                        <CgProfile />
                    </Link>
                    <Link to='/' onClick={()=>{handleLogout()}}><IoIosLogOut /></Link>
                </div>
            ) : (
                <button className="col-start-11 col-span-1 w-max text-white font-[15px] text-left font-semibold"><Link to={'/login'}>Login/signup</Link></button>
            )}
        </div>
    );
};