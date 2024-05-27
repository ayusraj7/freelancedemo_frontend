import './App.css';
import Home from './page/Landing/Home';

import LoginPage from './page/auth/Login';
import Signup from './page/auth/Signup';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from './components/navbar';
import { ToastContainer } from 'react-toastify';
import ItemContainer from './page/ItemContainer';
import AdminItems from './page/auth/AdminItems';
import AddItem from './page/AddItem';

function App() {
  const navigate=useNavigate();
  const userData=JSON.parse(localStorage.getItem('userData'))
  const token=JSON.parse(localStorage.getItem('token'))
  
  const accountType=userData?.AccountType;
  return (
    <div className="w-[100vw] app">
      <Navbar/>
      <Routes>
         
         <Route path='/' element={<Home/>}/>
         {
           !token && <>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/signup' element={<Signup/>}/>
           </>
         } 
         {
           token  && accountType === 'Student' && 
           <Route path='/items/:all' element={<ItemContainer/>}/>
         }
         {
           token && accountType === 'Admin' && 
           <>
             <Route path='/admin-items/:id?' element={<AdminItems/>}/>
             <Route path='/additem' element={<AddItem/>}/>
           </>
           
         }

      </Routes>
   
   
    </div>
  );
}


export default App;