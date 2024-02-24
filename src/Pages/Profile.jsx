import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import ProfileTab from '../Components/ProfileTab';
import Toast from '../Components/Toast';
import image from '../images/got.jpg';

export default function Profile(){

    const [user, setUser] = useState({});
    const [toast, setToast] = useState({visible: false, message:''});
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

    return(
        <div className='h-screen relative'>
            <div className="w-full h-screen relative grid grid-cols-12 font-roboto gap-x-[20px]">
                <div className="flex inset x-0 inset-y-0 w-full h-full absolute">
                    <img className="w-full h-full object-cover opacity-30 blur-sm" src={image} />
                </div>
                <ProfileTab user={user} setUser={setUser} toast={toast} setToast={setToast} />
            </div>
            {toast.visible ? <Toast toast={toast} setToast={setToast} /> : null}
        </div>
    );
};

//