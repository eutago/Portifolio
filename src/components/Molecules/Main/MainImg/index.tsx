import React, { useEffect } from 'react';
import eumemo from '../../../../assets/eumemo.png';
import ScrollReveal from 'scrollreveal';

export const MainImg = () => {
  useEffect(() => {
    const config = {
      duration: 2500,
      distance: '60px',
      delay: 700,
      origin: 'top',
    };

    ScrollReveal().reveal('.mainImg', config);
  }, []);

  return (
    <div className='mainImg'>
      <img src={eumemo} alt='' style={{ width: '500px' }} />
    </div>
  );
};
