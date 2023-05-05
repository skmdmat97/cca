import React from 'react'
import print from '../../assets/Vector.png'
import pencil from '../../assets/Group 1058.png'
import menu from '../../assets/Group 1060.png';
import clock from '../../assets/Group.png'
const Company = () => {
  return (
    <div className='head d-flex align-items-center py-3 bgw'>
      <div className='ma-start'>
        <h5>Untitled Scenario</h5>
       <p className='d-flex'>Company Name : <p className='color-blue'> Project Name</p></p>
      </div>
    <div className='d-flex head-menu ma-end'>
    <img src={print}/>
    <img src={pencil}/>
    <img src={menu}/>
    <img src={clock}/>
    </div>
   </div>
  )
}

export default Company
