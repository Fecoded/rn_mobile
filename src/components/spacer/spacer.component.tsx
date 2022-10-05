import React from 'react';
import {View} from 'react-native';
import styled, {useTheme} from 'styled-components';

const sizeVariant: any = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
  xxxl: 6,
  xxxxl: 7,
};

const positionVariant: any = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position: any, size: number, theme: any) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled(View)<{variant: string}>`
  ${({variant}: any) => variant};
`;

export const Spacer = ({position, size, children}: any) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
