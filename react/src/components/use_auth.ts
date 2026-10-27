import {useEffect, useState} from 'react'

export function useAuth(){
    const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
    useEffect(() =>{
        fetch("http://localhost:4000/api/auth/me", {credentials: "include"})
            .then((r) => setLoggedIn(r.ok))
            .catch(() => setLoggedIn(false));
    
    },[]);
    return {loggedIn, setLoggedIn};
}