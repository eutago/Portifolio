import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import { Grid } from '../Grid';

const Bar = styled.div`
  width: 3px;
  height: 2rem;
  background-color: ${(props) => props.theme.colors.secondary};
  filter: drop-shadow(0 0 0.4em ${(props) => props.theme.colors.secondary});
`;

const Typing = styled.div`
  font-weight: ${(props) => props.theme.font.weight.semibold};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const TypedAnimation = () => {
  return (
    <Grid flow='column' align='center' justify='start' gap='sm'>
      <Bar />
      <Typing>
        <TypeAnimation
          sequence={['Desenvolvedor Front-End', 2000, 'Desenvolvedor Freelancer', 2000, () => {}]}
          wrapper='div'
          cursor={true}
          repeat={Infinity}
        />
      </Typing>
    </Grid>
  );
};
