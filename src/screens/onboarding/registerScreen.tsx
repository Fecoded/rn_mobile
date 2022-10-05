import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
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

export const RegisterScreen = (props: any) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 5}}>
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
            <H5Text>Register to Voluteer</H5Text>
            <CaptionText>Let's do this together</CaptionText>
            <Spacer size="medium" />
            <AuthInput
              mode="outlined"
              value={name}
              textContentType="name"
              autoCapitalize="none"
              placeholder="Enter your name"
              onChangeText={p => setName(p)}
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
              value={email}
              textContentType="emailAddress"
              autoCapitalize="none"
              placeholder="Enter your Email"
              onChangeText={p => setEmail(p)}
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
              value={phone}
              textContentType="telephoneNumber"
              autoCapitalize="none"
              placeholder="Enter mobile number"
              onChangeText={p => setPhone(p)}
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
              placeholder="Enter your password again"
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
              <CustomText>Register</CustomText>
            </Button>
            <Spacer size="small" />
            <Flex>
              <CaptionText>Already have an account ? </CaptionText>
              <LinkText
                onPress={() => props.navigation.navigate('LoginScreen')}>
                Sign In
              </LinkText>
            </Flex>
          </Center>
        </ScrollViewContainer>
      </BgImageView>
    </KeyboardAvoidingView>
  );
};
