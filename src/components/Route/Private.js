import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

const PrivateRoute = ({children}) => {
    const [auth, setAuth] = useAuth()
    const [ok, setOk] = useState(false)

    useEffect(() => {
const authCheck = async () => {
  const url = "/api/v1/auth/user-auth";
  // console.log("Making request to:", url);
  try {
    const res = await axios.get(url);
    setOk(res.data.ok);
  } catch (err) {
    console.error("Error during authentication check:", err);
  }
};

        if(auth?.token) authCheck()
        }, [auth])

    return ok ? <Outlet/> : <Spinner />
}  
export default PrivateRoute;
