import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Tooltip from "./Tooltip";
import { useState } from "react";

export default function Navbar(){

    const [hovered, setHovered] = useState(false);

    return(
        <div className="mt-[10px] z-50 w-full h-[40px] grid grid-cols-12 justify-between absolute gap-x-[20px]">
            <div className="cursor-pointer col-span-3 col-start-2 my-auto font-black text-[32px] text-[#A70000] drop-shadow-lg">MOVIEBASE</div>
            <div className="my-auto grid grid-cols-10 col-span-3 col-start-7">
                <input className="col-span-9 text-[16px] bg-opacity-40 bg-[#989898] h-[38px] border-r-0 text-slate-200 pl-[15px] py-[5px] text-[D9D9D9]" type="text" placeholder="Search..." />
                <button className="text-[16px] col-span-1 bg-opacity-40 bg-[#989898] text-slate-200 border-l-0 border-opacity-40 px-[15px] text-[D9D9D9] relative">
                    <IoSearch />
                </button>
            </div>
            <button onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}} className="col-start-11 my-auto text-[25px] text-slate-200 relative w-max">
                {hovered && <Tooltip tooltip= 'Profile' />}
               <CgProfile />
            </button>
        </div>
    );
};