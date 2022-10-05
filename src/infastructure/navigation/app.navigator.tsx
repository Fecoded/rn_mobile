import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screens/onboarding/splashScreen';
import WelcomeScreen from '../../screens/onboarding/welcomeScreen';
import {LoginScreen} from '../../screens/onboarding/loginScreen';
import {RegisterScreen} from '../../screens/onboarding/registerScreen';
import {ResetPasswordScreen} from '../../screens/onboarding/resetPasswordScreen';
import {ChangePasswordScreen} from '../../screens/onboarding/changePasswordScreen';
import {HomeScreen} from '../../screens/main/homeScreen';
import {AboutPeterObiScreen} from '../../screens/main/aboutPeterObiScreen';
import {AboutYusufDattiScreen} from '../../screens/main/aboutYusufDattiScreen';
import {AboutLabourPartyScreen} from '../../screens/main/aboutLabourPartyScreen';
import {AboutManifestoScreen} from '../../screens/main/aboutManifestoScreen';
import {AboutObiDatti2023Screen} from '../../screens/main/aboutObiDatti2023Screen';
import {RoleAsAVoluteerScreen} from '../../screens/main/roleAsAVoluteerScreen';
import {SupportScreen} from '../../screens/main/supportScreen';
import {ContactUsScreen} from '../../screens/main/contactUsScreen';
import {PaystackDonationScreen} from '../../screens/main/paystackDonation';

const stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="SplashScreen" component={SplashScreen} />
      <stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <stack.Screen name="LoginScreen" component={LoginScreen} />
      <stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
      <stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <stack.Screen name="HomeScreen" component={HomeScreen} />
      <stack.Screen
        name="AboutPeterObiScreen"
        component={AboutPeterObiScreen}
      />
      <stack.Screen
        name="AboutYusufDattiScreen"
        component={AboutYusufDattiScreen}
      />
      <stack.Screen
        name="AboutLabourPartyScreen"
        component={AboutLabourPartyScreen}
      />
      <stack.Screen
        name="AboutManifestoScreen"
        component={AboutManifestoScreen}
      />
      <stack.Screen
        name="AboutObiDatti2023Screen"
        component={AboutObiDatti2023Screen}
      />
      <stack.Screen
        name="RoleAsAVoluteerScreen"
        component={RoleAsAVoluteerScreen}
      />
      <stack.Screen name="SupportScreen" component={SupportScreen} />
      <stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
      <stack.Screen name="DonateScreen" component={PaystackDonationScreen} />
    </stack.Navigator>
  );
};

export default AppNavigator;
