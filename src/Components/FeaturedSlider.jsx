import { useState } from "react";
import Linebreak from "./Linebreak";
import { Link } from "react-router-dom";

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
        <div className="">
            <div className="grid grid-cols-12 mb-[23px]">
                <div className="col-start-2 flex flex-row col-span-10 gap-x-[20px]">
                    <p className="cursor-default text-white font-bold text-[24px] text-nowrap">Newest: {header}</p>
                    <Linebreak />
                    <button onClick={()=>{
                                setHeader('Movies');
                                handleFilter('movies');
                            }} className="transition-[bg_200,border_200] duration-200 z-20 bg-transparent text-white border-solid border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[102px] h-[30px] py-[1px]">Movies</button>
                    <button onClick={()=>{
                                setHeader('TV Shows');
                                handleFilter('tv shows');
                            }} className="transition-[bg_200,border_200] duration-200 z-20 bg-transparent text-white border-solid border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[102px] h-[30px] py-[1px]">TV Shows</button>
                </div>
            </div>
            <div className="flex flex-row overflow-x-auto gap-x-[20px] scrollbar scrollbar-w-[1px] pb-[37px] relative">
                <div className="absolute inset-x-0 inset-y-0">
                    <div className='sticky absolute z-10 h-full w-[100px] left-0 bg-gradient-to-r from-[#1E1E1E] via-transparent' />
                </div>
                {newMovies.map((movie)=>{
                    return(
                        <div key={movie._id} className='transition ease-in-out delay-25 hover:scale-105 mx-auto flex flex-col w-[220px] opacity-60 transition duration-200 hover:opacity-100'>
                            <Link to={`/movie/${movie._id}`}>
                                <button className='relative flex w-[220px]'>
                                    <img className='cursor-pointer w-full h-[320px] object-cover shadow-3xl' src={movie.image} />
                                </button>
                            <button className={`truncate text-left text-white font-roboto font-semibold text-[15px] mt-[9px] w-full`}>{movie.name}</button>
                            </Link>
                            <div className='cursor-default flex flex-row gap-x-[30px] text-slate-500 font-roboto text-[13px]'>
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