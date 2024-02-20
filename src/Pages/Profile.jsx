import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import ProfileTab from '../Components/ProfileTab';
import image from '../images/got.jpg';

export default function Profile(){

    const [loading, setLoading] = useState(true);
    const [tab, setTab] = useState(true);
    const [user, setUser] = useState({});
    const { currentUser, setCurrentUser } = useContext(UserContext);
    
    useEffect(()=>{

        async function fetchData(){
            try{
                const userVerification = await fetch('http://localhost:3500/verify', {credentials: 'include', withCredentials: true});
                const userVerificationData = await userVerification.json();
                if(!userVerificationData.error){
                    setCurrentUser({id: userVerificationData.id, email: userVerificationData.email });
                    const response = await fetch(`http://localhost:3500/profile/${userVerificationData.id}`, {withCredentials: true, credentials: 'include'});
                    const userData = await response.json();
                    setUser(userData);
                };
            }catch(error){
                console.log(error)
            };
        };
        fetchData();
    },[]);

    //remove margin from footer

    return(
        <div className="w-full h-screen relative grid grid-cols-12 font-roboto gap-x-[20px]">
            <div className="flex inset x-0 inset-y-0 w-full h-full absolute">
                <img className="w-full h-full object-cover opacity-30 blur-sm" src={image} />
            </div>
            <ProfileTab user={user} />
        </div>
    );
}