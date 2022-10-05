import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {Spacer} from '../../components/spacer/spacer.component';
import {ScrollViewContainer} from '../onboarding/registerScreen';
import {Center, Container} from '../onboarding/welcomeScreen';
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

export const H5Text = styled(Text)`
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.ui.dark};
`;

export const AboutYusufDattiScreen = (props: any) => {
  return (
    <Container>
      <TopAreaView navigation={props.navigation} />
      <ContentAreaView flex={4}>
        <Spacer size="xl" />
        <ScrollViewContainer>
          <Center>
            <H5Text>About Yusuf Datti Baba-Ahmed</H5Text>
            <Spacer size="large" />
          </Center>

          <CaptionText>
            <BoldText>Yusuf Datti Baba-Ahmed,</BoldText> (born 7 July 1969) is a
            Nigerian economist and politician who served as Senator for Kaduna
            North from 2011 to 2012 and member of the House of Representatives
            from 2003 to 2007. A member of the Labour Party, he is the party's
            vice presidential nominee in the 2023 presidential election running
            alongside Peter Obi.
          </CaptionText>
          <Spacer size="large" />
          <CaptionText>
            From the prominent Baba-Ahmed family of Zaria, Baba-Ahmed graduated
            from the University of Maiduguri. After schooling, he worked in
            business and banking for several years before entering politics.
            Baba-Ahmed was elected as House of Representatives member for Zaria
            in 2003; while in the position, he became known for speaking out
            against corruption and the Third Term Agenda. After leaving office
            in 2007, Baba-Ahmed continued advocating for good governance while
            returning to his Baze business grouping and founding Baze
            University.
          </CaptionText>
        </ScrollViewContainer>
      </ContentAreaView>
    </Container>
  );
};
