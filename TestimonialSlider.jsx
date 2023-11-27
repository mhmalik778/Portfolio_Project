import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';


const TestimonialSlider = () => {
  useEffect(() => {
    if ($) {
      $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        transitionStyle: "backSlide",
        autoPlay: true,
      });
    }
  }, []); 
  return (
    <div className="testimonial-section">
    </div>
  );
};

const Testimonial = ({ imgSrc, name, post, description }) => (
  <div className="testimonial-item">
  </div>
);

export default TestimonialSlider;
