import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";   
import login from "../../src/assets/psyred_assets/shot5.png";
import fabIcon from "../../src/assets/psyred_assets/official_logo.png";

import GoogleLoginBtn from "../firebase/googleLoginBtn";
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "../firebase/firebaseConfig";
import {useNavigate } from "react-router-dom";
import { useAuth } from "../auth/SupabaseContext";

import google_svg from '../assets/psyred_assets/google_icon.svg'
import { supabase } from "../lib/supabaseClient";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error , setError] = useState('')

  const [isLogin,setIsLogin] = useState(false)
  
  
  const navigate = useNavigate(); 
  const {session,signOut} = useAuth()
  


  
  async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + '/dashboard/Home', 
    },
  });

  if (error) console.error('Google login error:', error.message);
}

  

  const handleEmailSignUp= async (e) => {
    console.log('Login :',isLogin)
    e.preventDefault();
    setError("");
    setIsLoading(true)
    // Basic form validation
    if (!email.trim() || !password.trim()) {
      toast.error("Email and password are required.");
      setIsLoading(false)
      return;
    }

    try {
      if (!isLogin) {
         const {error} = await supabase.auth.signUp({email,password})
          if (error) {
            if (error.message.includes('User already registered')) {
              toast.info('Account already exists! Please log in instead.')
              setIsLogin(true) 
              setIsLoading(false)
              return
            }
         
          
          setIsLogin(true)

        return
      }

      navigate('/dashboard/Home');
      toast.success('Sign up success');
    }

        else {
          const {data,error} = await supabase.auth.signInWithPassword({email,password})
          if (error) {
            toast.error(`${error}`)
            console.error('Error logging in:',error)
            return
          }

          toast.success('Logged in successfully with supabase')
          navigate('/dashboard/Home');
          console.log('Login response :',data)
         

        }
      }
      catch (err) {
        setError(err.message);
        toast.error(err.message)
        console.log('Error signing in:',err.message)
      }
      finally {
        setIsLoading(false);
      }
  }

  // const handleSignOut = async ()=> {
  //    await signOut(auth)
  // }

  // const handleLogin = async ()=> {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth,email,password);
  //     console.log('User Logged in :',userCredential.user.email)

  //   }
  //   catch (error){
  //     console.log('Log in Error: ',error.message)
  //     if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
  //       alert("Invalid credentials");
  //     } else {
  //       alert("Error: " + error.message);
  //     }
  //   }

  // }
  useEffect (() => {
    if (session) {
      navigate('/dashboard/Home');
    }
  }, [session, navigate])

  // console.log(supabase)

  const buttonText = isLoading
    ? isLogin
      ? "Logging In..."
      : "Signing Up..."
    : isLogin
    ? "Log In"
    : "Sign Up";
  return (
    <>
      <ToastContainer />
      <div className="   ">
        <div className="">
          <div className="absolute  -z-20 object-contain h-[100vh]">
            <img src={login} alt="" className="" />
          </div>

          <div className="flex  justify-center font-nunito  lg:justify-end lg:mr-[10rem]    items-center   ">
            <div className=" flex flex-col  items-center  lg:pt-[4rem] ">
              <div className="relative space-y-1 flex lg:w-full w-[100vw] bg-white  flex-col min-w-0   mb-6 shadow-lg rounded-lg  border-0">
                <div className=" px-6 pt-4 space-y-">
                  <div className="items-center flex flex-col  mb-3">
                    <div className="w-fit -mt-[4rem] ">
                      <img
                        src={fabIcon}
                        alt="Logo Image"
                        className="lx:w-14 md:72 mt-6 lg:w-[25vw] h-auto p-14"
                      />
                    </div>
                    <h6 className="text-blueGray-500 text-4xl font-sora font-bold">
                      {session ? `Welcome ${session}` : "Sign In"}
                    </h6>
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold"></div>

                  {/* Form  */}
                  <form className="font-nunito">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border border-gray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border border-gray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox shadow-lg rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm  font-semibold text-blueGray-600">
                          Remember me
                        </span>
                      </label>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-cyan-700 hover:bg-green-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                        onClick={handleEmailSignUp}
                      >
                        {buttonText}
                      </button>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-cyan-700 flex items-center justify-center space-x-4 hover:bg-green-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button" onClick={signInWithGoogle}
                      >
                        <img src={google_svg} className="h-8" alt="" srcset="" />

                        
                      </button>
                    </div>

                    {/* <div className="text-center mt-6">
                      <button
                        className="bg-cyan-700 hover:bg-green-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleLogin}
                      >
                        {isLoading ? "Logging in ..." : "Login with E-mail "}
                      </button>
                    </div> */}
                    
                  </form>
                </div>
              </div>
              <div className="flex   space-x-[16rem] relative">
                <div className="w-1/2 mb-[5rem]">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className="text-blueGray-200"
                  >
                    <small className="text-white">Forgot password?</small>
                  </a>
                </div>
                <div className="w-1/2 text-right">
                  <Link to="/register" className="text-blueGray-200">
                    <small className="text-white ml-[5rem]">
                      Create new account
                    </small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
