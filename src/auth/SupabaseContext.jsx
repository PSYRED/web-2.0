import { createContext,useContext,useEffect,useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [session,setSession] = useState(null);
  const navigate = useNavigate()
  
  useEffect(()=>{
    const fetchSession = async ()=> {
      const {data,error} = await supabase.auth.getSession();
      if (error) console.error("Error in fetching session :",error);
      if (data.session) navigate('/dashboard/Home', { replace: true });
      else navigate('/', { replace: true });
      setSession(data.session);
      
    }

    fetchSession();

    const {data : listener} = supabase.auth.onAuthStateChange(
      async (event,currentSession) => {
        console.log('Auth event:',event);
        setSession(currentSession);
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
    <AuthContext.Provider value={{session,handleLogout}}>
      {children}
    </AuthContext.Provider>    
  );
};

export const useAuth= () => useContext(AuthContext);