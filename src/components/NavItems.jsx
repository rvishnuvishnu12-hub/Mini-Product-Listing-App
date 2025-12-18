import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '.././assets/css/style.min.css';
import logo from '.././assets/images/logo/logo.png';
import '.././assets/css/icofont.min.css';
import '.././assets/css/animate.css';


const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);
    
//addevent listener
 window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
        setHeaderFixed (true);
    } else {
        setHeaderFixed (false);
    }
  })

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        {/* Header Top */}
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>  
            <div className='container'>
                <div className='header-top-area'>
            <Link to="/signup" className='lab-btn me-3'></Link>
            <Link to="/login">login</Link>
                </div>
            </div>
        </div>
        {/* Header Bottom */}
        <div className='header-bottom'>
            <div className='container'>
            <div className='header-wrapper'>
               {/* Logo */}
               <div className='log-sreach-acte'>
                <div className='logo'>
                    <Link to="/">
                    <img src={logo} alt="" />
                    </Link>

               </div>
               </div>
                {/* Menu area*/}
                <div className='menu-area'>
                    <div className='menu'>
                        <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            {/* <li><Link to="/about">About</Link></li> */}
                            {/* <li><Link to="/contact">Contact</Link></li> */}
                        </ul>
                    </div>
                    {/* sign in & login */}
                        <Link to="/signup" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                        <Link to="/login" className='d-none d-md-block'>Login</Link>

                    {/* menu toggle */}
                    <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                         <span></span>
                         <span></span>
                         <span></span>
                    </div>
                    {/* social toggle */}
                    <div className='ellepsis-bar d-md-none'
                    onClick={() => setSocialToggle(!socialToggle)}>
                        <i className="icofont-info-circle"></i>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems