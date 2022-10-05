import React from 'react';
import {Image, Text, View, Platform} from 'react-native';
import styled from 'styled-components';
import {Button} from '../../components/button/button.component';
import {ImageView} from '../../components/image/image.component';
import {Spacer} from '../../components/spacer/spacer.component';

export const Container = styled(View)`
  flex: 1;
  position: relative;
`;

export const RoundedCircle = styled(View)`
  background-color: #809e8b;
  position: absolute;
  left: -55;
  top: -10;
  border-radius: 50;
  width: 150px;
  height: 150px;
`;

export const BottomLogo = styled(Image).attrs({
  source: require('../../../assets/Picture10.png'),
  resizeMode: 'contain',
})`
  width: 80px;
  height: 80px;
`;

export const ImageWrapper = styled(View)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 120px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ButtonWrapper = styled(View)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: -520px;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 20px;
`;

export const Wrapper = styled(View)`
  flex: 1;
  position: relative;
  padding: 20px;
`;

export const TopImage = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const H5Text = styled(Text)`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text.white};
`;

export const CaptionText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.caption};
  font-weight: ${props => props.theme.fontWeights.normal}
  color: ${props => props.theme.colors.text.light};
  text-align: center;
`;

export const Center = styled(View)`
  align-items: center;
`;

export const PaddingHorizontal = styled(View)`
  padding-right: ${props => props.theme.sizes[2]};
  padding-left: ${props => props.theme.sizes[2]};
`;

const BgContainer = styled(View)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  flex: 1;
`;

const WelcomeScreen = (props: any) => {
  return (
    <Container>
      <ImageWrapper>
        <ImageView
          source={require('../../../assets/Picture8.png')}
          borderRadius="200px"
          width="320px"
          height="320px"
        />
      </ImageWrapper>
      <Wrapper>
        <TopImage>
          <ImageView
            source={require('../../../assets/Picture9.png')}
            width="150px"
            height="150px"
          />
        </TopImage>
      </Wrapper>
      <BgContainer>
        <Spacer size="xxxl" />
        <PaddingHorizontal>
          <Center>
            <H5Text>ObiDatti2023 Volunteer App</H5Text>
          </Center>
          <Spacer size="medium">
            <Center>
              <CaptionText>
                Lorem ipsum dolor sit amet, consectetur {`\n`} adipiscing elit.
                Molestie aliquet tempus etiam {`\n`} ipsum lacus non.
              </CaptionText>
            </Center>
          </Spacer>
          <Spacer size="xxl" />
        </PaddingHorizontal>

        {/* <Wrapper>
          <TopImage>
          <BottomLogo />
          </TopImage>
        </Wrapper> */}
      </BgContainer>
      <ButtonWrapper>
        <Button onPress={() => props.navigation.replace('LoginScreen')}>
          <H5Text>Get Started</H5Text>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

// props.navigation.navigate('LoginScreen');

export default WelcomeScreen;
