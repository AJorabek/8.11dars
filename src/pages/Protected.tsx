import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const Protected = ({children}:any) => {
  const [loading,setLoading]=useState(true)


  useEffect(()=>{
    auth.authStateReady().finally(()=>setLoading(false))
  },[])

  if(loading){
    return "We are checking authentication...."
  } else{
    if (auth.currentUser) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
  }
};

export default Protected;
