import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {BgImageView} from '../../components/image/image.component';

export const BgContainer = styled(View)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  flex: 1;
`;

const SplashScreen = (props: any) => {
  React.useLayoutEffect(() => {
    const redirectToWelcomeScreen = setTimeout(
      () => props.navigation.replace('WelcomeScreen'),
      3000,
    );

    return () => {
      clearTimeout(redirectToWelcomeScreen);
    };
  });
  return (
    <>
      <BgContainer>
        <BgImageView />
      </BgContainer>
    </>
  );
};

export default SplashScreen;
