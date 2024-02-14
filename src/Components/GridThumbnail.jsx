import { Link } from "react-router-dom";

export default function GridThumbnail({ image, name, duration, genre, language, id, related, handleClick, movie }){

    return(
        <div className='mx-auto flex flex-col col-span-2 w-11/12 opacity-60 transition duration-200 hover:opacity-100'>
            <Link onClick={()=>{
                if(related){
                    handleClick(movie);
                }
            }} to={`/movie/${id}`}>
                <button className='relative flex h-[350px] w-11/12'>
                    <img className='cursor-pointer w-full h-[350px] object-cover shadow-3xl' src={image} />
                </button>
                <button className='text-left text-white font-roboto font-semibold text-[15px] mt-[9px] w-fit'>{name}</button>
            </Link>
            <div className='cursor-default flex flex-row gap-x-[30px] text-slate-500 font-roboto text-[13px]'>
                <p>{language}</p>
                <p>{duration}</p>
                <p>{genre}</p>
            </div>
        </div>
    );
};