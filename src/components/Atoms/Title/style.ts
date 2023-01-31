import styled from 'styled-components';

export const TitleSC = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 4.2rem;
  font-weight: ${(props) => props.theme.font.weight.extrabold};
  margin: 0;
  padding: 0;

  p {
    color: ${(props) => props.theme.colors.secondary};
    margin: 11px 0 0 0;
  }
`;
