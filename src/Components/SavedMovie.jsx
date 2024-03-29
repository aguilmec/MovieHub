import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function SavedMovie({ movie, user, setUser }){

    async function handleRemove(){
        const response = await fetch('http://localhost:3500/remove/movie', {
            method: 'POST',
            credentials: 'include',
            withCredentials: true,
            body: JSON.stringify({id: user._id, movieId: movie._id}),
            headers: {'Content-Type': 'application/json'}
        });
        const newSaved = await response.json();
        setUser({...user, saved: newSaved.saved});
    };

    return(
        <div className="flex flex-col col-span-2 font-roboto">
            <p className="text-white text-[15px] font-semibold tracking-wide cursor-default mb-[5px]">{movie.name}</p>
            <div className='col-span-2 flex gap-x-[20px]'>
                <img className='shadow-3xl xl:w-[100px] lg:w-[100px] md:w-[120px] sm:w-[120px] xs:w-[100px] xl:h-[150px] lg:h-[150px] md:h-[165px] sm:h-[170px] col-span-1 object-cover' src={movie.image}/>
                <div className='col-span-1 flex flex-col justify-between h-5/6'>
                    <p className="text-[#828282] text-[12px] text-wrap cursor-default font-semibold">{`${movie.language} ${movie.duration} ${movie.genre}`}</p>
                    <div className="flex text-center cursor-default content-center gap-x-[4px] font-semibold">
                        <p className="text-[#828282] text-center text-[14px]">Rating: <span className="text-[#A70000]">{movie.rating}/5</span></p>
                        <p className="text-[#A70000] h-full mt-[1px] lg:visible md:visible sm:visible xs:invisible">{<IoStarSharp />}</p>
                    </div>
                    <div className='flex gap-x-[20px] xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col xs:gap-y-[10px]'>
                        <button className="border-solid w-full border-[1px] border-white hover:border-[1px] hover:border-[#A70000] transition-[bg_200,border_200] duration-200 z-20 bg-transparent text-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] xl:px-[12px] lg:px-[12px] md:px-[12px] sm:px-[12px] xs:px-[0px] py-[2px] text-center xl:w-full lg:w-full md:w-full sm:w-full xs:w-4/6"><Link to={`/movie/${movie._id}`}>Play</Link></button>
                        <button onClick={()=>{handleRemove()}} className="border-solid w-full border-[1px] border-white hover:border-[1px] hover:border-[#A70000] transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] xl:px-[12px] lg:px-[12px] md:px-[12px] sm:px-[12px] xs:px-[0px] py-[2px] text-center xl:w-full lg:w-full md:w-full sm:w-full xs:w-4/6">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};