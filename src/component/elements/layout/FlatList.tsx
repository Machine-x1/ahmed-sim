import type { ReactElement } from 'react';
import { cloneElement } from 'react';

import Container from '../Container';

interface FlexListProps {
  layout: 'flex';
  flexDirection: 'row' | 'column';
}

interface GridListProps {
  layout: 'grid';
  cols: number;
}

export interface RenderProps<T> {
  children: ReactElement<{ element: T; key: number } & any>;
  item: Array<T>;
  gap: number;
}
type LayoutListProps<T> = RenderProps<T> & (FlexListProps | GridListProps);

const FlatList = (props: LayoutListProps<{ id: number }>) => {
  const wrapperGridStyle = {
    display: props.layout,
    gridTemplateColumns: `repeat(${
      (props.layout === 'grid' && props.cols) || '3'
    }, minmax(0, 1fr))`,
    gap: `${props.gap}px` || '10px',
  };

  const wrapperFlexStyle = {
    display: props.layout,
    ...(props.layout === 'flex' &&
      props.flexDirection && { flexDirection: props.flexDirection }),
    gap: `${props.gap}px` || '10px',
  };

  const renderdList = props.item.map((element) => {
    return cloneElement(props.children, { key: element.id, item: element });
  });

  return (
    <Container
      style={props.layout === 'grid' ? wrapperGridStyle : wrapperFlexStyle}
      bgColor=""
    >
      {renderdList}
    </Container>
  );
};

export default FlatList;
