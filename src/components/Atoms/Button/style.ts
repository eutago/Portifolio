import styled from 'styled-components';

export const ButtonSC = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 0.6rem;
  padding: 0.7rem 1.2rem;
  font-size: 1.3rem;
  text-align: center;
  color: ${(props) => props.theme.colors.light[1]};
  font-weight: ${(props) => props.theme.font.weight.semibold};
  border: 2px solid ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.time};

  &:hover {
    padding: 1rem;
  }
`;
