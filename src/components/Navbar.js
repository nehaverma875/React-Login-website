import React, { useState } from 'react'
import {NavLink } from 'react-router-dom';
import  logo from '../allpic/Logo.svg';
import {toast} from "react-hot-toast";





const Navbar = (props) => {

  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;
 
  return (
    <div className='flex justify-evenly items-center w-11/12 mt-2'>


    <NavLink to='/' >
      <img src={logo}  alt='logo' width={160} height={32} loading='lazy'/>
        
      
    </NavLink>

    <nav>
    
    <ul className='flex flex-row gap-x-6 ml-16 text-white'>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>

    </nav>

    {/*login-signup-logout-Dashboard*/}
    <div className='flex gap-x-4 ml-5 mr-3 items-center'>
    { !isLoggedIn &&
    <NavLink to='/login'><button className=' px-3 py-1 text-white  bg-slate-500  rounded-[4px] border-blue-400'  >Login</button></NavLink>
    }

    { !isLoggedIn &&
    <NavLink to='/signup'><button className=' px-3 py-1 text-white  bg-slate-500  rounded-[4px] border-blue-400' >Sign Up</button></NavLink>
    }

    { isLoggedIn &&
      <NavLink to='/logout'><button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>Log Out</button></NavLink>}

    { isLoggedIn &&
      <NavLink to="/dashboard"><button>Dashboard</button></NavLink>}

    </div>


      
    </div>
  )
}

export default Navbar
