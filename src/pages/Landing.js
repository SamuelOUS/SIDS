import React, { useEffect } from 'react';
import '../styles/Landing.css';


const Landing = () => {
  useEffect(() => {
    document.body.classList.add('landing-body');
    return () => {
      document.body.classList.remove('landing-body');
    };
  }, []);

};

export default Landing;
