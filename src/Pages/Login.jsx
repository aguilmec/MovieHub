import { UserContext } from "../Context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import image1 from '../images/starwars.avif';
import { useState, useContext } from "react";

export default function Login(){

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        const response = await fetch('http://localhost:3500/login', {
            method: 'POST',
            credentials: 'include',
            withCredentials: true,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email: user.email,password: user.password}),
        });
        if(response.status === 200){
            const userData = await response.json();
            setCurrentUser({id: userData.id, email: userData.email});
            navigate('/');
        }else{
            console.error('There has been an error, please try again.');
        };
    };

    return (
        <div className="grid grid-cols-12 font-roboto">
            <div className="grid xl:col-span-4 lg:col-span-5 md:col-span-6 sm:col-span-7 xs:col-span-12 grid-cols-4 h-max gap-y-[50px] xs:relative">
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 xs:col-span-12 flex flex-col h-[150px] mt-[25px] justify-between xs:z-20">
                    <button className="cursor-default col-span-4 text-center font-black text-[32px] text-[#A70000] drop-shadow-lg"><Link to={'/'}>MOVIEBASE</Link></button>
                    <p className="cursor-default col-span-4 text-center text-white font-bold xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[24px] xs:text-[24px]">LOGIN</p>
                </div>
                <div className="mt-[40px] xl:col-span-4 lg:col-span-4 md:col-span-2 sm:col-span-2 md:col-start-2 sm:col-start-2 xs:col-span-10 text-center tracking-wider cursor-default text-white font-bold text-[16px] xs:z-20">Don't have an account? <a className="cursor-pointer text-[#A70000] hover:italic"><Link to={'/signup'}>Click here to Sign up</Link></a></div>
                <form onSubmit={(e)=>{handleSubmit(e)}} className="col-span-4 grid grid-cols-4 col-start-2 h-[450px] mt-[50px] xs:z-20">
                    <p className="cursor-default col-span-4 text-left font-black text-[18px] text-white drop-shadow-lg">Email:</p>
                    <input type="text" name="email" onChange={(e)=>{setUser({...user, [e.target.name]: e.target.value})}} value={user.email} className="xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-3 xs:col-span-3 text-[14px] bg-opacity-40 bg-[#989898] h-[38px] border-r-0 text-slate-200 pl-[15px] py-[5px] text-[D9D9D9] outline-none focus:border-solid focus:border-[1px] focus:border-[#A70000]" placeholder="address@email.com" />
                    <p className="cursor-default col-span-4 text-left font-black text-[18px] text-white drop-shadow-lg">Password:</p>
                    <input type="password" name="password" onChange={(e)=>{setUser({...user, [e.target.name]: e.target.value})}} value={user.password} className=" xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-3 xs:col-span-3 text-[14px] bg-opacity-40 bg-[#989898] h-[38px] border-r-0 text-slate-200 pl-[15px] py-[5px] text-[D9D9D9] outline-none focus:border-solid focus:border-[1px] focus:border-[#A70000]" placeholder="password" />
                    <button className="mt-[50px] col-start-1 transition-[bg_200,border_200] duration-200 z-20 bg-transparent text-white border-solid border-[1px] border-white hover:bg-[#A70000] hover:border-transparent hover:text-white text-[11px] font-semibold col-span-2 h-[40px] py-[1px]">Login</button>
                </form>
                <img className="object-cover h-screen opacity-30 blur-sm xl:hidden lg:hidden md:hidden sm:hidden xs:absolute" src={image1} />
            </div>
            <div className="xl:col-span-8 lg:col-span-7 md:col-span-6 sm:col-span-5 xs:col-span-12 h-screen relative sm:block xs:hidden ">
                    <div className="absolute left-[-8px] inset-x-0 inset-y-0">
                        <div className='sticky absolute z-10 h-full w-[300px] left-0 bg-gradient-to-r from-[#1E1E1E] via-transparent sm:hidden' />
                    </div>
                <img className="object-cover h-screen opacity-30 blur-sm" src={image1} />
                <div className="cursor-default absolute inset-x-0 inset-y-0 z-20 grid grid-cols-8">
                    <p className="mt-[200px] h-max text-white drop-shadow-lg text-center font-bold tracking-wide col-span-8 xl:text-[28px] lg:text-[26px] md:text-[24px]">Welcome to <span className="font-black text-[#A70000]">MOVIEBASE</span></p>
                    <p className="h-max text-white xl:text-[24px] lg:text-[24px] md:text-[20px] drop-shadow-lg xl:col-span-4 lg:col-span-5 md:col-span-6 sm:col-span-6 xs:col-span-6 xl:col-start-2 lg:col-start-2 md:col-start-2 sm:col-start-2 xs:col-start-2 font-bold">The ultimate destination for Movie and Tv Shows lovers. Here, you can watch <span className="text-[#A70000]" >hundreds</span> of Movies and Tv Shows online for <span className="text-[#A70000]">free</span>, no ads and no hassle.</p>
                    <p className="h-max text-white xl:text-[24px] lg:text-[24px] md:text-[20px] drop-shadow-lg xl:col-span-4 lg:col-span-5 md:col-span-6 sm:col-span-6 xs:col-span-6 xl:col-start-2 lg:col-start-2 md:col-start-2 sm:col-start-2 xs:col-start-2 font-bold">Just sit back, relax and enjoy the show!</p>
                </div>
            </div>
        </div>
        
    );
};