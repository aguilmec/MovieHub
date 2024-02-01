import ReactPlayer from 'react-player';
import { useState } from "react";
import PlayPauseButton from "../Components/PlayPauseButton";

export default function VideoPlayer(){

    const [isVisible, setIsVisible] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <div className="h-full w-full relative flex" onMouseLeave={()=>{setIsVisible(false)}} onMouseEnter={()=>{setIsVisible(true)}}>
            <div className="absolute flex z-10 inset-0 items-center justify-center">
                {isVisible && <PlayPauseButton setIsVisible={setIsVisible} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>}
                <div className="absolute w-full h-full">
                    <ReactPlayer playing={isPlaying} muted={true} controls={true} style={{objectFit:'contain', position:'absolute', backgroundColor: 'black'}} width='100%' height='100%' url={'http://localhost:3500/movie'}  />
                </div>
            </div>
        </div>
    );
};