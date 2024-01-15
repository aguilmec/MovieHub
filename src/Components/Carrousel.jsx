import Navbar from './Navbar';
import { useState } from 'react';

export default function Carrousel({ featuredFilms }){
    
    const [currentFilm, setCurrentFilm] = useState(featuredFilms[0]);
    const [selected, setSelected] = useState({
        button1: true,
        button2: false,
        button3:false,
    });

    function handleSelected(e, key1, key2, index){
        setCurrentFilm(featuredFilms[index]);
        setSelected({
            [key1]:false,
            [key2]:false,
            [e.target.name]:true});
    };

    return(
        <div className="font-roboto flex flex-col w-full relative">
            <Navbar />
            <div className='flex w-full h-[500px] relative'>
                <div  className='flex absolute z-10 w-full h-[100px] bottom-0 bg-gradient-to-b  from-transparent via-transparent to-[#1E1E1E]'>
                    <div className='flex flex-row justify-between z-20 w-[150px] mx-auto mt-auto h-[7px]'>
                        <button name='button1' onClick={(e)=>{handleSelected(e, 'button2', 'button3', 0)}} className={`${!selected.button1 && 'opacity-10'} bg-white px-[15px] rounded-md`}></button>
                        <button name='button2' onClick={(e)=>{handleSelected(e, 'button1', 'button3', 1)}} className={`${!selected.button2 && 'opacity-10'} bg-white px-[15px] rounded-md`}></button>
                        <button name='button3' onClick={(e)=>{handleSelected(e, 'button1', 'button2', 2)}} className={`${!selected.button3 && 'opacity-10'} bg-white px-[15px] rounded-md`}></button>
                    </div>
                </div>
                <div className='absolute bg-gradient-to-r from-black via-black h-full w-9/12' />
                <img className="w-8/12 object-cover ml-auto" src={currentFilm.image} />
            </div>
            <div className="flex flex-col absolute my-[80px] px-[115px] w-5/12 gap-y-[25px]">
                <div className="flex flex-col gap-y-[10px]">
                    <p className="cursor-default text-white font-bold text-[24px] leading-6">{currentFilm.name}</p>
                    <div className="text-white">
                        <p className="cursor-default">{currentFilm.releaseDate} | {currentFilm.duration} | {currentFilm.language} | {currentFilm.genre}</p>
                    </div>
                </div>
                <p className="text-white cursor-default">{currentFilm.description}</p>
                <div className="cursor-default text-white">
                    Rating
                </div>
                <button className=" z-20 bg-orange-500 rounded-xl w-[90px] text-white py-[1px]">Watch</button>
            </div>
        </div>
    );
};