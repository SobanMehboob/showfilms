import React, { useState } from "react";
import {productImgs} from "./Data.js";
import { FaEye, FaShareAlt } from "react-icons/fa";
import '../styleSheet/Products.css';
import AOS from 'aos';
AOS.init();
const Products = () => {
    const [fullScreenImage, setFullScreenImage] = useState(null);
    const [hoveredImage, setHoveredImage] = useState(null); // State for hover effect

    const handleShare = (image) => {
        if (navigator.share) {
            navigator.share({
                title: 'Check out this product',
                url: image
            }).catch((error) => console.error('Error sharing', error));
        } else {
            alert("Sharing is not supported in your browser.");
        }
    };

    return (
        <>
            <section className="product" id="product">
                
                {productImgs.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-card-image-container" data-aos="fade-up">
                            <img
                                src={hoveredImage === product.id ? product.hoverImage : product.image}
                                alt={`Product ${product.id}`}
                                className="product-image"
                                onMouseEnter={() => setHoveredImage(product.id)} // Set the hovered image
                                onMouseLeave={() => setHoveredImage(null)} // Reset on mouse leave
                            />
                            <div className="product-card-icons">
                                <FaEye
                                    className="product-icon"
                                    onClick={() => setFullScreenImage(product.image)}
                                />
                                <FaShareAlt
                                    className="product-icon"
                                    onClick={() => handleShare(product.image)}
                                />
                            </div>
                        </div>
                        <div className="product-info">
                            <h2>Product {product.id}</h2>
                            <p>{product.description}</p> {/* Show the description here */}
                        </div>
                    </div>
                ))}
            </section>

            {fullScreenImage && (
                <div className="fullscreen-overlay" onClick={() => setFullScreenImage(null)}>
                    <img src={fullScreenImage} alt="Full screen product" className="fullscreen-image" />
                </div>
            )}
        </>
    );
};

export default Products;
