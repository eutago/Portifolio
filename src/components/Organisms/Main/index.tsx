import React from 'react';
import { Grid, Icons } from '../../Atoms';
import { MainText, MainImg } from '../../Molecules/index';

export const Main = () => {
  return (
    <Grid flow='column' justify='space-between' align='center'>
      <Icons />
      <MainText />
      <MainImg />
    </Grid>
  );
};
