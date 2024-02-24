import { HeaderContext } from '../Context/HeaderContext';
import GridThumbnail from "./GridThumbnail";
import Linebreak from "./Linebreak";
import { useContext } from 'react';

export default function Grid({ movies, related, setMovie }){

    const { headers } = useContext(HeaderContext);

    function handleClick(movie){
        setMovie(movie);
    };

    return(
        <div className={related ? 'grid gap-y-[20px] grid-cols-4' : 'grid gap-y-[20px] grid-cols-8'}>
            <div className={related ? 'grid grid-cols-4 col-span-4 gap-y-[10px]' : 'grid grid-cols-8 col-span-8 gap-y-[10px]'}>
                {related ? (
                    <div className="flex flex-row justify-between col-span-4">
                        <p className="cursor-default text-white font-bold text-[24px]">Related Movies</p>
                    </div>
                ) : (
                    <div className="flex flex-row col-span-8">
                        <p className="cursor-default text-white font-bold text-[24px] text-nowrap pr-[20px]">{`Explore: ${headers.type}`}</p>
                        <Linebreak />
                        <p className="cursor-default text-white font-bold text-[24px] ml-auto pl-[20px]">{headers.genre}</p>
                    </div>
                )}
                
            </div>
            <div className={related ? 'mx-auto grid col-span-4 w-full grid-cols-4 gap-x-[20px] gap-y-[30px]' : 'mx-auto w-full grid col-span-8 grid-cols-8 gap-x-[20px] gap-y-[30px]'}>
                {movies.map((movie)=>{
                    return( <GridThumbnail related={related} handleClick={handleClick} movie={movie} col-span-2 key={movie._id} id={movie._id} name={movie.name} duration={movie.duration} genre={movie.genre} image={movie.image} language={movie.language} />)
                })}
            </div>
        </div>
    );
};