import { Link } from "react-router-dom";
import Linebreak from "./Linebreak";
import { useState } from "react";

export default function FeaturedSlider({ newMoviesList, newMovies, setNewMovies }){

    const [header, setHeader] = useState('Movies');

    function handleFilter(type){
        setNewMovies(newMoviesList.filter((movie)=>{
            if(movie.type === type){
                return true;
            };
        }));
    };

    return(
        <div className="xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-[25px]">
            <div className="grid grid-cols-12 mb-[23px]">
                <div className="col-start-2 flex flex-row col-span-10 xl:gap-x-[20px] lg:gap-x-[20px] md:gap-x-[20px] sm:gap-x-[20px] xs:gap-x-[10px]">
                    <p className="cursor-default text-white font-bold text-nowrap xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[20px] xs:text-[17px]">Newest: {header}</p>
                    <Linebreak />
                    <button onClick={()=>{
                                setHeader('Movies');
                                handleFilter('movies');
                            }} className="transition-[bg_200,border_200] duration-200 z-20 bg-transparent text-white border-solid border-[1px] shrink-0 border-white hover:bg-[#A70000] hover:border-transparent hover:text-white xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] xs:text-[11px] font-semibold xl:w-[102px] lg:w-[102px] md:w-[102px] sm:w-[102px] xs:w-[65px] xl:h-[30px] lg:h-[30px] md:h-[30px] sm:h-[30px] xs:h-[25px] py-[1px]">Movies</button>
                    <button onClick={()=>{
                                setHeader('TV Shows');
                                handleFilter('tv shows');
                            }} className="transition-[bg_200,border_200] duration-200 z-20 bg-transparent text-white border-solid border-[1px] shrink-0 border-white hover:bg-[#A70000] hover:border-transparent hover:text-white xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] xs:text-[11px] font-semibold xl:w-[102px] lg:w-[102px] md:w-[102px] sm:w-[102px] xs:w-[65px] xl:h-[30px] lg:h-[30px] md:h-[30px] sm:h-[30px] xs:h-[25px] py-[1px]">TV Shows</button>
                </div>
            </div>
            <div className="flex flex-row overflow-x-auto gap-x-[20px] scrollbar scrollbar-w-[1px] xl:pb-[37px] lg:pb-0 md:pb-0 sm:pb-0 xs:pb-0 relative">
                <div className="absolute inset-x-0 inset-y-0">
                    <div className='sticky absolute z-10 h-full w-[100px] left-0 bg-gradient-to-r from-[#1E1E1E] via-transparent' />
                </div>
                {newMovies.map((movie)=>{
                    return(
                        <div key={movie._id} className='transition ease-in-out delay-25 hover:scale-105 mx-auto flex flex-col w-[220px] opacity-60 transition duration-200 hover:opacity-100'>
                            <Link to={`/movie/${movie._id}`}>
                                <button className='relative flex xl:w-[220px] lg:w-[220px] md:w-[220px] sm:w-[220px] xs:w-[180px]'>
                                    <img className='cursor-pointer w-full xl:h-[320px] lg:h-[320px] md:h-[320px] sm:h-[320px] xs:h-[280px] object-cover shadow-3xl' src={movie.image} />
                                </button>
                            <button className={`truncate text-left text-white font-roboto font-semibold text-[15px] mt-[9px] xl:w-[220px] lg:w-[220px] md:w-[220px] sm:w-[220px] xs:w-[180px]`}>{movie.name}</button>
                            </Link>
                            <div className='cursor-default flex flex-row xl:gap-x-[30px] lg:gap-x-[30px] md:gap-x-[30px] sm:gap-x-[30px] xs:gap-x-[20px] text-slate-500 font-roboto text-[13px]'>
                                <p>{movie.language}</p>
                                <p>{movie.duration}</p>
                                <p>{movie.genre}</p>
                            </div>
                        </div>
                    )
                })}
                <div className="absolute sticky inset-y-0 right-0">
                    <div className='z-10 h-full w-[100px] absolute right-[1px] bg-gradient-to-l from-[#1E1E1E] via-transparent' />
                </div>
            </div>
        </div>
    );
};