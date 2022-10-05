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

export const AboutManifestoScreen = (props: any) => {
  return (
    <Container>
      <TopAreaView navigation={props.navigation} />
      <ContentAreaView flex={4}>
        <Spacer size="xl" />
        <ScrollViewContainer>
          <Center>
            <H5Text>Manifesto</H5Text>
            <Spacer size="large" />
          </Center>

          <CaptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus
            enim, facilisis at ex sit amet, ornare bibendum erat. Vestibulum
            consequat magna venenatis, tincidunt mauris at, porta nisl.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; In lobortis tempus orci, dapibus consectetur
            nisi bibendum nec. Ut porta finibus lacus, ac porttitor est
            consequat sit amet.
          </CaptionText>
          <Spacer size="large" />
          <CaptionText>
            Curabitur eget dui posuere, luctus ex nec, interdum lorem. Sed eu
            ipsum porttitor, rutrum tellus eget, vestibulum nibh. Nulla
            facilisi. Cras ut nisi erat. Praesent congue sem sed lacinia
            tincidunt. Integer porttitor, magna vitae interdum eleifend, lectus
            dolor finibus enim, sed fermentum sem ipsum quis velit. Praesent
            suscipit eu metus quis cursus. Donec et blandit neque, et tincidunt
            erat.
          </CaptionText>
          <Spacer size="large" />
          <CaptionText>
            Integer porttitor, magna vitae interdum eleifend, lectus dolor
            finibus enim, sed nnb jm fermentum sem ipsum quis velit. Praesent
            suscipit eu metus quis cursus. Donec et blandit neque, et tincidunt
            erat.
          </CaptionText>
        </ScrollViewContainer>
      </ContentAreaView>
    </Container>
  );
};
