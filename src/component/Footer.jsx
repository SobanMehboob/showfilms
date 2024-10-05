import React from 'react'
import '../styleSheet/Footer.css'
import logo from '../assests/headerLogo.png';
import { FaFacebook,FaInstagram,FaGoogle,FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer=()=>{

    return(
        <>
        <section className='footer' id='footer'>
        <div className='footer-main'>

            <div className='part' id="img-part">
            <img className="Nav-image"  src={logo} alt="Logo" />
            <h1 className='footer-heading'>Fila More</h1>
           </div>

           <div className='part'>
<p className='footer-para'>comfort</p>
<p className='footer-para'>luxury</p>
<p className='footer-para'>style</p>
</div>

<div className='part'>
    <p className='footer-para'>afforable price</p>
    <p className='footer-para'>custome made</p>
</div>

<div className='part'>
<p className='footer-para'>showcase</p>
<p className='footer-para'>widgetkit</p>
<p className='footer-para'>support</p>
</div>

<div className='part'>
<p className='footer-para'><Link to="/">Home</Link></p>
<p className='footer-para'><Link to="/product">Products</Link></p>
<p className='footer-para'><Link to="/review">Reviews</Link></p>
<p className='footer-para'><Link to="/contact">Contact</Link></p>
    
    

</div>
            </div> 

           <hr />

            <div className='part-under'>
               <div className='footer-icon facebook'> <FaFacebook /></div>
               <div className='footer-icon insta'> <FaInstagram /></div>
               <div className='footer-icon twitter'> <FaTwitter /></div>
               <div className='footer-icon google'><FaGoogle /></div> 

               

</div>
<div className='footer-end'>
<p>
                @copyright All Rights Reserved
               </p>
               </div>
        </section>        
        </>
    )
}

export default Footer