import React from 'react';
import { Grid, Logo, Icon } from '../../Atoms';
import { Navigation } from '../../Molecules';

export const Header = () => {
  return (
    <header>
      <Grid flow='column' align='center' justify='space-between'>
        <Logo />
        <Navigation />
        <Icon />
      </Grid>
    </header>
  );
};
