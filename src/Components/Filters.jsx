import { HeaderContext } from '../Context/HeaderContext';
import { useContext, useState } from 'react';
import GenreFilter from './GenreFilter';

export default function Filters({ movies, setMovies, movieList, filters, setFilters }){

    const { headers, setHeaders } = useContext(HeaderContext);
    const [selected, setSelected] = useState({
        'Movies & TV Shows': true,
        'Movies':false,
        'TV Shows': false
    });

    function handleFilter(value, key1, key2){
        setSelected({
            [value]: true,
            [key1]: false,
            [key2]: false
        });

        setFilters({
            ...filters,
            type: value
        });
    };

    return(
        <div className="flex font-roboto tracking-wide flex-col w-full text-white gap-y-[20px] mx-auto">
            <div className="flex flex-col w-full gap-y-[10px]">
                <p className="cursor-default text-white font-bold text-[24px]">Filters</p>
            </div>
            <p className='cursor-default font-semibold text-[15px] xl:mb-[10px] lg:mb-[0px] md:mb-[0px] sm:mb-[0px] xs:mb-[0px]'>Genres</p>
            <div className='flex xl:flex-col lg:flex-row md:flex-row sm:flex-row xs:flex-row xl:gap-y-[8px] lg:justify-between md:justify-between sm:justify-between xs:flex-wrap xs:justify-between'>
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies}  type={'All'} checked={true} />
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies} type={'Action'} checked={false} />
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies} type={'Drama'} checked={false} />
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies} type={'Comedy'} checked={false} />
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies} type={'Horror'} checked={false} />
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies} type={'Scifi'} checked={false} />           
            </div>
            <div className='flex flex-col gap-y-[8px] lg:mb-[30px] md:mb-[30px] sm:mb-[30px] xs:mb-[30px]'>
                <p className='cursor-default font-semibold text-[15px] mb-[10px]'>Type</p>
                <div className='w-full gap-x-[20px] grid xl:grid-cols-2 lg:grid-cols-10 md:grid-cols-7 sm:grid-cols-5 xs:grid-cols-4 justify-between gap-y-[13px]'>
                    <button onClick={()=>{
                        setHeaders({...headers, type: 'Movies'});
                        handleFilter('Movies', 'TV Shows', 'Movies & TV Shows');
                        }} className={`${selected['Movies'] ? 'bg-[#A70000]' : 'bg-transparent border-solid border-[1px] border-white'} transition-[bg_200-border_200] duration-200 z-20 text-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[12px] font-semibold h-[30px] py-[1px] `}>
                        Movies
                    </button>
                    <button onClick={()=>{
                        setHeaders({...headers, type: 'TV Shows'});
                        handleFilter('TV Shows', 'Movies', 'Movies & TV Shows');
                        }} className={`${selected['TV Shows'] ? 'bg-[#A70000]' : 'bg-transparent border-solid border-[1px] border-white'} transition-[bg_200-border_200] duration-200 z-20 text-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[12px] font-semibold h-[30px] py-[1px]`}>
                        TV Shows
                    </button>
                    <button onClick={()=>{
                        setHeaders({...headers, type: 'Movies & TV Shows'});
                        handleFilter('Movies & TV Shows', 'Movies', 'Tv Shows');
                        }} className={`${selected['Movies & TV Shows'] ? 'bg-[#A70000]' : 'bg-transparent border-solid border-[1px] border-white'} transition-[bg_200-border_200] duration-200 z-20 text-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[12px] font-semibold h-[30px] py-[1px]`}>
                        All
                    </button>
                </div>
            </div>
        </div>
    );
};