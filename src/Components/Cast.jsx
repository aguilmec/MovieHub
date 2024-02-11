export default function Cast({ name, image }){
    return(
        <div className="flex flex-col w-[150px] justify-center gap-y-[10px]">
            <img src={image} className= "mx-auto opacity-75 shadow-2xl rounded-full w-[75px] h-[75px] object-cover opacity-60 transition duration-200 hover:opacity-100" />
            <p className='text-center text-white cursor-default truncate'>{name}</p>
        </div>
    );
};