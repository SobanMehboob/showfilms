import React, { useRef, useState, useEffect } from 'react';
import '../styleSheet/HeroSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import mainImg from '../assests/mainImage.avif';
import { Link } from 'react-router-dom';

AOS.init();

export default function HeroSection() {

  const [currentWord, setCurrentWord] = useState(0);
  const words = ['stylish', 'durable', 'comfortable']; // Array of words for h1
  
    useEffect(() => {
      const wordInterval = setInterval(() => {
        setCurrentWord((prevWord) => (prevWord + 1) % words.length);
      }, 2000); // Change word every 2 seconds
  
      return () => clearInterval(wordInterval); // Clean up the interval
    }, []);

  return (
    <>
      <section className="Hero-Section" id="Hero-Section">
       

        <main>
          <div className='main'>
            <div className='main-left' data-aos="zoom-in">
              <h1 className='main-heading'>
                This shoe is <span className="changing-word">{words[currentWord]}</span>
              </h1>
              <p className='main-para para-one'>Experience the perfect combination of fashion and comfort with our latest shoe collection.</p>
              <p className='main-para para-two'>Whether you're looking for style, durability, or comfort, our shoes have it all.</p>
             
             
              <button className='main-btn'>
                
                <Link to="/product">More</Link>
                </button>

              <button className='main-btn' >
              <Link to="/contact">Contact us</Link>
                </button>
                
            </div>

            <div className='main-right' data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1000">
              <img className='main-image' 
              src={mainImg} />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
