import React from 'react'
import swiggyLogo from '../../assets/images/swiggy3.svg';  // Corrected import path
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';
 


function CheckOutTopBar() {
 
  return (
    <>
    <section className='checktopBarSection'>
      <div className='checktopBarSectionLogo'>
       <div className='swiggyPngLogodiv'> 
       <Link to='/landing' className='link'>
              <img className='swiggyPngLogo' src={swiggyLogo} alt="Swiggy-1" />
       </Link>
       
      </div>
        <div className='checkOutHeading'>SECURE CHECKOUT</div>
      </div>
      <div className='CheckOutTopBars-1'>
               <Link to='/HelpPage' className='link'>
                {/* to='https://www.swiggy.com/support'  */}
              <div className='helpBox'>
                 <IoHelpBuoyOutline className=' helpIcon'  />
                 <div className='helpIconString'>Help</div>
              </div>
              </Link>


         
              <div className="logindropdown">
          <Link to='/MyAccount' className='link'>
            <div className='logInBox'>
              <div className='person'><BsPerson /></div>
              <div className='logins'><span>MANOJ</span></div>
            </div>
          </Link>
          <div className="logindropdown-content">
            <Link  className='link' to="/MyAccount">Profile</Link>
            <Link  className='link' to="/CheckOut">Orders</Link>
            <Link  className='link' to="/landing">Favourites</Link>
            <Link  className='link' to="/" >
                     Logout
             </Link>
          </div>
        </div>
      </div>
      </section>


   
    </>
   )
}

export default CheckOutTopBar