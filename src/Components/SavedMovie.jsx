import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function SavedMovie({ movie }){

    return(
        <div className="flex flex-col col-span-2 font-roboto">
            <p className="text-white text-[15px] font-semibold tracking-wide cursor-default mb-[5px]">{movie.name}</p>
            <div className='col-span-2 flex gap-x-[20px]'>
                <img className='shadow-3xl w-[100px] h-[150px] col-span-1 object-cover' src={movie.image}/>
                <div className='col-span-1 flex flex-col justify-between h-5/6'>
                    <p className="text-[#828282] text-[12px] text-wrap cursor-default font-semibold">{`${movie.language} ${movie.duration} ${movie.genre}`}</p>
                    <div className="flex text-center cursor-default content-center gap-x-[4px] font-semibold">
                        <p className="text-[#828282] text-center text-[14px]">Rating: <span className="text-[#A70000]">{movie.rating}/5</span></p>
                        <p className="text-[#A70000] h-full mt-[1px]">{<IoStarSharp />}</p>
                    </div>
                    <div className='flex gap-x-[20px]'>
                        <button className="border-solid w-full border-[1px] border-white hover:border-[1px] hover:border-[#A70000] transition-[bg_200,border_200] duration-200 z-20 bg-transparent text-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[12px] px-[12px] py-[2px] text-center"><Link to={`/movie/${movie._id}`}>Play</Link></button>
                        <button className="border-solid w-full border-[1px] border-white hover:border-[1px] hover:border-[#A70000] transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[12px] px-[12px] py-[2px] text-center">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};