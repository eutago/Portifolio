import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, NavItem } from '../../Atoms';
import { Navbar } from './style';

export const Navigation = () => {
  return (
    <Router>
      <Navbar>
        <Grid flow='column' gap='lg'>
          <NavItem to='/inicio' text='Início' />
          <NavItem to='/sobre' text='Sobre' />
          <NavItem to='/habilidades' text='Habilidades' />
          <NavItem to='/servicos' text='Serviços' />
          <NavItem to='/contato' text='Contato' />
        </Grid>
      </Navbar>
    </Router>
  );
};
