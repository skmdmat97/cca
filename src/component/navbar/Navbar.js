import React from 'react';
import arrow from '../../assets/arrow.svg'
import './VerticalNavbar.css';
import icon from '../../assets/Group 1061.svg'
const VerticalNavbar = () => {
  return (<>
    <div className="vertical-navbar">
      <ul className="nav flex-column">
       
            <li className="nav-item"><a className="nav-link" href="#"><p>Device Profile</p><img src={arrow}/></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><p>Site Specification</p><img src={arrow}/></a></li>
            <li className="nav-item"><a className="nav-link" href="/network"><p>Network Specification</p><img src={arrow}/></a></li>
            <li className="nav-item"><a className="nav-link" href="/"><p>RU Profile</p><img src={arrow}/></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><p>DU Profile</p><img src={arrow}/></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><p>CU Profile</p><img src={arrow}/></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><p>Hardware Profile</p><img src={arrow}/></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><p>oCst Profile</p><img src={arrow}/></a></li>
      
         </ul>
         
    </div>


    </>
  );
};

export default VerticalNavbar;
