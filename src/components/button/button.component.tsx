import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

const CustomButton = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  background-color: ${props => props.theme.colors.btn.red}
  color: ${props => props.theme.colors.text.white}
  padding: ${props => props.theme.space[3]}
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ArrowStyles = styled(View)`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Button = ({onPress, children}: any) => {
  return <CustomButton onPress={onPress}>{children}</CustomButton>;
};

export const BackButton = ({navigation}: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowStyles>
        <Icon size={50} name="arrow-left" color="#fff"></Icon>
      </ArrowStyles>
    </TouchableOpacity>
  );
};
