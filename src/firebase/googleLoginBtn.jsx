import { auth, provider, signInWithPopup, signOut } from "./firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'

const GoogleLoginBtn = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState(null)
     
    // handle login logic 
    const handleGoogleLogin = async (e) => {
      e.preventDefault()
      
       try {
         console.log('clicked')
         const result = await signInWithPopup(auth, provider);
         console.log(result,'result')
         setUser(result.user); // Store user info in state
         navigate("/dashboard/stats");
       } catch (error) {
         console.error("Error signing in:", error);
       }
     };

      //
  return (
    <div>
        {user ? (<p>{user.displayName}</p>): (<button onClick={handleGoogleLogin} className="">Sign In with google</button>)}
    </div>

   )
}

export default GoogleLoginBtn