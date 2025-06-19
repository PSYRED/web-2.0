import React, { useEffect } from 'react'
import { useAuth } from '../auth/AuthContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import pic from '../assets/imgclone/STUDIO/Toyota/Artic armor/top.png//'
const Stats = () => {
  const {user,handleLogout} = useAuth()
  const navigate = useNavigate(); 
  
  const brandData = {
  Toyota: {},
  RAM: {
    models: {
      '1500': ['BRP I Sports', 'BRP II'],
      '2500': ['Utility Rack']
    }
  },
  Rivian: {},
  Chevrolet : {}
};

const [brp,setBrp] = useState('')
const [color,setColor] = useState('Artic armor')
const [brand,setBrand] = useState('Toyota')
const [model,setModel] = useState('')
 

const getImagePath = (view= 'top') => {
  let path = `/imgclone/STUDIO/${brand}/`
  
  if (model) {
    path += `${model}/`;
  }

  path += `${color}/`;

  if (brp) {
    path += `${brp}/`
  }
  
  path += `${view}.png`

  return path
}

 
 useEffect (() => {
    if (color && brand) {
      const imgPath = getImagePath()
      console.log(imgPath)
     }
  }, [color, brand,brp,model])

  return (
    <>
      <div className='flex  items-center bg-black py-[12rem] px-[5rem]'>
        <div className="text-4xl font-bold text-white w-1/2">
         <div>
            <img src={getImagePath('top')}/>

         </div>
         <div className='flex'>
          <div className='w-1/3'>
          <img src={getImagePath('left')}/>

         </div>
         <div className='w-1/3'>
          <img src={getImagePath('right')}/>

         </div>
         <div className='w-1/3'>
          <img src={getImagePath('far')}/>

         </div>
         
         </div>
          
          
          
        </div>
        <div className='w-1/2 text-center flex flex-col items-center space-y-2 '>
          
          <div className=''>Brand</div>
          <select value={brand} name="brand" onChange={(e)=> {setBrand(e.target.value) 
          setBrp('') 
          setModel('')
          }}  className='rounded-md' id="">
            <option value="" disabled selected hidden>Select brand</option>
            {Object.keys(brandData).map((b)=> (
              <option key={b} value={b}>{b}</option>
            ))}
             

          </select>
          
          <div className=''>Model</div>
          <select value={model} disabled={!brand || Object.keys(brandData[brand]?.models || {}).length === 0 } onChange={(e)=> setModel(e.target.value)}
  className='rounded-md' id="">
            
            <option value="" disabled selected hidden>Select Model</option>

            {Object.keys(brandData[brand]?.models || {}).map((m)=> (
              <option key={m} value={m}>{m}</option>

            ))}
            
          </select>
          
          <div>BRP types</div>
           <select value={brp} disabled={!model ||(brandData?.[brand]?.models?.[model] || []).length === 0}   name="brp" onChange={(e)=> setBrp(e.target.value)}  className='rounded-md' id=""> 
            <option value="" disabled selected hidden>Select BRP Type</option>

            {(brandData?.[brand]?.models?.[model] || []).map((k)=> (
              <option key={k} value={k}>{k}</option>

            ))}
          </select>

          <div>BRP Color</div>

           <select name="color" onChange={(e)=> setColor(e.target.value)}  className='rounded-md' id="">
            <option value="" disabled selected hidden>Select BRP color</option>
            <option value="Artic armor">White</option>
            <option value="Blackhawk armor">Black</option>
            <option value="Silver-trail armor">Grey</option>
          </select>

          <div>Attachment</div>

           <select name="brand"  className='rounded-md' id="">
            <option value="" disabled selected hidden>Select Attachement</option>
            <option value="Toyota">Toyota</option>
            <option value="Ford">Ford</option>
            <option value="GMC">GMC</option>
          </select>
          <div className=' pt-6'>

            <button 
              onClick={()=>navigate('/dashboard/checkout')}
            className="px-6 py-3  bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
            Proceed to Checkout
        </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Stats