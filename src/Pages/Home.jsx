import FeaturedSlider from "../Components/FeaturedSlider";
import { UserContext } from "../Context/UserContext";
import GridLoader from "react-spinners/GridLoader";
import Carrousel from "../Components/Carrousel";
import Filters from "../Components/Filters";
import Grid from "../Components/Grid";
import { useContext } from "react"; 
import { useEffect } from "react";
import { useState } from "react";
import Toast from "../Components/Toast";

let movieList = [];
let newMoviesList = [];

export default function Home(){

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [toast, setToast] = useState({visible: false, message:''});

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [filters ,setFilters] = useState({
      genre: '',
      releaseDate: '',
      type: ''
  }); 

  useEffect(()=>{
    async function fetchData(){

      const userVerification = await fetch('http://localhost:3500/verify', {credentials: 'include', withCredentials: true});
      const userData = await userVerification.json();
      if(!userData.error){
        if(!currentUser){
          setCurrentUser({id: userData.id, email: userData.email, });
        }
      }else{
        setCurrentUser(null);
      };

      const movieResponse = await fetch('http://localhost:3500/');
      const movieData = await movieResponse.json();
      movieList = movieData;
      setMovies(movieData);

      const featuredResponse = await fetch('http://localhost:3500/featured');
      const featuredData = await featuredResponse.json();
      setFeatured(featuredData);

      const newMovies = await fetch('http://localhost:3500/new');
      const newMoviesData = await newMovies.json();
      newMoviesList = newMoviesData;
      setNewMovies(newMoviesData);

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
    <div className="relative">
      {loading ? <div className="flex w-full h-screen justify-center items-center"><GridLoader size={16} color="#A70000" speedMultiplier={0.8} /></div> : (
        <>
          <Carrousel featured={featured} toast={toast} setToast={setToast} />
          <div className="mt-[8px]">
            <FeaturedSlider newMoviesList={newMoviesList} setNewMovies={setNewMovies} newMovies={newMovies} />
          </div>
          <div className="grid grid-cols-12 h-full">
              <div className="flex xl:flex-col xl:col-span-2 lg:col-span-10 md:col-span-10 sm:col-span-10 xs:col-span-10 xl:col-start-2 lg:col-start-2 md:col-start-2 sm:col-start-2 xs:col-start-2 h-full ">
                  <Filters filters={filters} setFilters={setFilters} movieList={movieList} setMovies={setMovies} movies={movies} />
              </div>
              <div className="xl:col-span-8 lg:col-span-10 lg:col-start-2 md:col-span-10 md:col-start-2 sm:col-start-2 sm:col-span-10 xs:col-start-2 xs:col-span-10 mb-[45px]">
                  <Grid filters={filters} movies={movies} related={false}/>
              </div>
          </div>
        </>
      )}
      {toast.visible ? <Toast toast={toast} setToast={setToast} /> : null}
    </div>
  );
};