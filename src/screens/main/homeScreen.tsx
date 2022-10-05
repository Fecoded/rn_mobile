import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {BgImageView, ImageView} from '../../components/image/image.component';
import {Spacer} from '../../components/spacer/spacer.component';
import {Flex} from '../onboarding/loginScreen';
import {BgContainer} from '../onboarding/splashScreen';
import {Center, Container} from '../onboarding/welcomeScreen';
import {Menu} from './menu';
import {ContentAreaView} from './utils/contentArea.utils';

export const ImageWrapper = styled(View)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: -180px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const H5Text = styled(Text)`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.ui.dark};
`;

export const FlexStart = styled(View)`
  align-items: flex-start;
`;

export const HomeScreen = (props: any) => {
  return (
    <Container>
      <BgContainer>
        <ImageWrapper>
          <ImageView
            source={require('../../../assets/Picture8.png')}
            borderRadius="200px"
            width="220px"
            height="220px"
          />
        </ImageWrapper>
      </BgContainer>
      <ContentAreaView>
        <Spacer size="xxxxl" />
        <Center>
          <FlexStart>
            <H5Text>Welcome to PO Voluteer App</H5Text>
            <Spacer size="xl" />
            <Menu
              onPress={() => props.navigation.navigate('AboutPeterObiScreen')}
              text="About Peter Obi"
            />
            <Spacer size="large" />
            <Menu
              onPress={() => props.navigation.navigate('AboutYusufDattiScreen')}
              text="About Yusuf Datti Baba-Ahmed"
            />
            <Spacer size="large" />
            <Menu
              onPress={() =>
                props.navigation.navigate('AboutLabourPartyScreen')
              }
              text="About Labour Party"
            />
            <Spacer size="large" />
            <Menu
              onPress={() => props.navigation.navigate('AboutManifestoScreen')}
              text="Manifesto"
            />
            <Spacer size="large" />
            <Menu
              onPress={() =>
                props.navigation.navigate('AboutObiDatti2023Screen')
              }
              text="ObiDatti2023 Coalition"
            />
            <Spacer size="large" />
            <Menu
              onPress={() => props.navigation.navigate('RoleAsAVoluteerScreen')}
              text="Your role as a Volunteer"
            />
            <Spacer size="large" />
            <Menu
              onPress={() => props.navigation.navigate('SupportScreen')}
              text="Support"
            />
            <Spacer size="large" />
            <Menu
              onPress={() => props.navigation.navigate('ContactUsScreen')}
              text="Contact Us"
            />
            <Spacer size="large" />
            <Menu text="Subscribe to ObiDatti2023 YouTube" />
            <Spacer size="large" />
            <Menu
              onPress={() => props.navigation.navigate('LoginScreen')}
              text="Sign Out"
            />
          </FlexStart>
        </Center>
      </ContentAreaView>
    </Container>
  );
};
