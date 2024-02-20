import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react';

export default function Carrousel({ featured, toast, setToast }){
    
    const [currentFilm, setCurrentFilm] = useState(featured[0]);
    const [selected, setSelected] = useState({
        button1: true,
        button2: false,
        button3:false,
    });

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSelected(e, key1, key2, index){
        setCurrentFilm(featured[index]);
        setSelected({[key1]: false, [key2]: false, [e.target.name]: true });
    };

    async function handleSave(){
        if(currentUser){
            const verify = await fetch('/verify',{withCredentials: true,  credentials: 'include'});
            if(verify.status === 200){
                const response = await fetch('http://localhost:3500/saveMovie',{
                    method: 'POST',
                    body: JSON.stringify({movieId: currentFilm._id, userId: currentUser.id}),
                    credentials: 'include',
                    withCredentials: true,
                    headers: {'Content-Type':'application/json'}
                });
                if(response.status ===200){
                    setToast({visible: true, message: 'Movie saved successfully!'});
                }else{
                    setToast({visible: true, message: 'There has been an error, please try again.'});
                }
            }else{
                setToast({visible: true, message: 'Could not perform this operation, plese log in.'});
            }
        }else{
            setToast({visible: true, message: 'You need to log in in in order to perform this operation.'})
        };
    };

    return(
        <div className="font-roboto flex flex-col w-full relative">
            <div className='flex w-full h-[700px] relative gap-x-[20px]'>
                <img className="w-full object-cover ml-auto opacity-30 blur-sm" src={currentFilm.cover} />
                <div className='absolute inset-x-0 inset-y-0 grid grid-cols-12 my-auto gap-x-[20px]'>
                    <div id='a' className='items-center grid grid-cols-6 col-span-6 col-start-2 gap-x-[20px]'>
                        <img className='col-span-2 h-[400px] object-cover w-11/12 mr-auto shadow-3xl' src={currentFilm.image}/>
                        <div className='col-span-4 flex flex-col h-[400px] justify-between'>
                            <p className="cursor-default text-white font-bold text-[24px] leading-6 drop-shadow-md">{currentFilm.name}</p>
                            <div className='flex flex-row'>
                                <div className='bg-[#A70000]  h-[20px] w-[7px]' />
                                <p className="pl-[10px] cursor-default text-[15px] text-center text-[#828282]">{currentFilm.releaseDate} | {currentFilm.duration} | {currentFilm.language} | {currentFilm.genre}</p>
                            </div>
                            <p className="text-white text-[15px] font-semibold cursor-default drop-shadow-md">{currentFilm.description}</p>
                            <StarRatings rating={currentFilm.rating} starDimension='20px' starRatedColor='#A70000' />
                            <div className='flex flex-row gap-x-[30px]'>
                                <button className="transition-[bg_200,border_200] duration-200 z-20 bg-transparent text-white border-solid border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[102px] h-[30px] py-[1px]"><Link to={`/movie/${currentFilm._id}`} >Watch Now</Link></button>
                                <button onClick={()=>{handleSave()}} className="transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[127px] h-[30px] py-[1px]">Add to playlist</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className='flex absolute z-10 w-full inset-y-0 inset-x-0'>
                    <div className='flex flex-col justify-between z-20 my-auto ml-auto pr-[50px] gap-y-[15px]'>
                        <button name='button1' onClick={(e)=>{handleSelected(e, 'button2', 'button3', 0)}} className={`${!selected.button1 && 'opacity-10 bg-white'} bg-[#A70000] py-[15px] w-[5px]`}></button>
                        <button name='button2' onClick={(e)=>{handleSelected(e, 'button1', 'button3', 1)}} className={`${!selected.button2 && 'opacity-10 bg-white'} bg-[#A70000] py-[15px] w-[5px]`}></button>
                        <button name='button3' onClick={(e)=>{handleSelected(e, 'button1', 'button2', 2)}} className={`${!selected.button3 && 'opacity-10 bg-white'} bg-[#A70000] py-[15px] w-[5px]`}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
