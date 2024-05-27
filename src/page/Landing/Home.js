import React,{useState,useEffect} from 'react';
import img from '../../img/971.jpg';
import axios from 'axios'
import toast from 'react-hot-toast'
import Footer from '../../components/Footer';
import ItemContainer from '../ItemContainer';
const Home = () => {
  const [items,setItems]=useState(null);
  const [loading,setLoading]=useState(false);
  let i=0;
  const fetchItems=async()=>{
          
    try{     
            setLoading(true);
            const user=await axios.get(process.env.REACT_APP_BACKEND_URL+'/student/startingitem');
            
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
    <div className=''>
      <div className='w-11/12 lg:w-10/12 max-w-[1150px] mx-auto pt-[150px]'>
          <div className="flex justify-between w-full h-[400px]">

            <div className="relative bg-white rounded-lg w-full lg:w-[60%] shadow-md h-full">
              <img src={img} className="w-full h-full *:rounded-3" alt="" />
            </div>

            <div className=" lg:w-[40%] ml-8 hidden lg:flex flex-wrap gap-3">
              {
                 items?.map((val,index)=>(
                  <div className="w-[20%] h-[45%] lg:w-[48%] relative bg-white rounded-lg shadow-md">
                        <img src={val.img} className="w-full h-full" alt="" />
                  </div>
                ))
              }
            </div>

          </div>
    
  
          <ItemContainer/>
      </div>
      <Footer/>
      
    </div>
  );
};

export default Home;
