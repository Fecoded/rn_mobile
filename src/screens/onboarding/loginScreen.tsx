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

export const CaptionText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.normal}
  color: ${props => props.theme.colors.ui.dark};
  text-align: center;
`;

export const LinkText = styled(Text)`
   font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.bold}
  color: ${props => props.theme.colors.bg.primary};

  text-align: center;
`;

export const Flex = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const LoginScreen = (props: any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 5}}>
      <BgImageView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Spacer size="xxl" />
          <Center>
            <ImageView
              source={require('../../../assets/Picture8.png')}
              borderRadius="100px"
              width="200px"
              height="200px"
            />
            <H5Text>Login</H5Text>
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
            <Flex>
              <CaptionText>Forgot Password ? Reset it </CaptionText>
              <LinkText
                onPress={() =>
                  props.navigation.navigate('ResetPasswordScreen')
                }>
                here
              </LinkText>
            </Flex>
            <Spacer size="xl" />
            <Button onPress={() => props.navigation.replace('HomeScreen')}>
              <CustomText>Login</CustomText>
            </Button>
            <Spacer size="medium" />
            <Flex>
              <CaptionText>Don't have an account ? </CaptionText>
              <LinkText
                onPress={() => props.navigation.navigate('RegisterScreen')}>
                Register Now
              </LinkText>
            </Flex>
          </Center>
        </ScrollView>
      </BgImageView>
    </KeyboardAvoidingView>
  );
};
