export default function Cast({ name, image }){
    return(
        <div className="flex flex-col w-[150px] justify-center gap-y-[10px]">
            <img src={image} className= "mx-auto opacity-75 shadow-2xl rounded-full xl:w-[75px] xl:h-[75px] lg:w-[75px] lg:h-[75px] md:w-[75px] md:h-[75px] sm:w-[75px] sm:h-[75px] xs:w-[75px] xs:h-[75px] object-cover opacity-60 transition duration-200 hover:opacity-100" />
            <p className='text-center text-white cursor-default truncate'>{name}</p>
        </div>
    );
};