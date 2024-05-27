import React,{useState,useEffect} from 'react'

import ProductCart from '../components/productCart';
import { useLocation } from 'react-router-dom';

import axios from 'axios'
import toast from 'react-hot-toast'
const ItemContainer = () => {
  const id=useLocation().pathname.split('/')?.[2];
  
  
  const [items,setItems]=useState(null);
  const[loading,setLoading]=useState(true);

  let url=process.env.REACT_APP_BACKEND_URL+'/student/items'
 
  if(id?.length>4)
  {
    url=process.env.REACT_APP_BACKEND_URL+`/admin/admin-posts/${id}?`
  }
const fetchItems=async()=>{
          
          try{     
                  setLoading(true);
                  const user=await axios.get(url);
                  console.log('user',user.data.data);
                  setItems(user.data.data);
                  console.log('item',items);
                  setLoading(false);

          }catch(error)
          {
              console.log('error',error);
              toast.error(`Blogs can't fetched`)
          }
          
}

useEffect(()=>{
 fetchItems();
},[])

  return (
    <div className={`${id?.length >0 ?'w-10/12':'w-full'} mx-auto h-auto flex flex-col justify-center items-center ${id===undefined? 'mt-[50px]' : 'mt-[90px]'}`}>
            
              <h2 className='text-center mb-9 text-3xl '>Total Items:-</h2>
              <div className='flex gap-[35px] flex-wrap ml-1 justify-center mb-[100px] lg:ml-10'>
                  {
                    items?.map((val, _index)=>{
                        return (
                        <ProductCart val={val} key={_index}/>
                        )
                    })
                  }
              
              </div>
        </div>
  )
}

export default ItemContainer