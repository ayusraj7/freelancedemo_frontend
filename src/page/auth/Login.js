import React, { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import img from "../../img/bg.png"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios';


const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading]=useState(false);
  const [eye, setEye] = useState(true)


  const handleSubmit = async(e) => {
    e.preventDefault();
    const toastId=toast.loading('Loading');
    try{
      const user=await axios.post(process.env.REACT_APP_BACKEND_URL+'/auth/login',{
        email,
        password
    });
    
    const token=user.data.token;
    const userData=user.data.user;

    
    localStorage.setItem('token',JSON.stringify(token));
    localStorage.setItem('userData',JSON.stringify(userData));
    
    
    if(!user.data.success)
    {
       
        throw new Error(user.data.message);
    }
    
    toast.success(user.data.message);
    if(user.data.user.AccountType ==='Student')
    {
      navigate('/items/:all')
    }
    if(user?.data?.user?.AccountType==='Admin'){
      navigate(`/admin-items/${user.data.user._id}`)
    }
   
    

}catch(error)
{   
console.log('error',error);
toast.error(error.response.data.message);
}

toast.dismiss(toastId);
  };

  return (
    <div className='w-[100vw] h-[100vh] pb-[80px] sm:mt-0 mt-[100px] bg-slate-900 flex justify-center items-center'>
      <div className='lg:w-[70%] h-[80%] flex items-center justify-center rounded-lg p-5'>

    
      <div className='w-full h-full flex flex-col-reverse  sm:flex-row items-center sm:gap-[90px] justify-center'>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-10 sm:w-full lg:w-[48%] sm:h-[60%]'>
                  <h1 className='text-center text-yellow-600 font-bold text-4xl'>Login</h1>
                  <p className='text-yellow-600 text-xl font-normal text-center'>Please enter your Login and Password</p>
                  <div className='relative top-0 left-0 mb-16'>
                  <input 
                    type="text" 
                    className='rounded-lg p-4 pl-11 w-full absolute bg-transparent border text-slate-400 border-slate-400' 
                    placeholder='Email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                  <FaUser className='text-slate-600 opacity-65 absolute top-5 left-3'/>
                  </div>
                  <div className='relative top-0 left-0'>

                    {
                      eye ? (
                      <>
                      <input 
                          type="text" 
                          className='rounded-lg text-slate-400 p-4 w-full pl-11 bg-transparent border border-slate-400' 
                          placeholder='Password' 
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} 
                        />
                        <FaLock className='text-slate-600 opacity-65 absolute left-3 top-5 '/>

                        <IoEyeSharp onClick={()=>setEye(false)}  className='absolute top-4 right-6 text-slate-400 text-lg cursor-pointer'/>
                      </>) : (<>
                        <input 
                          type="password" 
                          className='rounded-lg text-slate-400 p-4 w-full pl-11 bg-transparent border border-slate-400' 
                          placeholder='Password' 
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} 
                        />
                        <IoMdEyeOff onClick={()=>setEye(true)} className='absolute top-4 right-6 text-slate-300 text-lg cursor-pointer'/>
                        <FaLock className='absolute opacity-65 text-slate-600 left-3 top-5'/>

                      </>)
                    }
   
            </div>
            <button type='submit' className='bg-purple-700 hover:bg-purple-900 p-3 text-white rounded-md text-lg font-semibold'>Login</button>
          </form>

      <hr className='h-[85%] w-[2px] bg-transparent border border-slate-700'/>
        
        <div>
          <img src={img} className='w-[580px]' alt="" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
