import image from '../images/4.jpg';
import Cast from './Cast';
import StarRatings from 'react-star-ratings'

const members = [
    {
        id: 0,
        name: 'Joaquin Phoenix',
        img: 'https://www.famousbirthdays.com/headshots/joaquin-phoenix-5.jpg'
    },
    {
        id: 1,
        name: 'Robert De Niro',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Robert_De_Niro_KVIFF_portrait.jpg/640px-Robert_De_Niro_KVIFF_portrait.jpg'
    },
    {
        id: 2,
        name: 'Zazie Beetz',
        img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/v9/AllPhotos/981946/981946_v9_bb.jpg'
    },
    {
        id: 3,
        name: 'Frances Conroy',
        img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/151962_v9_bc.jpg'
    },
    {
        id: 4,
        name: 'Glenn Flesher',
        img: 'https://image.tmdb.org/t/p/w500/x1Cef2yPZS7bJTwxI7DX3q0HNcv.jpg'
    },
    {
        id: 5,
        name: 'Bryan Callen',
        img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/67968_v9_bb.jpg'
    },
    {
        id: 6,
        name: 'Marc MAron',
        img: 'https://ntvb.tmsimg.com/assets/assets/73090_v9_bc.jpg'
    },
    {
        id: 7,
        name: 'Josh Pais',
        img: 'https://image.tmdb.org/t/p/w500/uH90fGfLLzYCX02yOW3kH4LMO7n.jpg'
    }
];

export default function MovieInfo(){
    return(
        <div className="grid grid-cols-6 gap-x-[25px]">
            <p className="cursor-default text-white font-bold text-[24px] leading-6 col-span-6 mb-[10px]">Joker</p>
            <div className="col-span-2 h-[400px]">
                <img src={image} className='shadow-3xl w-full h-full object-cover' />
            </div>
            <div className="col-span-4 flex flex-col gap-y-[20px]">
                <div className="flex flex-col gap-y-[20px]">
                    <p className="text-white cursor-default">A socially inept clown for hire - Arthur Fleck aspires to be a stand up comedian among his small job working dressed as a clown holding a sign for advertising. He takes care of his mother, Penny Fleck, and as he learns more about his mental illness, he learns more about his past. Dealing with all the negativity and bullying from society, he heads downwards on a spiral, in turn showing how his alter ego, "Joker," came to be.</p>
                    <p className='cursor-default flex flex-row gap-x-[30px] text-slate-500 font-roboto text-[13px]'>2017 | 2h 12m | English | Drama</p>
                    <StarRatings rating={4} starDimension='20px' starRatedColor='#A70000' />
                </div>
                <div className="flex relative overflow-x-auto scrollbar scrollbar-w-[2px] scrollbar-h-[2px] scrollbar-rounded-sm scrollbar-thumb-[#A7000055] scrollbar-opacity-50">
                    <div className="absolute inset-x-0 inset-y-0">
                        <div className='sticky absolute z-10 w-full h-full w-[80px] left-0 bg-gradient-to-r from-[#1E1E1E] via-transparent' />
                    </div>
                    <div className="flex relative pb-[10px]">
                        {members.map((member) => (
                        <Cast key={member.id} name={member.name} image={member.img} />
                        ))}
                    </div>
                    <div className="absolute sticky inset-y-0 right-0">
                        <div className='z-10 h-full w-[50px] absolute right-[0px] bg-gradient-to-l from-[#1E1E1E] via-transparent' />
                    </div>
                </div>
            </div>
        </div>
    )
}




/*export default function MovieInfo(){
    return(
        <div className="grid grid-cols-8 gap-x-[25px] h-[400px]">
            <div className="col-span-2 h-[400px]">
                <img src={image} className='shadow-3xl rounded-md w-full h-full object-cover' />
            </div>
            <div className="col-span-4 flex flex-col gap-y-[20px] px-[10px]">
                <div className="flex flex-col gap-y-[20px]">
                    <p className="cursor-default text-white font-bold text-[24px] leading-6">Joker</p>
                    <p className="text-white cursor-default">A socially inept clown for hire - Arthur Fleck aspires to be a stand up comedian among his small job working dressed as a clown holding a sign for advertising. He takes care of his mother, Penny Fleck, and as he learns more about his mental illness, he learns more about his past. Dealing with all the negativity and bullying from society, he heads downwards on a spiral, in turn showing how his alter ego, "Joker," came to be.</p>
                    <p className='cursor-default flex flex-row gap-x-[30px] text-slate-500 font-roboto text-[13px]'>2017 | 2h 12m | English | Drama</p>
                    <StarRatings rating={4} starDimension='25px' starRatedColor='#A70000' />
                </div>
            </div>
            <div className="col-span-2 flex relative flex-col h-[400px]">
                <p className="text-white font-bold text-2xl leading-6 mb-4">Cast</p>
                <div className='relative'>
                    <div  className='flex absolute z-10 w-full h-[50px] top-0 bg-gradient-to-b from-[#1E1E1E] via-transparent' />
                </div>
                <div className="overflow-y-auto flex flex-col relative gap-y-[15px] py-[5px] scrollbar scrollbar-w-[3px] scrollbar-h-6 scrollbar-rounded-sm scrollbar-thumb-[rgba(249,115,22,0.25)] scrollbar-thumb-rounded-full scrollbar-opacity-50">
                    {members.map((member) => (
                    <Cast key={member.id} name={member.name} image={member.img} />
                    ))}
                </div>
                <div  className='flex absolute z-10 w-full h-[50px] bottom-0 bg-gradient-to-b from-transparent via-transparent to-[#1E1E1E]' />
            </div>
        </div>
    )
}*/