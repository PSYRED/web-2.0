import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/SupabaseContext'
// import pic from '../assets/imgclone/STUDIO/Toyota/Artic armor/top.png//'
import { Navigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); 
  const {session,handleLogout,loading} = useAuth()

  useEffect(()=> {
    if (!session && !loading) navigate('/');
    
  },[session,navigate,loading])
  
  
  
  
const brandLogos = [
  { name: 'Toyota', logo: '/imgclone/LOGOS/toyota.svg' },
  { name: 'RAM', logo: '/imgclone/LOGOS/ram.svg' },
  { name: 'Rivian', logo: '/imgclone/LOGOS/rivian.svg' },
  { name: 'Chevrolet', logo: '/imgclone/LOGOS/chevrolet.svg' }
];




  return (
    <>
    

    <div className=" bg-black md:py-[10rem] py-[3rem] flex flex-col items-center space-y-6">
      <p className='text-white md:text-4xl text-3xl text-center  '>Build your BRP today and get it to your location.</p>
      <div className="flex md:flex-row md:flex-wrap flex-col gap-4 justify-center">
        {brandLogos.map(({ name, logo }) => (
          <button
            key={name}
            onClick={() => {
                navigate('/dashboard/Studio',{state:{brand:name}} )
            }}
            className='border-2  rounded-md p-2 transition-transform hover:scale-105 
              hover:border-green-500 '
            
          >
            <img src={logo} alt={name} className="w-20 h-20 object-contain" />
          </button>
      ))}
      </div>
    </div>
    </>
  );
}

export default Home