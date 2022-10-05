import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {Spacer} from '../../components/spacer/spacer.component';
import {ScrollViewContainer} from '../onboarding/registerScreen';
import {Center, Container} from '../onboarding/welcomeScreen';
import {H5Text} from './homeScreen';
import {ContentAreaView} from './utils/contentArea.utils';
import {TopAreaView} from './utils/topArea.utils';

export const CaptionText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.normal}
  color: ${props => props.theme.colors.ui.dark};
`;
export const BoldText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.bold}
  color: ${props => props.theme.colors.ui.dark};
`;

export const AboutPeterObiScreen = (props: any) => {
  return (
    <Container>
      <TopAreaView navigation={props.navigation} />
      <ContentAreaView flex={4}>
        <Spacer size="xl" />
        <ScrollViewContainer>
          <Center>
            <H5Text>About Peter Obi</H5Text>
            <Spacer size="large" />
          </Center>

          <CaptionText>
            <BoldText>Peter Gregory Obi,</BoldText> CON (born 19 July 1961) is a
            Nigerian businessman and politician who served as Governor of
            Anambra from March to November 2006, February to May 2007, and from
            June 2007 to March 2014. In May 2022, he became the Labour Party
            nominee for President of Nigeria in the 2023 presidential election.
          </CaptionText>
          <Spacer size="large" />
          <CaptionText>
            Obi was a businessman before he ventured into politics. According to
            himself, Obi started his life as a trader, being born into trading
            family before venturing into the corporate world. He held leadership
            positions in some private establishments. Some of the companies he
            served includes: Next International Nigeria Ltd, Chairman and
            Director of Guardian Express Mortgage Bank Ltd, Guardian Express
            Bank Plc, Future View Securities Ltd, Paymaster Nigeria Ltd, Chams
            Nigeria Ltd, Data Corp Ltd and Card Centre Ltd. He was the youngest
            chairman of Fidelity Bank Plc.
          </CaptionText>
          <Spacer size="large" />
          <CaptionText>
            Younger generations under 30 proved to be some of the biggest Obi's
            supporters ...
          </CaptionText>
        </ScrollViewContainer>
      </ContentAreaView>
    </Container>
  );
};
