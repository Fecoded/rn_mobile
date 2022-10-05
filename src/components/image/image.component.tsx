import React from 'react';
import {Dimensions, Image, ImageBackground} from 'react-native';
import styled from 'styled-components';

const CustomImage = styled(Image).attrs(props => ({
  source: props.source,
  resizeMode: props.resizeMode,
}))<{width: string; height: string; border_radius: string}>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.border_radius};
`;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const ImageView = ({
  source,
  width,
  height,
  borderRadius,
  resizeMode,
}: any) => {
  return (
    <CustomImage
      source={source}
      width={width}
      height={height}
      border_radius={borderRadius}
      resizeMode={resizeMode}
    />
  );
};

ImageView.defaultProps = {
  resizeMode: 'contain',
  borderRadius: '0px',
};

export const BgImageView = styled(ImageBackground).attrs({
  source: require('../../../assets/Picture11.png'),
  resizeMode: 'contain',
  // width,
  // height: height + 50,
})`
  flex: 1;
  margin-right: 20px;
  margin-left: 20px;
`;
