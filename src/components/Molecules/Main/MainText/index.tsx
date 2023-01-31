import React, { useEffect } from 'react';
import { Grid, Cube, TypedAnimation, Title, Button } from '../../../Atoms';
import ScrollReveal from 'scrollreveal';

export const MainText = () => {
  useEffect(() => {
    const config = {
      duration: 2500,
      distance: '60px',
      delay: 600,
    };

    ScrollReveal().reveal('.mainText', config);
  }, []);

  return (
    <div className='mainText'>
      <Grid justify='start' gap='sm'>
        <Cube />
        <TypedAnimation />
        <Title />
        <Button />
      </Grid>
    </div>
  );
};
