import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({children}){

    const [auth, setAuth] = useState(true);

    useEffect(()=>{
        async function getAuth(){
            const response = await fetch('http://localhost:3500/verify', {withCredentials: true, credentials: 'include'});
            if(response.status !== 200){
                setAuth(false);
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