import React from 'react';
import '../styleSheet/HeroTwo.css';
import HeroTwoImage from "../assests/herotwoImage.jpg";
import { FaWalking, FaShoePrints, FaStar } from 'react-icons/fa';
import AOS from 'aos';
AOS.init();

const HeroTwo = () => {
    return (
        <>
            <section className='HeroTwo' id='HeroTwo'>
                {/* Updated section title */}
                <h1 className='herotwo-same' data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                  <span className='two-icon'> <FaWalking /></span> 
                     Discover Your Perfect Fit 
                     <span className='two-icon'> <FaWalking /></span> 
                </h1>

                <div className='main-herotwo'>
                    {/* Left section with the image */}
                    <div className='left-herotwo'  data-aos="zoom-in-right">
                        <img className="image-herotwo" src={HeroTwoImage} alt="Stylish shoes" />
                    </div>

                    {/* Right section with the content */}
                    <div className='right-herotwo' data-aos="zoom-in-down">
                        <h1 className='herotwo-heading'>
                            Walk with Confidence
                        </h1>
                        <p className='herotwo-para'>
                        <span className='print'> <FaShoePrints /></span>   
                             Step Into Comfort; Step Up Your Fashion Game; Unleash Your Shoe Fetish; Shoes that Speak Volume; Make Your Feet Happy
                        </p>
                        <p className='herotwo-para'>
                        <span className='print-two'>  <FaStar /></span>  
                         Style that Speaks Volumes; Footwear Crafted for You; Stand Out. Be Unique. Elevate Your Style; Footwear with a Twist; Dare to be Different
                        </p>
                    </div>
                </div>

                {/* Updated footer with an icon */}
                <h2 className='herotwo-same' data-aos="fade-up"
     data-aos-anchor-placement="top-center">
               <span className='print-new'><FaStar /> </span>     
                    Crafted for You, Walk in Style 
                  <span className='print-new'> <FaStar /></span> 
                </h2>
            </section>
        </>
    );
}

export default HeroTwo;
