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

export const AboutLabourPartyScreen = (props: any) => {
  return (
    <Container>
      <TopAreaView navigation={props.navigation} />
      <ContentAreaView flex={4}>
        <Spacer size="xl" />
        <ScrollViewContainer>
          <Center>
            <H5Text>About Labour Party</H5Text>
            <Spacer size="large" />
          </Center>

          <CaptionText>
            Labour Party, formerly known as Party for Social Democracy (PSD) is
            one of the parties registered by the Independent National Electoral
            Commission (INEC).
          </CaptionText>
          <Spacer size="large" />
          <CaptionText>
            However even before the registration exercise, the Labour Party was
            an organization reality. This is more of given its antecedents,
            which derive from a rich heritage of progressive and labour-based
            intervention in national politics, dating back to the struggle/or
            national independence from British Colonialism.
          </CaptionText>
          <Spacer size="large" />
          <CaptionText>
            All the same, the Party appreciated INEC’S courage in submitting
            itself to the provisions of the Nigerian constitution and the rule
            of law on registration of parties.
          </CaptionText>
          <Spacer size="large" />
          <CaptionText>
            The party hereby acknowledges that INEC’s decision has opened a new
            chapter in the nation’s politics by removing the military imposed
            selective and restrictive multi-party system.
          </CaptionText>
        </ScrollViewContainer>
      </ContentAreaView>
    </Container>
  );
};
