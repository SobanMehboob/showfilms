import React, { useRef, useState, useEffect } from 'react';
import '../styleSheet/HeroSection.css'
import { Link } from 'react-router-dom';
import logo from '../assests/headerLogo.png';
import { FaMoon, FaTimes, FaBars, FaSun } from 'react-icons/fa';
const Navbar=()=>{

    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);
   
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const initialBgColor = useRef('#f5f5f5'); 
    const initialTextColor = useRef(window.getComputedStyle(document.body).color);
  
    function handleNavbar() {
      navRef.current.classList.toggle('active');
      setIsNavOpen(!isNavOpen); // Toggle state to control buttons
    }
  
    function toggleDarkMode() {
      if (isDarkMode) {
        // Revert back to initial background and text colors
        document.body.style.backgroundColor = initialBgColor.current;
        document.body.style.color = initialTextColor.current;
      } else {
        // Set dark mode colors
        document.body.style.backgroundColor = "#1d1c1c";
        document.body.style.color = "white";
      }
      setIsDarkMode(!isDarkMode); // Toggle dark mode state
    }
  
   
    
    return(
        <>
         <header className="Hero-Header">
          <a href="">
            <img className="Nav-image" src={logo} alt="Logo" />
          </a>
          <nav ref={navRef} className="navbar">
  <ul className="nav-items">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/product">Products</Link></li>
    <li><Link to="/review">Reviews</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <button onClick={handleNavbar} className="btn-times nav-btn">
      <FaTimes />
    </button>
  </ul>
</nav>

          <div className="icon-container">
            <button onClick={toggleDarkMode} className="btn-moon">
              {isDarkMode ? <FaSun style={{ color: 'white' }} /> : <FaMoon />}
            </button>
            {!isNavOpen && (
              <button onClick={handleNavbar} className="btn-bars nav-btn">
                 {isDarkMode ? <FaBars style={{ color: 'white' }} /> : <FaBars style={{ color: 'black' }} />}
                {/* <FaBars /> */}
              </button>
            )}
          </div>
        </header>
        </>
    )
}

export default Navbar