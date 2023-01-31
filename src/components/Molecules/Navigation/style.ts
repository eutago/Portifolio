import styled from 'styled-components';

export const Navbar = styled.nav`
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.font.weight.semibold};
  font-size: 1.1rem;

  a {
    cursor: pointer;
    position: relative;
    z-index: 1;
  }

  a:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  a:before {
    content: '';
    background-color: ${(props) => props.theme.colors.secondary};
    width: 0;
    height: 7px;
    z-index: -1;
    border-radius: 0.6rem;
    position: absolute;
    top: 12px;
    left: -9px;
    transition: ${(props) => props.theme.transitions.time};
  }

  a:hover:before {
    width: 100%;
  }
`;
