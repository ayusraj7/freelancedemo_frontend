import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link, useLocation} from 'react-router-dom';
import img from "../img/971.jpg"


const ProductCart = ({val}) => {
  
  let location = useLocation();
  return (
    <>
    <div className=' px-3 py-3  h-[370px]  rounded-sm ring-1 ring-slate-700 w-[300px]  '>
      <Link to='' className="">
        <div className=''>
            <img src={val.img} className='object-cover rounded-lg lg:rounded-sm h-[180px] w-full' alt="product" />
        </div>
        <div className="product-details lg:mt-[20px]">
            <h6 className="brand text-center text-lime-400">{val.name}</h6>
          
            <p className='text-justify text-slate-500 text-sm'>{val.description}....</p>
            <p className='price text-center text-xl mt-4'>₹{val.price}</p>
         </div>
    </Link>
      </div>
      </>
  )
}

export default ProductCart