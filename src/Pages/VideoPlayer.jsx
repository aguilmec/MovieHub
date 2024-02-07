import ReactPlayer from 'react-player';
import { useState } from "react";
import PlayPauseButton from "../Components/PlayPauseButton";

export default function VideoPlayer(){

    const [isVisible, setIsVisible] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);


    return(
        <div onMouseLeave={()=>{setIsVisible(false)}} onMouseEnter={()=>{setIsVisible(true)}} className='mt-[100px] flex col-span-6 col-start-2 place-items-center h-[480px] relative'>
            {isVisible && <PlayPauseButton setIsVisible={setIsVisible} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>}
            <ReactPlayer playing={isPlaying} muted={true} controls={true} width={'100%'} height={'100%'} style={{opacity:'100%', backgroundColor: 'black'}}  url={'http://localhost:3500/movie'}  />
        </div>
    );
};