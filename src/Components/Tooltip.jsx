export default function Tooltip({ tooltip }){
    return(
        <div className="text-white text-[12px] absolute px-[15px] py-[5px] bg-slate-300 rounded-md right-[22px] top-[15px]">
            {tooltip}
        </div>
    );
};