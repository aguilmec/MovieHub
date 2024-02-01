import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Tooltip from "./Tooltip";
import { useState } from "react";

export default function Navbar(){

    const [hovered, setHovered] = useState(false);

    return(
        <div className="mt-[10px] px-[70px] z-50 w-full h-[40px] flex flex-row justify-between absolute">
            <div className="cursor-pointer my-auto text-white font-bold text-[22px]">Moviebase</div>
            <div className="my-auto flex flex-row">
                <input className="text-[16px] border-solid border-[1px] rounded-l-xl border-orange-500 h-[25px] border-r-0 border-opacity-40 bg-transparent text-slate-200 pl-[15px] py-[5px]" type="text" placeholder="Search..." />
                <button className="text-[16px] text-slate-200 border-solid border-[1px] border-orange-500 ml-[-1px] border-l-0 border-opacity-40 px-[15px] rounded-r-xl">
                    <IoSearch />
                </button>
            </div>
            <button onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}} className="my-auto text-[25px] text-slate-200 relative">
                {hovered && <Tooltip tooltip= 'Profile' />}
               <CgProfile />
            </button>
        </div>
    )
}