import VideoPlayer from '../Components/VideoPlayer';
import GridLoader from 'react-spinners/GridLoader';
import MovieInfo from '../Components/MovieInfo';
import { useParams } from "react-router-dom";
import Grid from "../Components/Grid";
import { useEffect } from 'react';
import { useState } from 'react';

export default function Layout(){

    const {id} = useParams();
    const [movie, setMovie] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`http://localhost:3500/movie/details/${id}`);
            const data = await response.json();

            const relatedMovies = await fetch(`http://localhost:3500/movies/${data.genre}`);
            const relatedMoviesData = await relatedMovies.json();
            setMovieList(relatedMoviesData); 

            setMovie(data);
            setLoading(false);
        };
        fetchData();
    },[]);

    return(
        <>
            {loading ? <div className="flex w-full h-screen justify-center items-center"><GridLoader size={16} color="#A70000" speedMultiplier={0.8} /></div> 
                :  <div className="relative grid grid-cols-12 col-span-12 gap-x-[20px]">
                    <div className="absolute inset-x-0 col-span-12">
                        <div id="b" className='w-full h-[606px] opacity-30 flex'>
                            <img className='w-full h-full object-cover blur-sm' src={movie.cover} />
                        </div>
                    </div>
                    <div className="xl:col-span-6 xl:col-start-2 lg:col-span-10 lg:col-start-2 md:col-span-10 md:col-start-2 sm:col-span-10 sm:col-start-2 xs:col-span-10 xs:col-start-2">
                        <VideoPlayer url = {`http://localhost:3500/movie/${id}`} />
                        <div className="col-span-6 col-start-2 mt-[10px]">
                            <MovieInfo movie={ movie } />
                        </div>
                    </div>
                    <div className="mb-[45px] xl:col-span-4 xl:col-start-8 lg:col-span-10 lg:col-start-2 md:col-span-10 md:col-start-2 sm:col-span-10 sm:col-start-2 xs:col-span-10 xs:col-start-2 xl:mt-[100px] lg:mt-[30px] md:mt-[30px] sm:mt-[30px] xs:mt-[30px] xl:h-[900px] lg:h-max md:h-max sm:h-max xs:h-max overflow-y-auto scrollbar scrollbar-w-[3px] scrollbar-h-[2px] scrollbar-thumb-[#A7000055] scrollbar-opacity-50">
                        <Grid setMovie={setMovie} movies={movieList} related={true} genre={'Drama'} />
                    </div>
            </div> }
        </>
    );
};
