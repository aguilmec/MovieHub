import GenreFilter from './GenreFilter';
import { useContext } from 'react';
import { HeaderContext } from '../Context/HeaderContext';

let defaultFilter = 'Movies & TV Shows';

export default function Filters({ movies, setMovies, movieList, filters, setFilters }){

    const { headers, setHeaders } = useContext(HeaderContext);

    function handleFilter(value){
        setFilters({
            ...filters,
            type: value
        });
    };

    return(
        <div className="flex font-roboto tracking-wide flex-col min-w-9/12 px-[50px] text-white gap-y-[20px] mx-auto">
            <div className="flex flex-col w-full gap-y-[10px]">
                <p className="cursor-default text-white font-bold text-[24px]">FILTERS</p>
                <div className="h-[1px] bg-orange-500 w-12/12 opacity-25"></div>
            </div>
            <div className='flex flex-col gap-y-[8px]'>
                <p className='cursor-default font-semibold text-[15px] mb-[10px]'>Genres</p>
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies}  type={'All'} checked={true} />
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies} type={'Action'} checked={false} />
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies} type={'Drama'} checked={false} />
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies} type={'Comedy'} checked={false} />
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies} type={'Horror'} checked={false} />
                <GenreFilter setFilters={setFilters} filters={filters} movieList={movieList} movies={movies} setMovies={setMovies} type={'Scifi'} checked={false} />           
            </div>
            <div className="h-[1px] bg-orange-500 w-12/12 opacity-25"></div>
            <div className='flex flex-col gap-y-[8px]'>
                <p className='cursor-default font-semibold text-[15px] mb-[10px]'>Release date</p>
                <input className='mx-auto' type='range' />
            </div>
            <div className="h-[1px] bg-orange-500 w-12/12 opacity-25"></div>
            <div className='flex flex-col gap-y-[8px]'>
                <p className='cursor-default font-semibold text-[15px] mb-[10px]'>Type</p>
                <div className='flex flex-row gap-x-[30px]'>
                    <button onClick={()=>{
                        setHeaders({...headers, type: 'Movies'});
                        handleFilter('Movies');
                        }} className='text-[15px] bg-orange-500 font-semibold px-[15px] py-[2px] transition duration-200 text-white rounded-2xl hover:bg-white hover:text-orange-500'>
                        Movies
                    </button>
                    <button onClick={()=>{
                        setHeaders({...headers, type: 'TV Shows'});
                        handleFilter('TV Shows');
                        }} className='text-[15px] bg-orange-500 font-semibold px-[15px] py-[2px] transition duration-200 text-white rounded-2xl hover:bg-white hover:text-orange-500'>
                        TV Shows
                    </button>
                    <button onClick={()=>{
                        setHeaders({...headers, type: 'Movies & TV Shows'});
                        handleFilter('Movies & TV Shows');
                        }} className='text-[15px] bg-orange-500 font-semibold px-[15px] py-[2px] transition duration-200 text-white rounded-2xl hover:bg-white hover:text-orange-500'>
                        All
                    </button>
                </div>
            </div>
        </div>
    );
};