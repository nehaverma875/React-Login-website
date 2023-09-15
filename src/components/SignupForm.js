import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();


const [formData,setFormData]=useState({firstName:"",lastname:"",email:"",password:"",confirmPassword:""});

const [showPassword, setShowPassword] = useState(false);

 
function changeHandler(event) {

  setFormData( (prevData) =>(
      {
          ...prevData,
          [event.target.name]:event.target.value
      }
  ) )
    }


    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("printing account data ");
        console.log(accountData);

        navigate("/dashboard");

    }




  return (

    <div className='flex justify-between w-11/12 max-w-[1000px] py-1  gap-x-12 gap-y-0'>

    {/*student- intruction tab*/}
    <div >
     { /* <button>Student</button>
      <button>Intructor</button> */}
    </div>
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">

      <div  className=' -mt-5'>
      <label className='w-full'>
         <p  className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
            <input
               required
               type="text"
             name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                     value={formData.firstName}
                     className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[5px] '   />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}  className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[5px] '
                        />
                    </label>
                                  {/* email Add */}
            <label className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[5px] '  />
            </label>


            {/* createPassword and Confirm Password */}
            <div>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.075rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"  className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[7px]'
            />

                     <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                    </label>
                    
                    <label className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.100rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}  className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[5px] '
                    />
                       <span  className='absolute pt-1.4 right-8 top-[60px] cursor-pointer'
            onClick={() => setShowPassword((prev) =>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>

                </label>
                     </div>
                     <br/>
                <button  className='rounded-[0.5rem] text-white w-full p-[6px] bg-yellow-500 -mt-2 '>
            Create Account
                   </button>

             </div>
        </form>
    </div>
  )
}

export default SignupForm
