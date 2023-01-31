export type TJustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';

export type TAlignContent = 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'initial' | 'inherit';

export interface IGridProps {
  flow?: 'row' | 'column';
  justify?: TJustifyContent;
  align?: TAlignContent;
  width?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl';
  gap?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}
