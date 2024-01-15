import GridThumbnail from "./GridThumbnail";
import { useContext } from 'react';
import { HeaderContext } from '../Context/HeaderContext';

export default function Grid({ movies }){

    const { headers } = useContext(HeaderContext);


    return(
        <div className="flex flex-col gap-y-[20px]">
            <div className="flex flex-col w-full gap-y-[10px]">
                <div className="flex flex-row justify-between">
                    <p className="cursor-default text-white font-bold text-[24px]">{headers.type}</p>
                    <p className="cursor-default text-white font-bold text-[24px]">{headers.genre}</p>
                </div>
                <div className="h-[1px] bg-orange-500 w-12/12 opacity-25"></div>
            </div>
            <div className="mx-auto grid grid-cols-4 gap-x-[5px] gap-y-[30px]">
                {movies.map((movie)=>{
                    return( <GridThumbnail key={movie.id} name={movie.name} duration={movie.duration} genre={movie.genre} image={movie.image} language={movie.language} />)
                })}
            </div>
        </div>
    );
}