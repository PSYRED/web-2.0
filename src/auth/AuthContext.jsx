import { createContext,useContext,useState,useEffect,  } from "react";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged,signOut } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
//create global context 
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    // listen for auth changes 
    useEffect(() => {
        
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser, "currentUser");
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);

    //handle sign out 

     const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
        navigate('/')
      };

    return (
        <AuthContext.Provider value={{user,handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);