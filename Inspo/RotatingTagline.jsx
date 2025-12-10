// RotatingTagline.jsx
// React + Tailwind rotating tagline for Amore hero section

import { useState, useEffect } from 'react';

const taglines = [
  "From running codes to writing code.",
  "From fractures to refactors.",
  "From AKIs to APIs.",
  "From admissions to permissions.",
  "From SOAP to CRUD.",
  "I learned some systems. Then I learned some more.",
  "The system is broken. I'm putting the heart back in healthcare.",
  "Medicine deserves its heart back — I'm here to return it.",
  "Integrating systems with systems.",
  "I learned their systems. Then I built my own.",
  "I didn't switch EMRs. I built one.",
  "If you can't beat the system… rewrite it."
];

export default function RotatingTagline() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setIsVisible(true);
      }, 500); // Wait for fade out
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60px] flex items-center justify-center overflow-hidden">
      <p
        className={`
          absolute
          text-lg md:text-xl
          font-light
          tracking-wide
          text-gray-400
          transition-all duration-500 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        `}
      >
        {taglines[index]}
      </p>
    </div>
  );
}

// ALTERNATIVE VERSION: Cross-fade (smoother)
export function RotatingTaglineCrossFade() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60px] flex items-center justify-center">
      {taglines.map((tagline, i) => (
        <p
          key={i}
          className={`
            absolute
            text-lg md:text-xl
            font-light
            tracking-wide
            text-gray-400
            transition-opacity duration-700 ease-in-out
            ${i === index ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {tagline}
        </p>
      ))}
    </div>
  );
}

// DELIGHTFUL VERSION: Gradient text with slide
export function RotatingTaglineGradient() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setIsVisible(true);
      }, 600);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60px] flex items-center justify-center overflow-hidden">
      <p
        className={`
          absolute
          text-lg md:text-xl
          font-light
          tracking-wide
          bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
          bg-clip-text text-transparent
          transition-all duration-600 ease-out
          ${isVisible 
            ? 'opacity-100 translate-y-0 blur-0' 
            : 'opacity-0 translate-y-8 blur-sm'}
        `}
      >
        {taglines[index]}
      </p>
    </div>
  );
}

// USAGE:
// <RotatingTagline />
// or
// <RotatingTaglineCrossFade />
// or
// <RotatingTaglineGradient />
