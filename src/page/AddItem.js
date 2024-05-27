import React,{useState,useEffect} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import UploadPhoto from './UploadPhoto'
import {useNavigate} from 'react-router-dom'

const AddItem = () => {
    const[url,setUrl]=useState(null);
    const navigate=useNavigate();
    const[loading,setLoading]=useState(false);
    const token=JSON.parse(localStorage.getItem('token'));
    const userData=JSON.parse(localStorage.getItem('userData'));
    const[formData,setFormData]=useState({
      name:"",
      description:"",
      price:"",
    })
  
  
    console.log('formData',formData);
  
    useEffect(()=>{
      
    },[])

    const handleChange=(event)=>{
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
       }
    
    
       const handleSubmit=async(e)=>{
        e.preventDefault();
        
        if(!url)
        {
          toast.error('First Upload Image');
          return;
        }
        setLoading(true);
        const toastId=toast.loading('loading');
        try{
        
          const user=await axios.post(process.env.REACT_APP_BACKEND_URL+'/admin/createItem',{
            img:url,
            name:formData.name,
            description:formData.description,
            price:formData.price,
            token
          }); 
          toast.success(user.data.message);
          navigate(`/admin-items/${userData._id}`)
          
        }catch(error){
          console.log('error',error);
          toast.error('Error in Creating Blog')
        }
        setLoading(false);
        toast.dismiss(toastId);
    
      }

  return (
    <div className='text-white mt-[100px] w-10/12 mx-auto '>
        <h1 className='text-3xl font-extralight '>Admin Add Item</h1>
        <UploadPhoto setUrl={setUrl}/>
        <form onSubmit={handleSubmit} className=' sm:w-[90%] md:w-[70%] flex flex-col mx-auto gap-10 '>
              
              <div className='bg-neutral-600 mb-[30px] mt-[30px] rounded-md flex flex-col gap-3 p-5 h-auto py-8 sm:w-[80%] mx-auto'>
                  
                <label htmlFor="name" className='lg:w-[85%] lg:mx-auto'>Name <input required type="text" name="name" id="name"  className='block mt-1 w-full  mx-auto px-2 py-1 rounded-sm focus:outline-1 focus:outline-orange-600 focus:border-none text-orange-600' placeholder='Enter Product Name' value={formData.name} onChange={handleChange}/></label>
                <label htmlFor="description" className='lg:w-[85%] lg:mx-auto'>Description <textarea required name="description" id="description" className='mt-1 h-[150px] px-2 py-1  w-full rounded-sm focus:outline-orange-600 focus:border-none text-orange-600' placeholder='Enter Description of Product' value={formData.description} onChange={handleChange}></textarea></label>
                <label htmlFor="price" className='lg:w-[85%] lg:mx-auto'>Price <input required type="number" name="price" id="price" className='mt-1 w-full px-2 py-1 rounded-sm focus:outline-1 focus:outline-orange-600 focus:border-none text-orange-600' placeholder='Enter Price' value={formData.price} onChange={handleChange} /> </label>
                <button type="submit" disabled={loading?true:false} className='border mt-2 border-gray-100 roudned-sm hover:bg-white hover:text-black font-semibold w-fit mx-auto px-2 py-1'>{loading?'Loading':'Add Item'}</button>
              </div>

            </form>
    </div>
  )
}

export default AddItem