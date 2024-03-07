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
            <div className='flex w-full xl:h-[700px] lg:h-[700px] md:h-[700px] sm:h-[700px] xs:h-[840px] relative gap-x-[20px]'>
                <img className="w-full object-cover ml-auto opacity-30 blur-sm" src={currentFilm.cover} />
                <div className='absolute inset-x-0 inset-y-0 grid grid-cols-12 my-auto gap-x-[20px]'>
                    <div className='items-center grid xl:grid-cols-6 xl:col-span-6 xl:col-start-2 gap-x-[20px] lg:col-span-7 lg:grid-cols-7 lg:col-start-2 md:col-span-9 md:grid-cols-9 md:col-start-2 sm:col-span-9 sm:grid-cols-9 sm:col-start-2 xs:col-span-10 xs:grid-cols-10 xs:col-start-2'>
                        <img className='xl:col-span-2 xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] xs:h-[325px] object-cover xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 xs:w-full mr-auto shadow-3xl lg:col-span-3 md:col-span-4 sm:col-span-4 xs:col-span-6 xs:col-start-3 xl:mt-[0px] xl:mb-[0px] lg:mt-[0px] lg:mb-[0px] md:mt-[0px] md:mb-[0px] sm:mt-[0px] sm:mb-[0px] xs:mt-[100px] xs:mb-[0px] ' src={currentFilm.image}/>
                        <div className='flex xl:absolute lg:absolute md:absolute sm:absolute z-10 w-full inset-y-0 xl:inset-x-0 lg:inset-x-0 md:inset-x-0 sm:inset-x-0 xs:inset-x-0 xs:relative xs:col-span-10'>
                            <div className='flex xl:flex-col lg:flex-col md:flex-col sm:flex-col xs:flex-row justify-between z-20 xl:my-auto lg:my-auto md:my-auto sm:my-auto xs:w-max xl:ml-auto lg:ml-auto md:ml-auto sm:ml-auto xs:ml-auto xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0  xs:mr-auto xl:pr-[50px] lg:pr-[50px] md:pr-[50px] sm:pr-[50px] xs:pr-[0px] gap-y-[15px] xs:gap-x-[30px]'>
                                <button name='button1' onClick={(e)=>{handleSelected(e, 'button2', 'button3', 0)}} className={`${!selected.button1 && 'opacity-10 bg-white'} bg-[#A70000] xl:py-[15px] lg:py-[15px] md:py-[15px] sm:py-[15px] xs:py-[5px] xl:w-[5px] lg:w-[5px] md:w-[5px] sm:w-[5px] xs:w-[35px] xs:gap-x-[20px]`}></button>
                                <button name='button2' onClick={(e)=>{handleSelected(e, 'button1', 'button3', 1)}} className={`${!selected.button2 && 'opacity-10 bg-white'} bg-[#A70000] xl:py-[15px] lg:py-[15px] md:py-[15px] sm:py-[15px] xs:py-[5px] xl:w-[5px] lg:w-[5px] md:w-[5px] sm:w-[5px] xs:w-[35px] xs:gap-x-[20px]`}></button>
                                <button name='button3' onClick={(e)=>{handleSelected(e, 'button1', 'button2', 2)}} className={`${!selected.button3 && 'opacity-10 bg-white'} bg-[#A70000] xl:py-[15px] lg:py-[15px] md:py-[15px] sm:py-[15px] xs:py-[5px] xl:w-[5px] lg:w-[5px] md:w-[5px] sm:w-[5px] xs:w-[35px] xs:gap-x-[20px]`}></button>
                            </div>
                        </div>
                        <div className='xl:col-span-4 lg:col-span-4 flex flex-col xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] xs:h-[360px] justify-between md:col-span-5 sm:col-span-5 xs:col-span-10'>
                            <p className="cursor-default text-white font-bold xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[24px] xs:text-[20px] leading-6 drop-shadow-md">{currentFilm.name}</p>
                            <div className='flex flex-row'>
                                <div className='bg-[#A70000] h-[20px] w-[7px]' />
                                <p className="pl-[10px] cursor-default text-[15px] text-center text-[#828282]">{currentFilm.releaseDate} | {currentFilm.duration} | {currentFilm.language} | {currentFilm.genre}</p>
                            </div>
                            <p className="text-white xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] xs:text-[15px] font-semibold cursor-default drop-shadow-md">{currentFilm.description}</p>
                            <StarRatings rating={currentFilm.rating} starDimension='20px' starRatedColor='#A70000' />
                            <div className='flex flex-row gap-x-[30px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 xs:mx-auto'>
                                <button className="transition-[bg_200,border_200] duration-200 z-20 bg-transparent text-white border-solid border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[102px] h-[30px] py-[1px]"><Link to={`/movie/${currentFilm._id}`} >Watch Now</Link></button>
                                <button onClick={()=>{handleSave()}} className="transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[127px] h-[30px] py-[1px]">Add to playlist</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};
