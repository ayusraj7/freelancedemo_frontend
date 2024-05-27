import React,{useState} from 'react'
import { IoMdAdd } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import axios from 'axios';
import toast from 'react-hot-toast'

const UploadPhoto = ({setUrl}) => {
    const[file,setFile]=useState(null);
    const[loading,setLoading]=useState(false);
    const token=JSON.parse(localStorage.getItem('token'));

    const uploadPhoto=async(e)=>{
        e.preventDefault();
        
        if(!file)
        {
            toast.error('Please Select Image First');
            return;
        }
        const toastId=toast.loading('loading');
        setLoading(true);
        console.log('file',file);
        try{
            let formData=new FormData();
            formData.append('token',token);
            formData.append('image',file);
            

            const user=await axios.post(process.env.REACT_APP_BACKEND_URL+'/admin/uploadPhoto',formData,{headers: {
                "Content-Type": "multipart/form-data",
              }});
            console.log('user',user.data.url);
            console.log('user',user.data.url);
            setUrl(user.data.url);
            
            
            toast.success('Image Uploaded Successfully');

        }catch(error){
            console.log('error',error);
            toast.error(`Photo Not Uploaded.Try Again`)
        }
        setLoading(false);
        toast.dismiss(toastId);
    }
  return (
    <div className='sm:w-[72%] md:w-[56%] rounded-sm px-10 py-3 pb-10 mx-auto bg-neutral-600 h-auto rouned-sm mt-[50px]'>
        <h1 className='text-2xl text-gray-300 text-center'><CiImageOn className='inline mx-1'/>Image</h1>
        {   
           file && <img src={URL.createObjectURL(file)} className='h-[250px] w-full mt-4 rounded-md'/>
        }
        <form className='flex justify-between mt-5 px-3' onSubmit={uploadPhoto}>
            <div>
                <label htmlFor="img" ><IoMdAdd className='h-[30px] w-[30px] cursor-pointer rounded-full border border-white' size={30}/></label>
                <input type="file" name="" id="img" className=' hidden' onChange={(e)=>setFile(e.target.files[0])}  />
            </div>
            <button className='cursor-pointer hover:bg-orange-600 hover:text-white transition-all duration-200 text-orange-600 font-semibold bg-yellow-300 px-5 rouned-sm' >Upload</button>
        </form>
    </div>
  )
}

export default UploadPhoto