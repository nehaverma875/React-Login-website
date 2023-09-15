import React from 'react'
import frameImage from "../allpic/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm' 
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
 
  console.log("ye rha mera form type");
  console.log(formtype)
return (
  <div className='flex  w-11/12 max-w-[1190px] py-5 max-auto gap-x-12 gap-y-0  justify-center '>

      <div className='w-11/12 max-w-[450px] ' >
          <h1 className='text-white font-semibold text-[20px] leading-[2.000rem] '>{title}</h1>
          <p className='
          text-[10px] leading-[1.225rem] text-white mt-2 '>
          
              <span className='text-yellow-200'>{desc1}</span>
              <br/>
              <span className='text-blue-400'>{desc2}</span>
          </p>

          {formtype === "signup" ? 
          (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
          (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

          <div className='flex w-full items-center my-2 gap-x-2'>
              <div className=' w-full h-[1px] bg-slate-600'></div>
              <p className='text-gray-400'>OR</p>
              <div className=' w-full h-[1px] bg-slate-600' ></div>
          </div>

          <button className='flex w-full  justify-center items-center rounded-[6px] font-medium text-gray-400
         border border-gray-400 px-[12px] py-[8px] gap-x-2 '>
          <FcGoogle/>
              <p>Sign Up with Google</p>
          </button>

      </div>

      <div className='relative w-11/12 max-w-[280px]' >
          <img   src={frameImage}
              alt="Pattern"
              width={528}
                height={504}
                loading="lazy"/>

          <img src={image}
              alt="Students"
              width={528}
                height={490}
               loading="lazy"   className='absolute -top-1 right-4'/>
      </div>

  </div>

  )
}

export default Template
