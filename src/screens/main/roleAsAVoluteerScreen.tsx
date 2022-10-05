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

export const RoleAsAVoluteerScreen = (props: any) => {
  return (
    <Container>
      <TopAreaView navigation={props.navigation} />
      <ContentAreaView flex={4}>
        <Spacer size="xl" />
        <ScrollViewContainer>
          <Center>
            <H5Text>Your role as a Volunteer</H5Text>
            <Spacer size="large" />
          </Center>

          <CaptionText>
            Aenean at libero purus. Etiam ultrices euismod urna quis eleifend.
            Duis convallis magna id rhoncus laoreet. Aliquam sagittis ornare
            ligula, aliquet mollis leo scelerisque in. Cras vel nisl vel tellus
            pellentesque semper ac ac orci. Aliquam nec volutpat arcu. Curabitur
            vehicula, arcu eu dapibus ultrices, nulla ipsum laoreet neque, ut
            hendrerit mauris purus eu quam. Duis in justo at metus porttitor
            pellentesque ac id ipsum. Nam dictum erat quis bibendum venenatis.
            Integer quis placerat lorem. Donec eros quam, porttitor sit amet
            ultricies quis, viverra at tellus. Proin lacinia tristique elit, id
            mattis mi vulputate ac. Sed ac laoreet metus.
          </CaptionText>
        </ScrollViewContainer>
      </ContentAreaView>
    </Container>
  );
};
