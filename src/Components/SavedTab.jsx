import SavedMovie from "./SavedMovie";

export default function SavedTab({ user, setUser }){

    return(
        <div className="grid grid-cols-10 col-span-10 col-start-2">
            <div className="flex col-span-2 col-start-2 mt-[50px] mb-[40px]">
                <div className='bg-[#A70000] my-auto h-[20px] w-[7px]' />
                <p className="pl-[10px] my-auto cursor-default text-[24px] font-bold text-center text-white">Saved for later</p>
            </div>
            <div className="grid grid-cols-8 col-span-8 col-start-2 gap-y-[30px] gap-x-[20px] overflow-y-scroll h-[400px] scrollbar scrollbar-w-[2px] scrollbar-h-[2px] scrollbar-rounded-sm scrollbar-thumb-[#A7000055] scrollbar-opacity-50">
                {user.saved.length === 0 ? 
                    (<div className="text-center h-[50px] col-span-8 col-start-1 my-auto text-white font-roboto font-semibold text-[18px]">
                        There are no saved movies to display...
                    </div>) : 
                    (user.saved.map((movie)=>{
                        return <SavedMovie key={movie._id} user={user} setUser={setUser} movie={movie} />
                    }))
                }
            </div>
        </div>
    );
};