import React from 'react';
import { ButtonSC } from './style';
import { MdOutlineFileDownload } from 'react-icons/md';

export const Button = () => {
  return (
    <ButtonSC>
      <MdOutlineFileDownload /> Download CV
    </ButtonSC>
  );
};
