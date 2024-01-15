import Carrousel from "./Carrousel";
import Filters from "./Filters";
import Grid from "./Grid";
import { useState } from "react";
import { HeaderContext } from "../Context/HeaderContext";
import { useEffect } from "react";

const movieList = [
    {
        name: 'After',
        image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180',
        releaseDate: '2020',
        genre: 'Adventure',
        duration: '1h 45m',
        id:0,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=90&crop=false',
        releaseDate: '2023',
        genre: 'Scifi',
        duration: '2h 5m',
        name: 'Blade Runner 2049',
        id:1,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg',
        releaseDate: '2024',
        genre: 'Scifi',
        duration: '1h 5m',
        name: 'Mage',
        id:2,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_3fd98041-803c-4491-9d4a-a0a1d5533aae.jpg?v=1577693642',
        releaseDate: '2019',
        genre: 'Adventure',
        duration: '2h 35m',
        name: 'Dora the Explorer: The Lost City of Gold',
        id:6,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://static1.showtimes.com/poster/660x980/65-166554.jpg',
        releaseDate: '2024',
        genre: 'Action',
        duration: '3h 1m',
        name: 'Adam Driver: 64',
        id:3,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://img.freepik.com/premium-psd/double-exposure-movie-poster-design_528542-1321.jpg',
        releaseDate: '2020',
        genre: 'Action',
        duration: '3h 1m',
        name: 'Nexus of Wonders',
        id:4,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://cdn.cinematerial.com/p/297x/qwctuwuv/bloodshot-indian-movie-poster-md.jpg?v=1579984252',
        releaseDate: '2019',
        genre: 'Action',
        duration: '2h 35m',
        name: 'Bloodshot',
        id:5,
        language: 'English',
        type: 'tv shows'
    },
    {
        image: 'https://pub-static.fotor.com/assets/projects/pages/24bb0a44322b48e38a1405a719cd1d4d/dark-green-suspense-movie-07f41f48f4d04a3dac93ae3007defcef.jpg',
        releaseDate: '2010',
        genre: 'Horror',
        duration: '1h 40m',
        name: 'The Galaxy',
        id:7,
        language: 'English',
        type: 'movies'
    }
];

const featuredFilms = [
    {
        name: 'Fury',
        releaseDate: '2017',
        duration: '1h 59m',
        language: 'English',
        genre: 'Adventure',
        image: 'https://imgs.hipertextual.com/wp-content/uploads/2014/12/fury__2014__brad-pitt1.jpg',
        description: 'Don "Wardaddy" Collier, a battle-hardened staff sergeant in the U.S. Second Armored Division, commands an M4 Sherman nicknamed Fury whose crew of gunner Boyd "Bible" Swan, loader Grady "Coon-Ass" Travis, driver Trini "Gordo" Garcia, and assistant driver–bow gunner "Red" have been together since the North African campaign.',
    },
    {
        name: 'Pirates of the Caribbean: Dead Men Tell no Tales',
        releaseDate: '2020',
        duration: '2h 5m',
        language: 'English',
        genre: 'Adventure',
        image: 'https://d23.com/app/uploads/2017/05/1180w-600h_052417_pirates-8-stories-from-the-crew.jpg',
        description: 'Captain Jack Sparrow searches for the Trident of Poseidon to defeat Armando Salazar, who is determined to kill every pirate at sea and take revenge on Sparrow for imprisoning him and his crew of ghosts in the Devils Triangle.',
    },
    {
        name: 'District 9',
        releaseDate: '2016',
        duration: '1h 51m',
        language: 'English',
        genre: 'Action',
        description: 'In 1982, a massive star ship bearing a bedraggled alien population, nicknamed "The Prawns," appeared over Johannesburg, South Africa. Twenty-eight years later, the initial welcome by the human population has faded. The refugee camp where the aliens were located has deteriorated into a militarized ghetto called District 9, where they are confined and exploited in squalor.',
        image: 'https://www.moriareviews.com/rongulator/wp-content/uploads/District-9-2009-1.jpg'
    }
];

export default function Layout(){

    const [movies, setMovies] = useState(movieList);
    const [headers, setHeaders] = useState({
        genre: 'All',
        type: 'Movies & TV Shows'
    });

    const [filters ,setFilters] = useState({
        genre: '',
        releaseDate: '',
        type: ''
    });

    useEffect(()=>{
        setMovies(movieUpdater());
    },[filters]);

    function filterByType(newMovieList){
        if(filters.type === 'Movies & TV Shows'){
            newMovieList = filterByGenre([...movieList]);
            return newMovieList;
        }else{
            return(newMovieList.filter((movie)=>{
                if(movie.type === filters.type.toLowerCase()){
                    return true;
                }else{
                    return false;
                };
            }));
        }
        
    };

    function filterByGenre(newMovieList){
        if(filters.genre === 'All'){
            newMovieList = filterByType([...movieList]);
            return newMovieList;
        }else{
            return(newMovieList.filter((movie)=>{
                if(movie.genre === filters.genre){
                    return true;
                }else{
                    return false;
                };
            }));
        }
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
        <div className="flex flex-col gap-y-[20px] pb-[1000px]">
            <HeaderContext.Provider value={{ headers, setHeaders }}>
                <Carrousel featuredFilms={featuredFilms} />
                <div className="grid grid-cols-12 h-full px-[50px]">
                    <div className="col-span-3 h-full">
                        <Filters filters={filters} setFilters={setFilters} movieList={movieList} setMovies={setMovies} movies={movies} />
                    </div>
                    <div className="col-span-9 pr-[70px]">
                        <Grid filters={filters} movies={movies} />
                    </div>
                </div>
            </HeaderContext.Provider>  
        </div>
    );
};