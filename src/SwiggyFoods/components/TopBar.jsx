import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsBagPlus } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import swiggyLogo from '../../assets/images/swiggy3.svg';
import { ProductContext } from '../../context/ProductContext';



const TopBar = ({ inputRefHandle }) => {
  const { totalCost } = useContext(ProductContext);
  const handleSearchClick = () => {
    inputRefHandle(); // Trigger the focus after navigation
  };

  let clientAddress = (clientName => clientName ? clientName.slice(0, 45) : "No clientName found in localStorage.")(
      localStorage.getItem("clientAddress")
);

  return (
    <section className='topBarSection' >
      <div className="companyTitle">
        {/* <div className='swiggyPngLogodiv'>
          <Link to='/' className='link'>
            <img className='swiggyPngLogo' src={swiggyLogo} alt="Swiggy-1" />
          </Link>
        </div> */}  
          <div className='swiggyPngLogodiv'>
            <a href='#itemSectionGallery' className='link'>
               <img className='swiggyPngLogo' src={swiggyLogo} alt="Swiggy-1" />         
              </a>
            </div>
      
            <Link to='/MyAccount' className='link'>
              <div className='topBarAddressBox'>
                 <div>
                   <div className='HOME'>HOME</div>
                 </div>
                 <div className='topBarAddress'>
                  <div>{clientAddress}</div>
                 </div>
               </div>            
          </Link>
          </div>
      <div className='topBarLinks'>
        <Link to='/search' className='link' onClick={handleSearchClick}>
          <div className='searchIconBox'>
            <BiSearch className='searchIcon' />
            <div className='searchIconString'>Search</div>
          </div>
        </Link>

        <Link to='/OffersPage' className='link'>
          <div className='offersIconBox'>
            <BiSolidOffer className='offersIcon' />
            <div className='offersIconString'>Offers</div>
          </div>
        </Link>

        <Link to='/HelpPage' className='link'>
       {/* to='https://www.swiggy.com/support'  */}
          <div className='helpBox'>
            <IoHelpBuoyOutline className='helpIcon' />
            <div className='helpIconString'>Help</div>
          </div>
        </Link>

        <div className="dropdown">
          <Link to='/CheckOut'>
            <BsBagPlus className='cartIcon' />
            <div className={totalCost === 0 ? "" : "dotB"}></div>
            {/* <div className="dropdown-content">
              <a href="#option1">Profile</a>
              <a href="#option1">Orders</a>
              <a href="#option2">Favourites</a>
              <a href="#option3">Logout</a>
            </div> */}
          </Link>
        </div>

        <div className="logindropdown">
          <Link to='/MyAccount' className='link'>
            <div className='logInBox'>
              <div className='person'><BsPerson /></div>
              <div className='logins'><span>MANOJ</span></div>
            </div>
          </Link>
          <div className="logindropdown-content">
            <a href="/MyAccount">Profile</a>
            <a href="/CheckOut">Orders</a>
            <a href="/landing">Favourites</a>
            <a href="/RigesterAndLogin">Logout</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;

