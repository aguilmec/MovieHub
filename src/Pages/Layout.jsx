import Grid from "../Components/Grid"
import MovieInfo from "./MovieInfo"
import VideoPlayer from "./VideoPlayer"

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


export default function Layout(){
    return(
        <div className="grid grid-cols-12 gap-y-[45px]">
            <div className="flex col-span-12 h-[550px]">
                <VideoPlayer />
            </div>
            <div className="col-span-2" />
            <div className="grid col-span-8 ">
                <MovieInfo />
            </div>
            <div className="col-span-2" />
            <div className="col-span-2" />
            <div className="col-span-8">
                <Grid movies={movieList} related={true} genre={'Drama'} />
            </div>
            <div className="col-span-2" />
        </div>
    )
}