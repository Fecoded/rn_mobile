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

const H5TextDark = styled(Text)`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.ui.dark};
`;

export const SupportScreen = (props: any) => {
  return (
    <Container>
      <TopAreaView navigation={props.navigation} />
      <ContentAreaView flex={4}>
        <Spacer size="xl" />
        <ScrollViewContainer>
          <Center>
            <H5TextDark>Support</H5TextDark>
            <Spacer size="large" />
            <ImageView
              source={require('../../../assets/Picture13.png')}
              width="60px"
              height="60px"
            />
          </Center>

          <Spacer size="large" />
          <CaptionText>
            Donate to Support the Peter Obi Campaign movement using the details
            below:
          </CaptionText>
          <Spacer size="large" />
          <CaptionText>Zenith Bank</CaptionText>
          <Spacer size="small" />
          <CaptionText>2999999980</CaptionText>
          <Spacer size="medium" />
          <CaptionText>PO SUPPORT ORGANIZATION</CaptionText>
          <Spacer size="xl" />
          <CaptionText>OR</CaptionText>
          <Spacer size="xl" />
          <Button onPress={() => props.navigation.navigate('DonateScreen')}>
            <H5Text>Click here to Donate</H5Text>
          </Button>
        </ScrollViewContainer>
      </ContentAreaView>
    </Container>
  );
};
