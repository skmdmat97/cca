import React,{useState} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import { Network } from './pages/network/Network';
import Header from './component/header/Header';
import Company from './component/company/Company';
import RuProfile from './pages/RU-profile/RuProfile';
import Navbar from './component/navbar/Navbar'
function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Company/>
      <div className='row m-0'>
       <div className='col-2'>
       <Navbar/>
       </div>
       <div className='col-10'>
      <Routes>
       <Route path='/' element={<RuProfile/>}/>
       <Route path='/network' element={<Network/>}/>
      
      
      </Routes>
      </div> 
      </div> 
      </BrowserRouter>
    
  );
}

export default App;
