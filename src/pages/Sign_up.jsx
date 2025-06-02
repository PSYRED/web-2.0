import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";   
import login from "../../src/assets/psyred_assets/shot5.png";
import fabIcon from "../../src/assets/psyred_assets/official_logo.png";

import GoogleLoginBtn from "../firebase/googleLoginBtn";
import {auth, createUserWithEmailAndPassword,} from "../firebase/firebaseConfig";
import {useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

import google_svg from '../assets/psyred_assets/google_icon.svg'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error , setError] = useState('')
  
  
  const navigate = useNavigate(); 
  const {user,signOut} = useAuth()
  
  // handle login logic 
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post(
  //       "https://fablab-backend-api.onrender.com/auth/login",
  //       {
  //         email: email,
  //         password: password,
  //       }
  //     );
  //     console.log(response);
  //     toast.success(response.data.message);
  //     localStorage.setItem("user", JSON.stringify(response.data.user));
  //     localStorage.setItem("token", response.data.access_token);
  //     const token = localStorage.getItem("token");
  //     setTimeout(() => {
  //       if (response.data.user.role === "admin") {
  //         console.log(token);
  //         navigate(`/dashboard/stats`);
  //       } else {
  //         navigate("/");
  //       }
  //     }, 3000);
  //   } catch (error) {
  //     console.error(error);
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       if (error.response.status === 401) {
  //         toast.error("Incorrect password. Please try again.");
  //       } else {
  //         toast.error(`Correct Email or Password`);
  //       }
  //     } else if (error.request) {
  //       // The request was made but no response was receiv
  //       toast.error("Network error. Please try again later.");
  //     } else {
  //       toast.error("An unexpected error occurred. Please try again later.");
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  
  // Monitor user session 

  

  const handleEmailSignUp= async (e) => {
    e.preventDefault();
    setError("");
    
    // Basic form validation
    if (!email.trim() || !password.trim()) {
      toast.error("Email and password are required.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(true);
      toast.success('Email sign in successfull') 
      navigate('/dashboard/stats')
    } catch (err) {
      setError(err.message);
      toast.error(err.message)
      console.log(err.message)
    }
  }

  const handleSignOut = async ()=> {
     await signOut(auth)
  }

  useEffect (() => {
    if (user) {
      navigate('/dashboard/stats');
    }
  }, [user, navigate])
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
                      {user ? `Welcome ${user.email}` : "Sign In"}
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
                        type="button"
                        onClick={handleEmailSignUp}
                      >
                        {isLoading ? "Signing In ..." : "Sign In Using E-mail"}
                      </button>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-cyan-700 flex items-center justify-center space-x-4 hover:bg-green-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img src={google_svg} className="h-8" alt="" srcset="" />

                        <GoogleLoginBtn />
                      </button>
                    </div>
                    <button
                      className="bg-red-500 mx-auto text-white  flex"
                      onClick={handleSignOut}
                    >
                      <p>Sign Out </p>
                    </button>
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
