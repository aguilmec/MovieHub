import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Context/UserContext';


const inputConfig = {'email':{type: 'text', placeholder: 'email@email.com'}, 'password':{type: 'password', placeholder: 'password...'}};
const initialValue = {current: '', new: '', confirmation: ''};

export default function EditProfileForm({ user }){
    
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
                //update successfull
            }catch(error){
                //update not successfull
            }
        }else{
            //inputs dont match!
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
        <div className="grid col-span-10 col-start-1 grid-cols-10">
            <div className="grid grid-cols-10 col-span-10 mb-[45px] mt-[40px]">
                <div className="flex col-span-2 col-start-2">
                    <div className='bg-[#A70000] my-auto h-[20px] w-[7px]' />
                    <p className="pl-[10px] my-auto cursor-default text-[24px] font-bold text-center text-white">Your Profile</p>
                </div>
                <div className="flex col-span-2 col-start-5">
                    <div className='bg-[#A70000] my-auto h-[20px] w-[7px]' />
                    <p className="pl-[10px] my-auto cursor-default text-[24px] font-bold text-center text-white">Edit Profile</p>
                </div>
            </div>
            <div className="col-span-1 flex flex-col col-start-2 my-[auto] gap-y-[40px] h-max">
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
            <button onClick={()=>{handleSubmit()}} className="col-start-8 transition-[bg_200-border_200] duration-200 z-20 bg-transparent text-white border-solid w-full border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold w-[127px] h-[30px] py-[1px]" >Save Changes</button>
        </div>
        
    );
};