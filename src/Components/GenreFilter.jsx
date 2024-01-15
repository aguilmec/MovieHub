import { useContext } from 'react';
import { HeaderContext } from '../Context/HeaderContext';

export default function GenreFilter({ type, movies, setMovies, movieList, filters, setFilters }){

    const { setHeaders, headers } = useContext(HeaderContext);

    function handleToggle(e){

        setHeaders({
            ...headers,
            genre: e.target.value
        });
        
        setFilters({
            ...filters,
            genre: e.target.value
        });
    };

    return(
        <div className="flex flex-row justify-between px-[40px]">
            <p className="cursor-default text-[15px] font-semibold">{type}</p>
            <input name='genre' value={type} onChange={(e)=>{handleToggle(e)}} className="cursor-pointer" type="radio" />
        </div>
    );
};