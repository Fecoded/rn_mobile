import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Spacer} from '../../../components/spacer/spacer.component';
import {Flex} from '../../onboarding/loginScreen';

export const SmallCard = styled(View)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  width: 10px;
  height: 15px;
`;

export const CaptionText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.normal}
  color: ${props => props.theme.colors.ui.dark};
  text-align: center;
`;

export const Menu = ({onPress, text}: any) => {
  return (
    <Flex>
      <SmallCard />
      <Spacer position="right" size="xl" />
      <TouchableOpacity onPress={onPress}>
        <CaptionText>{text}</CaptionText>
      </TouchableOpacity>
    </Flex>
  );
};
