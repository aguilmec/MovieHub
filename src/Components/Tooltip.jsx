export default function Tooltip({ tooltip }){
    return(
        <div className="text-white text-[12px] absolute px-[15px] py-[5px] bg-opacity-20 bg-slate-300 rounded-md right-[-70px] top-[10px]">
            {tooltip}
        </div>
    );
};