import React from 'react';
import {Alert, View} from 'react-native';
import styled from 'styled-components';
import {Button} from '../../components/button/button.component';
import {Spacer} from '../../components/spacer/spacer.component';
import {AuthInput, ScrollViewContainer} from '../onboarding/registerScreen';
import {Center, Container, H5Text} from '../onboarding/welcomeScreen';
import {H5TextDark} from './contactUsScreen';
import {ContentAreaView} from './utils/contentArea.utils';
import {TopAreaView} from './utils/topArea.utils';
import {Paystack} from 'react-native-paystack-webview';

export const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PaystackDonationScreen = (props: any) => {
  const [cardNo, setCardNo] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [cvv, setCVV] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [publicKey] = React.useState(
    'pk_test_4041450c107aba35cea3c331c3003b3d340e0e7c',
  );
  const [begin, setBegin] = React.useState(false);

  const handleExpiryChange = (text: any) => {
    let textTemp = text;

    if (textTemp[0] !== '1' && textTemp[0] !== '0') {
      textTemp = '';
    }
    if (textTemp.length === 2) {
      if (
        parseInt(textTemp.substring(0, 2)) > 12 ||
        parseInt(textTemp.substring(0, 2)) == 0
      ) {
        textTemp = textTemp[0];
      } else if (expiryDate.length === 1) {
        textTemp += '/';
      } else {
        textTemp = textTemp[0];
      }
    }

    setExpiryDate(textTemp);
  };

  //   const chargeCard = async () => {
  //     try {

  //       RNPaystack.init({publicKey});

  //       let dateParts = expiryDate.split('/');

  //       if (dateParts.length < 2) {
  //         return;
  //       }

  //       let response = await RNPaystack.chargeCard({
  //         cardNumber: cardNo,
  //         expiryMonth: dateParts[0],
  //         expiryYear: dateParts[1],
  //         cvc: cvv,
  //         email: 'example@pay.com',
  //         amountInKobo: parseInt(amount) * 100,

  //       }).then((response: any) => response);

  //       console.log(response); // do stuff with the token

  //       if (!response.reference) {

  //         Alert.alert('Donation', 'Transaction failed');
  //       } else {
  //         // fundWalletTransfer(response.reference);
  //         Alert.alert('Donation', 'Donation was successful, Thanks for your support');
  //       }
  //     } catch (error: any) {
  //       console.log(error);

  //       Alert.alert('Error', error.message);
  //     }
  //   };

  const startTransaction = () => {
    if (amount) {
      setBegin(!begin);
      return;
    }

    Alert.alert('Donation', 'Amount is required');
  };

  return (
    <>
      {begin && (
        <Paystack
          paystackKey={publicKey}
          amount={amount}
          billingEmail="example@pay.com"
          activityIndicatorColor="green"
          onCancel={(e: any) => {
            console.log('Cancelled', e);
          }}
          onSuccess={(res: any) => {
            Alert.alert(
              'Donation',
              'Donation was successful, Thanks for your support',
            );
            setAmount('');
          }}
          autoStart={true}
        />
      )}
      <Container>
        <TopAreaView navigation={props.navigation} />

        <ContentAreaView flex={5}>
          <Spacer size="xxl" />
          <Center>
            <H5TextDark>Donation</H5TextDark>
          </Center>

          <Spacer size="large" />
          <AuthInput
            mode="outlined"
            value={amount}
            keyboardType="numeric"
            autoCapitalize="none"
            placeholder="Enter amount"
            onChangeText={p => setAmount(p)}
            outlineColor="none"
            selectionColor="none"
            activeOutlineColor="green"
            activeUnderlineColor="none"
            theme={{
              roundness: 30,
              colors: {
                primary: 'green',
                underlineColor: 'transparent',
                background: `#c4c4c4`,
              },
            }}
          />
          <Spacer size="xl" />
          <Button onPress={() => startTransaction()}>
            <H5Text>Continue</H5Text>
          </Button>
        </ContentAreaView>
      </Container>
    </>
  );
};
