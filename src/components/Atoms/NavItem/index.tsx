import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  text: string;
  to: string;
}

export const NavItem = (props: IProps) => {
  return <Link to={props.to}>{props.text}</Link>;
};
