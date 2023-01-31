import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Grid } from '../index';
import styled from 'styled-components';

const IconsDiv = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.colors.icons};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Icons = () => {
  return (
    <Grid gap='xs'>
      <IconsDiv>
        <FiInstagram size={31} />
      </IconsDiv>
      <IconsDiv>
        <FaGithub size={31} />
      </IconsDiv>
      <IconsDiv>
        <FaLinkedin size={31} />
      </IconsDiv>
    </Grid>
  );
};
