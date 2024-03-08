import StarRatings from 'react-star-ratings';
import Cast from './Cast';

export default function MovieInfo({ movie }){
    return(
        <div className="grid grid-cols-6 gap-x-[25px] xl:mb-0 lg:mb-0 md:mb-0 sm:mb-[20px]">
            <p className="cursor-default text-white font-bold text-[24px] leading-6 col-span-6 mb-[10px]">{movie.name}</p>
            <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 sm:col-start-2 xs:col-span-4 xs:col-start-2 xl:my-0 lg:my-0 md:my-0 sm:my-[20px] xs:my-[20px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[auto] xs:h-[auto] bg-red-700">
                <img src={movie.image} className='shadow-3xl w-full h-full object-cover' />
            </div>
            <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-6 xs:col-span-6 flex flex-col gap-y-[20px]">
                <div className="flex flex-col gap-y-[20px]">
                    <p className="text-white cursor-default">{movie.description}</p>
                    <p className='cursor-default flex flex-row gap-x-[30px] text-slate-500 font-roboto text-[13px]'> {`${movie.releaseDate} | ${movie.duration} | ${movie.language} | ${movie.genre}`}</p>
                    <StarRatings rating={movie.rating} starDimension='20px' starRatedColor='#A70000' />
                </div>
                <div className="flex relative overflow-x-auto scrollbar scrollbar-w-[2px] scrollbar-h-[2px] scrollbar-rounded-sm scrollbar-thumb-[#A7000055] scrollbar-opacity-50">
                    <div className="absolute inset-x-0 inset-y-0">
                        <div className='sticky absolute z-10 h-full w-[80px] left-0 bg-gradient-to-r from-[#1E1E1E] via-transparent' />
                    </div>
                    <div className="flex relative pb-[10px]">
                        {movie.cast.map((member) => (
                        <Cast key={member.id} name={member.name} image={member.image} />
                        ))}
                    </div>
                    <div className="absolute sticky inset-y-0 right-0">
                        <div className='z-10 h-full w-[50px] absolute right-[0px] bg-gradient-to-l from-[#1E1E1E] via-transparent' />
                    </div>
                </div>
            </div>
        </div>
    );
};