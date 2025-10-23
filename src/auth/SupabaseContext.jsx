import { createContext,useContext,useEffect,useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [session,setSession] = useState(null);
  const [loading,setLoading] = useState(true);
  
  const navigate = useNavigate()
  
  useEffect(()=>{
    const fetchSession = async ()=> {
      const {data,error} = await supabase.auth.getSession();
      if (error) console.error("Error in fetching session :",error);
      

      setSession(data.session);
      setLoading(false);
      
    }

    fetchSession();

    const {data : listener} = supabase.auth.onAuthStateChange(
      async (event,currentSession) => {
        console.log('Auth event:',event);
        setSession(currentSession);
        setLoading(false);
      }
    );


    return ()=>{
      listener.subscription.unsubscribe();
    };

  },[]);

  useEffect(()=> {
    console.log('Session Data :',session)

  },[session])

  
    const handleLogout = async () => {
      const { error } = await supabase.auth.signOut();
      if (error) console.error("Logout error:", error);
      
      toast.success("Logged out successfully");
      setSession(null)
      navigate('/')

      
  
};

  return (
    <AuthContext.Provider value={{session,handleLogout,loading}}>
      {children}
    </AuthContext.Provider>    
  );
};

export const useAuth= () => useContext(AuthContext);