import React from 'react'
import icon from '../../assets/Group 1061.svg'
import circle from '../../assets/Group 1062.png'
import menu from '../../assets/Group 1060.png';
const Header = () => {
  return (<>
    <div className='row m-0'>
      <div className='col-2 py-3 bgw'>
        <div className='d-flex logo'>
         <img src={menu}/> 
         <h3>DELLEMC</h3>
        </div>
      </div> 
     <div className='col-10 header d-flex align-items-center justify-content-flex-end py-3 '>
        <div className='d-flex header-content '>
        <img src={circle}/>
        <img src={icon}/>
      <p>JOHN SMITH</p>
    </div>
        </div>
       
        </div>
       </> 
  )
}

export default Header
