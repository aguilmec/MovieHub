import { useState } from "react";
import Linebreak from "./Linebreak";

const featuredList = [
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
    },
    {
        name: 'After',
        image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180',
        releaseDate: '2020',
        genre: 'Adventure',
        duration: '1h 45m',
        id:8,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=90&crop=false',
        releaseDate: '2023',
        genre: 'Scifi',
        duration: '2h 5m',
        name: 'Blade Runner 2049',
        id:9,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg',
        releaseDate: '2024',
        genre: 'Scifi',
        duration: '1h 5m',
        name: 'Mage',
        id:10,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_3fd98041-803c-4491-9d4a-a0a1d5533aae.jpg?v=1577693642',
        releaseDate: '2019',
        genre: 'Adventure',
        duration: '2h 35m',
        name: 'Dora the Explorer: The Lost City of Gold',
        id:11,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://static1.showtimes.com/poster/660x980/65-166554.jpg',
        releaseDate: '2024',
        genre: 'Action',
        duration: '3h 1m',
        name: 'Adam Driver: 64',
        id:12,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://img.freepik.com/premium-psd/double-exposure-movie-poster-design_528542-1321.jpg',
        releaseDate: '2020',
        genre: 'Action',
        duration: '3h 1m',
        name: 'Nexus of Wonders',
        id:13,
        language: 'English',
        type: 'movies'
    },
    {
        image: 'https://cdn.cinematerial.com/p/297x/qwctuwuv/bloodshot-indian-movie-poster-md.jpg?v=1579984252',
        releaseDate: '2019',
        genre: 'Action',
        duration: '2h 35m',
        name: 'Bloodshot',
        id:14,
        language: 'English',
        type: 'tv shows'
    },
    {
        image: 'https://pub-static.fotor.com/assets/projects/pages/24bb0a44322b48e38a1405a719cd1d4d/dark-green-suspense-movie-07f41f48f4d04a3dac93ae3007defcef.jpg',
        releaseDate: '2010',
        genre: 'Horror',
        duration: '1h 40m',
        name: 'The Galaxy',
        id:15,
        language: 'English',
        type: 'movies'
    }
    
]

export default function FeaturedSlider(){

    const [featured, setFeatured] = useState(featuredList.filter((movie)=>{
        if(movie.type === 'movies'){
            return true;
        };
    }));

    const [header, setHeader] = useState('Movies');

    function handleFilter(type){
        setFeatured(featuredList.filter((movie)=>{
            if(movie.type === type){
                return true;
            };
        }));
    };

    return(
        <div className="">
            <div className="grid grid-cols-12 mb-[23px]">
                <div className="col-start-2 flex flex-row col-span-10 gap-x-[20px]">
                    <p className="cursor-default text-white font-bold text-[24px] text-nowrap">{header}</p>
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
                    <div className='sticky absolute z-10 w-full h-full w-[80px] left-0 bg-gradient-to-r from-[#1E1E1E] via-transparent' />
                </div>
                {featured.map((movie)=>{
                    return(
                        <div className='transition ease-in-out delay-25 hover:scale-105 mx-auto flex flex-col w-[220px] opacity-60 transition duration-200 hover:opacity-100'>
                            <button className='relative flex w-[220px]'>
                                <img onClick={()=>{/*go to movie page*/}} className='cursor-pointer w-full h-[320px] object-cover shadow-3xl rounded-md' src={movie.image} />
                            </button>
                            <button className={`truncate text-left text-white font-roboto font-semibold text-[15px] mt-[9px] w-full`}>{movie.name}</button>
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