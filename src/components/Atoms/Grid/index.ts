import styled from 'styled-components';

import type { IGridProps } from './types';

export const Grid = styled.div<IGridProps>`
  display: grid;
  justify-content: ${(props) => props?.justify};
  justify-items: ${(props) => props?.justify};
  align-content: ${(props) => props?.align};
  align-items: ${(props) => props?.align};
  grid-auto-flow: ${(props) => props?.flow};
  width: 100%;
  gap: ${(props) => (props?.gap ? props?.theme?.spacing?.[props?.gap] : 0)};
`;
