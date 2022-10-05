import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {Button} from '../../components/button/button.component';
import {ImageView} from '../../components/image/image.component';
import {Spacer} from '../../components/spacer/spacer.component';
import {ScrollViewContainer} from '../onboarding/registerScreen';
import {Center, Container} from '../onboarding/welcomeScreen';
import {H5Text} from '../onboarding/welcomeScreen';
import {CaptionText} from './menu';
import {ContentAreaView} from './utils/contentArea.utils';
import {TopAreaView} from './utils/topArea.utils';

export const BoldText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.bold}
  color: ${props => props.theme.colors.ui.dark};
`;

export const H5TextDark = styled(Text)`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.ui.dark};
`;

export const ContactUsScreen = (props: any) => {
  return (
    <Container>
      <TopAreaView navigation={props.navigation} />
      <ContentAreaView flex={4}>
        <Spacer size="xl" />
        <ScrollViewContainer>
          <Center>
            <H5TextDark>Contact Us</H5TextDark>
            <Spacer size="large" />
            <ImageView
              source={require('../../../assets/Picture14.png')}
              width="60px"
              height="60px"
            />
          </Center>

          <Spacer size="large" />
          <CaptionText>
            17. Nsiegbe close, 241 Road, off 24 Crescent, Gwarimpa
          </CaptionText>
          <Spacer size="xl" />
          <CaptionText>
            1008, Al Moosa Tower1 Sheikh Zayed Road Dubai-UAE
          </CaptionText>
          <Spacer size="xl" />
          <CaptionText>
            No. 29 Okeagbe Street, Off Samuel Ladoke Akintola Boulevard, Garki
            II, Abuja FCT.
          </CaptionText>
          <Center>
            <Spacer size="large" />
            <ImageView
              source={require('../../../assets/Picture15.png')}
              width="60px"
              height="60px"
            />
          </Center>
          <Spacer size="medium" />
          <CaptionText>
            (+234) 7047 388 160, (+234) 8181 567 708, {'\n'}(+234) 8105 554 894
          </CaptionText>
          <Center>
            <Spacer size="large" />
            <ImageView
              source={require('../../../assets/Picture16.png')}
              width="60px"
              height="60px"
            />
          </Center>
          <Spacer size="large" />
          <CaptionText>contact@labourparty.com.ng</CaptionText>
          <Spacer size="small" />
          <CaptionText>admin@labourparty.com.ng</CaptionText>
        </ScrollViewContainer>
      </ContentAreaView>
    </Container>
  );
};
