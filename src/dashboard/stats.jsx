import React from 'react'
import { useAuth } from '../auth/AuthContext'

const Stats = () => {
  const {user,handleLogout} = useAuth()
  return (
    <>
      <div className='flex flex-col items-center bg-black py-[15rem]'>
        <div className="text-4xl font-bold text-white">{`Welcome ${user.email}`}</div>
        <button onClick={handleLogout} className="bg-red-600">Sign Out </button>
      </div>
    </>
  );
}

export default Stats