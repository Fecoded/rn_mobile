import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {BgImageView} from '../../../components/image/image.component';

const ContentArea = styled(View).attrs(props => ({}))<{flex: number}>`
  flex: ${props => props.flex};
`;

export const ContentAreaView = ({flex, children}: any) => {
  return (
    <ContentArea flex={flex}>
      <BgImageView>{children}</BgImageView>
    </ContentArea>
  );
};

ContentAreaView.defaultProps = {
  flex: 3,
};
