import React from 'react';
import styled from 'styled-components';

const CubeSC = styled.div`
  width: 48px;
  height: 48px;
  border: 7px solid ${(props) => props.theme.colors.primary};
  animation: spin 2s infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Cube = () => {
  return <CubeSC></CubeSC>;
};
