import Carrousel from "../Components/Carrousel";
import Filters from "../Components/Filters";
import Grid from "../Components/Grid";
import { useState } from "react";
import { useEffect } from "react";
import FeaturedSlider from "../Components/FeaturedSlider";
import GridLoader from "react-spinners/GridLoader";

let movieList = [];

let featuredFilms = [];

export default function Home(){

  const [movies, setMovies] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters ,setFilters] = useState({
      genre: '',
      releaseDate: '',
      type: ''
  });

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('http://localhost:3500/');
      const data = await response.json();
      movieList = data.movies;
      data.featured.map((featuredMovie)=>{
        data.movies.forEach((movie)=>{
          if(movie._id === featuredMovie.movieId){
              featuredFilms.push(movie);
          };
        });
      });
      setMovies(data.movies);
      setFeatured(featuredFilms);
      setLoading(false);
    };
    fetchData();
  },[]);

  useEffect(()=>{
      setMovies(movieUpdater());
  },[filters]);

  function filterByType(newMovieList) {
      if (filters.type === 'Movies & TV Shows') {
        if (filters.genre === 'All') {
          return newMovieList;
        } else {
          return filterByGenre(newMovieList);
        };
      } else {
        if (filters.type) {
          return newMovieList.filter((movie) => {
            if (movie.type === filters.type.toLowerCase()) {
              return true;
            } else {
              return false;
            };
          });
        } else {
          return newMovieList;
        };
      };
    };
    
    function filterByGenre(newMovieList) {
      if (filters.genre === 'All') {
        return filterByType(newMovieList);
      } else {
        if (filters.genre) {
          return newMovieList.filter((movie) => {
            if (movie.genre === filters.genre) {
              return true;
            } else {
              return false;
            };
          });
        } else {
          return newMovieList;
        };
      };
    };

  function movieUpdater(){
      let newMovieList = [...movieList];
      if(!filters.genre && !filters.type){
          return newMovieList;
      }else{
          if(filters.type){
              newMovieList = filterByType(newMovieList);
          };
          if(filters.genre){
              newMovieList = filterByGenre(newMovieList);
          };
          return newMovieList;
      };
  };

  return(
    <>
      {loading ? <div className="flex w-full h-screen justify-center items-center"><GridLoader size={16} color="#A70000" speedMultiplier={0.8} /></div> : (
        <>
          <Carrousel featured={featured} />
          <div className="mt-[8px]">
            <FeaturedSlider />
          </div>
          <div className="grid grid-cols-12 h-full">
              <div className="flex col-span-2 col-start-2 h-full shrink-0">
                  <Filters filters={filters} setFilters={setFilters} movieList={movieList} setMovies={setMovies} movies={movies} />
              </div>
              <div className="col-span-8">
                  <Grid filters={filters} movies={movies} related={false}/>
              </div>
          </div>
        </>
      )}
    </>
                
        
  );
};





/*

export default function Home(){

  const {headers, setHeaders} = useContext(HeaderContext);

    const [movies, setMovies] = useState(movieList);

    const [filters ,setFilters] = useState({
        genre: '',
        releaseDate: '',
        type: ''
    });

    useEffect(()=>{
        setMovies(movieUpdater());
    },[filters]);

    function filterByType(newMovieList) {
        if (filters.type === 'Movies & TV Shows') {
          if (filters.genre === 'All') {
            return newMovieList;
          } else {
            return filterByGenre(newMovieList);
          };
        } else {
          if (filters.type) {
            return newMovieList.filter((movie) => {
              if (movie.type === filters.type.toLowerCase()) {
                return true;
              } else {
                return false;
              };
            });
          } else {
            return newMovieList;
          };
        };
      };
      
      function filterByGenre(newMovieList) {
        if (filters.genre === 'All') {
          return filterByType(newMovieList);
        } else {
          if (filters.genre) {
            return newMovieList.filter((movie) => {
              if (movie.genre === filters.genre) {
                return true;
              } else {
                return false;
              };
            });
          } else {
            return newMovieList;
          };
        };
      };

    function movieUpdater(){
        let newMovieList = [...movieList];
        if(!filters.genre && !filters.type){
            return newMovieList;
        }else{
            if(filters.type){
                newMovieList = filterByType(newMovieList);
            };
            if(filters.genre){
                newMovieList = filterByGenre(newMovieList);
            };
            return newMovieList;
        };
    };

    return(
        <div className="flex flex-col gap-y-[20px] pb-[75px]">
          <Carrousel featuredFilms={featuredFilms} />
          <div className="grid grid-cols-12 h-full px-[100px]">
              <div className="flex col-span-3 h-full shrink-0">
                  <Filters filters={filters} setFilters={setFilters} movieList={movieList} setMovies={setMovies} movies={movies} />
              </div>
              <div className="col-span-9 pr-[70px]">
                  <Grid filters={filters} movies={movies} related={false}/>
              </div>
          </div>
        </div>
    );
};*/