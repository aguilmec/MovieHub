import EditProfileForm from "./EditProfileForm";
import { useState } from "react";
import SavedTab from "./SavedTab";

const classNames = {selected: 'text-[14px] py-[3px] w-full h-full cursor-pointer bg-[#A70000] border-solid border-[1px] border-[#A70000] text-white font-semibold',
                    notSelected: 'text-[14px] py-[3px] w-full h-full cursor-pointer bg-transparent border-solid border-[1px] border-white text-white font-semibold'}

export default function ProfileTab({ user }){

    const [editProfile, setEditProfile] = useState(true);

    return(
        <div className="grid col-span-10 col-start-2 my-auto bg-[#1E1E1E] z-10 h-max pb-[65px] gap-x-[20px] shadow-xl">
            <div className="flex flex-row col-span-11 h-max z-20">
                <button onClick={()=>{setEditProfile(true)}} className={editProfile ? classNames.selected : classNames.notSelected}>User profile</button>
                <button onClick={()=>{setEditProfile(false)}} className={!editProfile ? classNames.selected : classNames.notSelected}>Watch later</button>
            </div>
            {editProfile ? <EditProfileForm user={user} /> : <SavedTab user={user} />}
        </div>
    );
};