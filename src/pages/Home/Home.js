import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import Company from '../../component/company/Company'
import RuProfile from '../RU-profile/RuProfile'
const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Company/> 
      <div className='row m-0'>
       <div className='col-2'>
       <Navbar/>
       </div>
       <div className='col-10'>
       <RuProfile/>
       </div> 
      </div> 
    
    </div>
  )
}

export default Home
