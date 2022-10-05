import React from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components';
import {Button} from '../../components/button/button.component';
import {BgImageView, ImageView} from '../../components/image/image.component';
import {Spacer} from '../../components/spacer/spacer.component';
import {CaptionText, Flex, LinkText} from './loginScreen';
import {Center} from './welcomeScreen';

export const H5Text = styled(Text)`
  font-size: ${props => props.theme.fontSizes.h4};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.ui.dark};
`;

export const CustomText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text.white};
`;

export const AuthInput = styled(TextInput)`
  width: 100%;
`;

export const ScrollViewContainer = styled(ScrollView).attrs(props => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 10,
  },
}))``;

export const ScrollViewDisabled = styled(ScrollView).attrs(props => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 10,
  },
}))``;

export const ChangePasswordScreen = (props: any) => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <BgImageView>
      <ScrollViewContainer>
        <Spacer size="xxl" />
        <Center>
          <ImageView
            source={require('../../../assets/Picture8.png')}
            borderRadius="100px"
            width="200px"
            height="200px"
          />
          <H5Text>Reset Password</H5Text>

          <Spacer size="medium" />
          <AuthInput
            mode="outlined"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Enter your password"
            onChangeText={p => setPassword(p)}
            outlineColor="none"
            selectionColor="none"
            activeOutlineColor="green"
            activeUnderlineColor="none"
            theme={{
              roundness: 30,
              colors: {
                primary: 'green',
                underlineColor: 'transparent',
                background: `#c4c4c4`,
              },
            }}
          />
          <Spacer size="medium" />
          <AuthInput
            mode="outlined"
            value={confirmPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Re-enter password"
            onChangeText={p => setConfirmPassword(p)}
            outlineColor="none"
            selectionColor="none"
            activeOutlineColor="green"
            theme={{
              roundness: 30,
              colors: {
                primary: 'green',
                underlineColor: 'transparent',
                background: `#c4c4c4`,
              },
            }}
          />
          <Spacer size="xl" />
          <Button onPress={() => props.navigation.navigate('LoginScreen')}>
            <CustomText>Submit</CustomText>
          </Button>
        </Center>
      </ScrollViewContainer>
    </BgImageView>
  );
};
