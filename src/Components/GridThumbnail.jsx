import { Link } from "react-router-dom";

export default function GridThumbnail({ image, name, duration, genre, language, id, related, handleClick, movie }){

    return(
        <div className='mx-auto flex flex-col col-span-2 w-11/12 opacity-60 transition duration-200 hover:opacity-100'>
            <Link onClick={()=>{
                if(related){
                    handleClick(movie);
                }
            }} to={`/movie/${id}`}>
                <button className='relative flex xl:h-[350px] lg:h-[400px] md:h-[500px] sm:h-[600px] w-11/12'>
                    <img className='cursor-pointer w-full xl:h-[350px] lg:h-[400px] md:h-[500px] sm:h-[600px] object-cover shadow-3xl' src={image} />
                </button>
                <button className='text-left text-white font-roboto font-semibold xl:text-[15px] lg:text-[20px] md:text-[22px] sm:text-[22px] xs:text-[22px] mt-[9px] w-fit'>{name}</button>
            </Link>
            <div className='cursor-default flex flex-row gap-x-[30px] text-slate-500 font-roboto xl:text-[13px] lg:text-[15px] md:text-[15px] sm:text-[15px] xs:text-[15px]'>
                <p>{language}</p>
                <p>{duration}</p>
                <p>{genre}</p>
            </div>
        </div>
    );
};