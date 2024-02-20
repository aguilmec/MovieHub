import SavedMovie from "./SavedMovie";

export default function SavedTab({ user }){

    return(
        <div className="grid grid-cols-10 col-span-10 col-start-2">
            <div className="flex col-span-2 col-start-2 mt-[50px] mb-[40px]">
                <div className='bg-[#A70000] my-auto h-[20px] w-[7px]' />
                <p className="pl-[10px] my-auto cursor-default text-[24px] font-bold text-center text-white">Saved for later</p>
            </div>
            <div className="grid grid-cols-8 col-span-8 col-start-2 gap-y-[30px] gap-x-[20px] overflow-y-scroll h-[400px] scrollbar scrollbar-w-[2px] scrollbar-h-[2px] scrollbar-rounded-sm scrollbar-thumb-[#A7000055] scrollbar-opacity-50">
                {user.saved.map((movie)=>{
                    return <SavedMovie key={movie._id} movie={movie} />
                })}
            </div>
        </div>
    );
};