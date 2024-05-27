import { useState } from "react";
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const [accountType,setType]=useState('Student');
    const [loading,setLoading]=useState(false);
    const [formData,setFormData] =useState({
        Name:"",
        email:"",
        password:"",
    })
    const navigate=useNavigate();
    console.log('formdata',formData,accountType);
    const handleonchange=(e)=>{
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value
        }))
        
    }
    const changetab=(e)=>{
        
        if(accountType!==e)
        {
            setType(e);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const toastId=toast.loading('loading');
            setLoading(true)
            // if(password !== confirmPassword)
            // {
            //     toast.error("Passwords Do Not Match");
            //     return;
            // }
            try{
                    const data={...formData,accountType};                    
                    
                    const user=await axios.post(process.env.REACT_APP_BACKEND_URL+'/auth/signup',{
                        Name:formData.Name,
                        email:formData.email,
                        password:formData.password,
                        AccountType:accountType
                    });

                    if(!user.data.success)
                    {
                        throw new Error(user.data.message);
                    }
                    
                    toast.success(user.data.message);
                    navigate('/login');
            }catch(error)
            {
                
                console.log('error',error);
                toast.error(error.response.data.message);
            }
            toast.dismiss(toastId);
            setLoading(false);
        

        
    }

    return (
        <div className="w-10/12 h-[80vh] mx-auto mt-[100px] flex justify-center items-center ">

                <div className="flex md:flex-row flex-col md:gap-20 items-center  ">
                    <div className="px-3 bg-slate-950 py-20 lg:py-0 w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
                        <div className="text-white space-y-8 my-auto xl:w-10/12">
                            <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold">
                                Add Items and Buying Products
                            </h1>
                            
                        </div>
                    </div>
                    <div className="px-3 w-full lg:w-1/2 flex items-center">
                            
                            <form
                                className="bg-white m, rounded-lg shadow-hard-gray"
                                onSubmit={handleSubmit}  >
                                <div className="p-8 text-sm flex flex-col gap-10  space-y-6">
                                <div className=' w-[65%] sm:w-[44%] border-2 h-11 flex items-center border-slate-500 text-gray-300 bg-slate-500  gap-x-1 my-5 rounded-full '>
                                    <label htmlFor="Student"  className={`text-[16px] sm:text-[18px] border-slate-500 border-2 flex items-center h-full  px-2 rounded-full ${accountType==='Student' && 'bg-slate-600 rounded-full'}`} onClick={(e)=>changetab('Student')}>Student
                                    <input type="radio"  name="Student" id="Student" className='[all:unset]'/></label>
                                    <label htmlFor="Admin" className={`text-[16px] sm:text-[18px] border-l border-2 h-full flex items-center border-slate-500 rounded-full bg-slate-500 px-2 ${accountType==='Admin' && 'bg-slate-600 rounded-full'}`} onClick={(e)=>changetab('Admin')}>Admin
                                    <input type="radio"  name="Admin" id="Admin" className='[all:unset]' /></label>
                
                                 </div>
                                    
                                    <input type="text" name="Name" id="Name" value={formData.Name} onChange={handleonchange} required placeholder="Enter Your Name" className=" outline-none  border-b-[2px] border-gray-300 px-1 text-gray-700 text-xl py-1 "/>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleonchange} placeholder="Enter Your Email" className=" outline-none  border-b-[2px] border-gray-300 px-1 text-gray-700 text-xl py-1 "/>
                                    <input type="password" name="password" id="password" required value={formData.password} onChange={handleonchange} placeholder="Enter Your Password" className=" outline-none  border-b-[2px] border-gray-300 px-1 text-gray-700 text-xl py-1 " />
                                                
                                                
                                        
                                    <input
                                        type="submit"
                                        value={loading?'Loading':'Signup'}
                                        className="bg-violet-900 text-xl w-[84%] mx-auto  cursor-pointer  text-white py-3 rounded-md text-center  uppercase border-b-[3px]"
                                    />
                                    <p className="text-center text-neutral-grayish-blue-500 text-[12px]">
                                        By clicking the button, you are
                                        agreeing to our
                                        <a
                                            className="text-primary-red-500 font-semibold ml-1"
                                            href="/"
                                            onClick={e =>
                                                e.preventDefault()
                                            }
                                        >
                                            Terms and Services
                                        </a>
                                    </p>
                                </div>
                            </form>
                        
                    </div>
                </div>
                
        </div>
    );
}

export default Signup;
