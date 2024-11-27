import { useState, useEffect, useContext, createContext } from "react"
import axios from "axios";

const AuthContext = createContext() //same like we did for navigate


const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
      user: null,
      token: "",
    });

    //default axios
    axios.defaults.headers.common["Authorization"] = auth?.token;

    useEffect(()=>
    {
        const data = localStorage.getItem("auth"); 
        if(data){
            const parsedData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parsedData.user,
                token: parsedData.token
            })
        }
        //eslint-disable-next-line 
    }, [])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook. its convention that it start from ||use||

const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}