import { UserContext } from "../Context/UserContext";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export default function ProtectedRoutes({children}){

    const [auth, setAuth] = useState(true);
    const { currentUser, setCurrentUser } = useContext(UserContext);

    useEffect(()=>{
        async function getAuth(){
            const response = await fetch('http://localhost:3500/verify', {withCredentials: true, credentials: 'include'});
            if(response.status !== 200){
                setAuth(false);
                setCurrentUser(null);
            }else{
                if(!currentUser){
                    const userData = await response.json();
                    setCurrentUser({id: userData.id, email: userData.email});
                };
            };
        };
        getAuth();
    },[]);

    if(auth === false){
        return <Navigate to={'/login'} />
        
    }else{
        return<>{children}</>
    };
};