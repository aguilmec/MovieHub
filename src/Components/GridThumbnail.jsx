
export default function GridThumbnail({ image, name, duration, genre, language }){
    return(
        <div className='mx-auto flex flex-col w-11/12 opacity-60 transition duration-200 hover:opacity-100'>
            <div className='relative flex'>
                <img className='cursor-pointer w-full h-[350px] object-cover shadow-3xl rounded-md' src={image} />
            </div>
            <button className='text-left text-white font-roboto font-semibold text-[15px] mt-[9px] w-fit'>{name}</button>
            <div className='cursor-default flex flex-row gap-x-[30px] text-slate-500 font-roboto text-[13px]'>
                <p>{language}</p>
                <p>{duration}</p>
                <p>{genre}</p>
            </div>
        </div>
    );
};