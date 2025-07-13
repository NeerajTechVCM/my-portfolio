import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = ({ topRef, scrollToTop, isAtTop }) => {
  return (
    <div
      className={`fixed bottom-10 right-6 md:bottom-16 md:right-10 z-50 ${
        isAtTop ? 'hidden' : 'block'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 md:p-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/30 hover:scale-110 hover:shadow-violet-500/40 transition-all duration-300"
        style={{
          boxShadow: '0 0 20px rgba(21, 174, 73, 0.4), 0 0 25px rgba(177, 100, 250, 0.4)',
        }}
      >
        <FaArrowUp className="text-lg md:text-xl" />
      </button>
    </div>
  );
};

export default ScrollButton;
