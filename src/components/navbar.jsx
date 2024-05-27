import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

function Navbar() {
  const navigate=useNavigate();
  const userData=JSON.parse(localStorage.getItem('userData'));
  const [toggleMenu, setToggleMenu] = useState(false);
  const token=JSON.parse(localStorage.getItem('token'));
  const logout= ()=>{
   
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    toast.success("Logged Out");
    navigate('/');
  }

  return (
    <div className=" bg-slate-950 fixed top-0 h-[70px] border-b border-slate-900 z-40 w-full pt-5 ">
      <nav className="">
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 relative">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16  ">
              {/* logo */}
              
                <a href="/" className="flex gap-1 font-bold text-slate-300 items-center " >
                  <PaperAirplaneIcon className="w-6 text-primary" />
                  <span>Coder.io</span>
                </a>
              
              {/* primary */}
                <div className="hidden lg:flex gap-8 items-center ">
                  <a href="/" className=""> Home </a>
                  {
                    userData?.AccountType==='Admin' && 
                    <>
                       <p onClick={()=>{navigate(`/admin-items/${userData._id}`)}}>Your Items</p>
                       <p onClick={()=>{navigate('additem')}}>Add Item</p>
                    </>
                  }
                  <a href="#">Contact Us</a>
                  
                  
                </div>
                {
                  !token?<div className='hidden absolute sm:flex justify-between gap-[1.2rem] text-white right-10 '>  
                  <Link to='/login'  className=' transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500'>Login</Link>
                  <Link to='/signup'  className='  transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500'>SignUp</Link>
                </div>:
                <div className='absolute flex justify-between gap-[1.2rem] text-white right-10 '>
                  <p onClick={logout} className=' transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500'>LogOut</p>
                </div>
                }
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full   bg-slate-500 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8 mt-5">
            <div className="flex flex-col gap-8 font-bold tracking-wider text-slate-300">
              <a href="/feature" className="border-l-4 border-gray-600">
                Features
              </a>
              <a href="/">Home</a>
              <a href="#">ContactUs</a>
              {
                    userData?.AccountType==='Admin' && 
                    <>
                       <p onClick={()=>{navigate(`/admin-items/${userData._id}`)}}>Your Items</p>
                       <p onClick={()=>{navigate('/additem')}}>Add Item</p>
                    </>
              }
              {
                !token ? <div className='flex flex-col w-fit gap-6 font-extralight'>
                <Link to='/login'  className=' transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500'>Login</Link>
                <Link to='/signup'  className=' transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500'>SignUp</Link>
              </div>:
               <div className=' flex justify-between gap-[1.2rem] text-white '>
                 <p  onClick={logout} className=' transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500'>LogOut</p>
               </div>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
