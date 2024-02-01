import { FaPlay } from "react-icons/fa";

export default function PlayPauseButton({setIsPlaying, isPlaying, setIsVisible}){

    function handleClick(){
        setIsPlaying(!isPlaying);
        setTimeout(()=>{
            setIsVisible(false);
        },2500);
    };

    return(
        <div className="rounded-full flex bg-[rgba(0,0,0,0.7)] opacity-65 h-[100px] w-[100px] text-[28px] transition duration-300 hover:opacity-80 z-10">
            <button onClick={handleClick} className="flex h-full w-full cursor-pointer rounded-full">
                <FaPlay className="text-orange-500 mx-auto my-auto text-red-800" />
            </button>
        </div>
    );
};