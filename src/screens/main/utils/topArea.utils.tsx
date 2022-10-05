import React from 'react';
import {Platform, View} from 'react-native';
import styled from 'styled-components';
import {BgContainer} from '../../onboarding/splashScreen';
import {BackButton} from '../../../components/button/button.component';
import {ImageView} from '../../../components/image/image.component';

export const PaddingHorizontal = styled(View)`
  padding-right: ${props => props.theme.sizes[0]};
  padding-left: ${props => props.theme.sizes[0]};
`;

export const TopView = styled(View)`
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${Platform.OS === 'ios' ? '10px' : '0'};
`;

export const TopAreaView = ({navigation}: any) => {
  return (
    <BgContainer>
      <PaddingHorizontal>
        <TopView>
          <BackButton navigation={navigation} />
          <ImageView
            source={require('../../../../assets/Picture8.png')}
            borderRadius="200px"
            width="100px"
            height="100px"
          />
        </TopView>
      </PaddingHorizontal>
    </BgContainer>
  );
};
