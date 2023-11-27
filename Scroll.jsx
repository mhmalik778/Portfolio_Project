import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FaArrowAltCircleUp size={30} />
        </button>
      )}
    </div>
  );
};

export default Scroll;
