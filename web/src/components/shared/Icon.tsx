import * as React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  type?: IconStyle;
  size?: string;
}

type IconStyle = 'regular' | 'solid' | 'brand';

const icons: Record<IconStyle, string> = {
  brand: 'lab',
  regular: 'lar',
  solid: 'las'
};

const I = styled.i<{ fontSize: string }>`
  margin: auto 0.5em;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 'auto')};
`;

const Icon = ({ type = 'solid', size = 'auto', name }: Props): JSX.Element => {
  return <I className={`${icons[type]} la-${name}`} fontSize={size}></I>;
};

export default Icon;
