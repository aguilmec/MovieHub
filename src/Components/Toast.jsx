import { useEffect } from "react";

export default function Toast({ toast, setToast }){

    useEffect(()=>{
        setTimeout(()=>{
            setToast({message:'',visible: false});
        },6000);
    },[]);

    return(
        <div className="rounded-t-xl font-roboto w-[400px] shadow-xl py-[20px] bg-[#090909E6] absolute z-20 ml-auto mr-[40px] sticky bottom-0">
            <div className='flex flex-row w-max mx-auto gap-x-[8px]'>
                <div className='bg-[#A70000] h-[20px] w-[7px]' />
                <p className="font-semibold mx-auto my-auto text-white">{toast.message}</p>
            </div> 
        </div>
    );
};