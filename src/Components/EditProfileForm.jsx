import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Context/UserContext';

const inputConfig = {'email':{type: 'text', placeholder: 'email@email.com'}, 'password':{type: 'password', placeholder: 'password...'}};
const initialValue = {current: '', new: '', confirmation: ''};

export default function EditProfileForm({ user, toast, setToast }){
    
    const [newInformation, setNewInformation] = useState(initialValue);
    const [element, setElement] = useState('email');

    const { currentUser, setCurrentUser } = useContext(UserContext);

    function handleChange(e){
        setNewInformation({...newInformation, [e.target.name]: e.target.value});
    };

    function handleClick(value){
        setNewInformation(initialValue);
        setElement(value);
    };

    async function handleSubmit(){
        const inputsMatch = validateInputs();
        if(inputsMatch){
            const options = {
                withCredentials: true,
                credentials: 'include',
                body: JSON.stringify({element: element, current: newInformation.current, newValue: newInformation.new, id: user._id}),
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
            };
            try{
                if(element === 'email'){
                    const response = await fetch('http://localhost:3500/update/email', options);
                    setCurrentUser({...currentUser, email: newInformation.new});
                }else{
                    const response = await fetch('http://localhost:3500/update/password', options);
                }
                setToast({visible: true, message: 'Profile updated successfully!'});
            }catch(error){
                setToast({visible: true, message: 'There has been an error performing this operation!'});
            }
        }else{
            setToast({visible: true, message: `The ${element}s dont match!`});
        }
    };

    /*function checkEmail(){
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailPattern.test(str);
    };*/

    function validateInputs(){
        return newInformation.new === newInformation.confirmation;
    };

    return(
        <div className="grid col-span-10 col-start-1 grid-cols-10 pt-[55px]">
            <div className="grid grid-cols-7 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 xs:col-span-10 mb-[45px] h-full">
                <div className="flex xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-7 xs:col-span-4 xl:col-start-2 lg:col-start-2 md:col-start-2 sm:col-start-2 xs:col-start-2">
                    <div className='bg-[#A70000] xl:mt-[9px] lg:mt-[9px] md:mt-[9px] sm:mt-[6px] xs:mt-[6px] h-[20px] w-[7px]' />
                    <p className="xl:pl-[10px] lg:pl-[10px] md:pl-[10px] sm:pl-[5px] xs:pl-[5px] cursor-default font-bold text-center text-white xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[20px] xs:text-[20px]">Your Profile</p>
                </div>
                <div className="flex xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-3 xs:col-span-7 xl:flex-col lg:flex-col md:flex-col sm:flex-col xs:flex-row xl:col-start-3 lg:col-start-3 md:col-start-3 sm:col-start-3 xs:col-start-2 my-[auto] gap-y-[40px] h-max xs:gap-x-[30px]">
                    <button onClick={()=>{handleClick('email')}} className="transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid xl:w-full lg:w-full md:w-full sm:w-full xs:w-max  border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold xl:w-[127px] lg:w-[127px] md:w-[127px] sm:w-[127px] xs:w-[95px] xl:h-[30px] lg:h-[30px] md:h-[30px] sm:h-[30px] xs:h-[26px] py-[1px]" >Email</button>
                    <button onClick={()=>{handleClick('password')}} className="transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid xl:w-full lg:w-full md:w-full sm:w-full xs:w-max  border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold xl:w-[127px] lg:w-[127px] md:w-[127px] sm:w-[127px] xs:w-[95px] xl:h-[30px] lg:h-[30px] md:h-[30px] sm:h-[30px] xs:h-[26px] py-[1px]" >Password</button>
                    <button className="transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid xl:w-full lg:w-full md:w-full sm:w-full xs:w-max  border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold xl:w-[127px] lg:w-[127px] md:w-[127px] sm:w-[127px] xs:w-[95px] xl:h-[30px] lg:h-[30px] md:h-[30px] sm:h-[30px] xs:h-[26px] py-[1px]" >Delete</button>
                </div>
            </div>
            <div className="h-full bg-[#A70000] w-[1px] opacity-70 col-start-5 my-auto xl:visible lg:visible md:visible sm:visible xs:"></div>
            <div className="grid grid-cols-7 xl:col-span-5 lg:col-span-4 md:col-span-4 sm:col-span-4 xs:col-span-10 mb-[45px] h-full xl:mt-[0] lg:mt-[0] md:mt-[0] sm:mt-[0] xs:mt-[25px]">
                <div className="flex xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-7 xs:col-span-4 xl:col-start-1 lg:col-start-1 md:col-start-1 sm:col-start-1 xs:col-start-2 lg:col-start-2 md:col-start-2 xs:col-start-2">
                    <div className='bg-[#A70000] xl:mt-[9px] lg:mt-[9px] md:mt-[9px] sm:mt-[6px] xs:mt-[6px] h-[20px] w-[7px]' />
                    <p className="xl:pl-[10px] lg:pl-[10px] md:pl-[10px] sm:pl-[5px] xs:pl-[5px] cursor-default font-bold text-center text-white xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[20px] xs:text-[20px]">Edit Profile</p>
                </div>
                <form className="col-span-7 grid grid-cols-5 xl:col-start-1 lg:col-start-1 md:col-start-1 sm:col-start-1 xs:col-start-2 gap-y-[40px] xl:mb-[0px] lg:mb-[0px] md:mb-[0px] sm:mb-[0px] xs:mb-[20px]">
                    <p className="col-span-2 xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[14px] xs:text-[13px] text-white font-semibold my-auto">{element === 'email' ? 'Email' : 'Password'}</p>
                    <input name="current" value={newInformation.current} onChange={(e)=>{handleChange(e)}} className="col-span-3 xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[13px] bg-opacity-40 bg-[#989898] xl:h-[38px] lg:h-[38px] md:h-[30px] sm:h-[30px] xs:h-[28px] border-r-0 text-slate-200 xl:pl-[15px] lg:pl-[15px] md:pl-[13px] sm:pl-[12px] xs:pl-[8px] py-[5px] text-[D9D9D9]" type={inputConfig[element].type} placeholder={inputConfig[element].placeholder} />
                    <p className="col-span-2 xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[14px] xs:text-[13px] text-white font-semibold my-auto">New {element}</p>
                    <input name="new" value={newInformation.new} onChange={(e)=>{handleChange(e)}} className="col-span-3 xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[13px] bg-opacity-40 bg-[#989898] xl:h-[38px] lg:h-[38px] md:h-[30px] sm:h-[30px] xs:h-[28px] border-r-0 text-slate-200 xl:pl-[15px] lg:pl-[15px] md:pl-[13px] sm:pl-[12px] xs:pl-[8px] py-[5px] text-[D9D9D9]" type={inputConfig[element].type} placeholder={inputConfig[element].placeholder} />
                    <p className="col-span-2 xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[14px] xs:text-[13px] text-white font-semibold my-auto">Confirm {element}</p>
                    <input name="confirmation" value={newInformation.confirmation} onChange={(e)=>{handleChange(e)}} className="col-span-3 xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[13px] bg-opacity-40 bg-[#989898] xl:h-[38px] lg:h-[38px] md:h-[30px] sm:h-[30px] xs:h-[28px] border-r-0 text-slate-200 xl:pl-[15px] lg:pl-[15px] md:pl-[13px] sm:pl-[12px] xs:pl-[8px] py-[5px] text-[D9D9D9]" type={inputConfig[element].type} placeholder={inputConfig[element].placeholder} />
                </form>
            </div>
            <button onClick={()=>{handleSubmit()}} className="mt-[25px] xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 xs:col-span-3 xl:col-start-8 lg:col-start-8 md:col-start-7 sm:col-start-7 xs:col-start-5 transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid w-full border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[127px] h-[30px] py-[1px]" >Save Changes</button>
            
            
        </div>
        
    );
};

/*<div className="grid col-span-10 col-start-1 grid-cols-10">
            <div className="grid grid-cols-10 col-span-10 mb-[45px] mt-[40px]">
                <div className="flex col-span-2 col-start-2">
                    <div className='bg-[#A70000] my-auto h-[20px] w-[7px]' />
                    <p className="xl:pl-[10px] lg:pl-[10px] md:pl-[10px] sm:pl-[5px] my-auto cursor-default font-bold text-center text-white xl:text-[24px] lg:text-[24px] md:text-[18px] sm:text-[16px]">Your Profile</p>
                </div>
                <div className="flex col-span-2 col-start-5">
                    <div className='bg-[#A70000] my-auto h-[20px] w-[7px]' />
                    <p className="xl:pl-[10px] lg:pl-[10px] md:pl-[10px] sm:pl-[5px] my-auto cursor-default font-bold text-center text-white xl:text-[24px] lg:text-[24px] md:text-[18px] sm:text-[16px]">Edit Profile</p>
                </div>
            </div>
            <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 flex flex-col xl:col-start-2 lg:col-start-2 md:col-start-2 sm:col-start-2 my-[auto] gap-y-[40px] h-max">
                <button onClick={()=>{handleClick('email')}} className="transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid w-full border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[127px] h-[30px] py-[1px]" >Email</button>
                <button onClick={()=>{handleClick('password')}} className="transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid w-full border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[127px] h-[30px] py-[1px]" >Password</button>
                <button className="transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid w-full border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[127px] h-[30px] py-[1px]" >Delete</button>
            </div>
            <div className="h-full bg-[#A70000] w-[1px] opacity-70 col-start-4"></div>
            <form className="col-span-5 grid grid-cols-5 col-start-5 gap-y-[40px] mb-[40px]">
                <p className="col-span-2 text-[15px] text-white font-semibold my-auto">{element === 'email' ? 'Email' : 'Password'}</p>
                <input name="current" value={newInformation.current} onChange={(e)=>{handleChange(e)}} className="col-span-3 text-[16px] bg-opacity-40 bg-[#989898] h-[38px] border-r-0 text-slate-200 pl-[15px] py-[5px] text-[D9D9D9]" type={inputConfig[element].type} placeholder={inputConfig[element].placeholder} />
                <p className="col-span-2 text-[15px] text-white font-semibold my-auto">New {element}</p>
                <input name="new" value={newInformation.new} onChange={(e)=>{handleChange(e)}} className="col-span-3 text-[16px] bg-opacity-40 bg-[#989898] h-[38px] border-r-0 text-slate-200 pl-[15px] py-[5px] text-[D9D9D9]" type={inputConfig[element].type} placeholder={inputConfig[element].placeholder} />
                <p className="col-span-2 text-[15px] text-white font-semibold my-auto">Confirm {element}</p>
                <input name="confirmation" value={newInformation.confirmation} onChange={(e)=>{handleChange(e)}} className="col-span-3 text-[16px] bg-opacity-40 bg-[#989898] h-[38px] border-r-0 text-slate-200 pl-[15px] py-[5px] text-[D9D9D9]" type={inputConfig[element].type} placeholder={inputConfig[element].placeholder} />
            </form>
            <button onClick={()=>{handleSubmit()}} className="xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 xl:col-start-8 lg:col-start-8 md:col-start-7 sm:col-start-7 transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid w-full border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[127px] h-[30px] py-[1px]" >Save Changes</button>
        </div>*/