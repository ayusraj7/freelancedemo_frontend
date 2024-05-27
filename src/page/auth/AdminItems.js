import React from 'react'
import {useNavigate} from 'react-router-dom'
import ItemContainer from '../ItemContainer'
import {MdAdd} from 'react-icons/md'
const AdminItems = () => {
  
  const navigate=useNavigate();
  
  return (
    <div className='w-[100vw] mt-[100px]' >
        <div className='text-white min-h-[90vh] w-10/12 mx-auto max-w-[1150px] flex flex-col'>
           <div className='flex justify-between'>
            <h1 className='font-bold text-xl sm:text-3xl text-center  '>Items Created By You</h1>
            <div onClick={()=>navigate('/additem')} className='max-h-[45px] flex gap-1 items-center bg-yellow-300 rounded-sm px-3 py-1 text-orange-600' >
                <p>Add Item</p>
                <MdAdd/>
            </div>
           </div>
           <div>
             <ItemContainer/>
           </div>
        </div>
    </div>
  )
}

export default AdminItems