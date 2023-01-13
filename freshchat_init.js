import {
  Freshchat,
  FreshchatConfig,
  FaqOptions,
  ConversationOptions,
  FreshchatUser,
  FreshchatMessage,
  FreshchatNotificationConfig,
} from 'react-native-freshchat-sdk';

const APP_ID = '14671c58-564b-418e-aa0f-4cb07554d4fc';
const APP_KEY = '14bc7e4d-e40f-4f16-85df-35d9bd675900';
const DOMAIN = 'msdk.freshchat.com';

export const freshchatInit = () => {
  var freshchatConfig = new FreshchatConfig(APP_ID, APP_KEY);
  freshchatConfig.domain = DOMAIN;
  Freshchat.init(freshchatConfig);
};

export const showFreshchatConversations = () => {
  Freshchat.showConversations();
};

export const setUserProperties = token => {
  var freshchatUser = new FreshchatUser();
  freshchatUser.firstName = 'John';
  freshchatUser.lastName = 'Doe';
  freshchatUser.email = 'johndoe@dead.man';
  freshchatUser.phoneCountryCode = '+91';
  freshchatUser.phone = '1234234123';

  console.log(freshchatUser);

  Freshchat.setUser(freshchatUser, error => {
    console.log(error);
  });
};

export const setCustomUserProperties = token => {
  var userPropertiesJson = {
    test: 'From Sample App',
  };

  Freshchat.setUserProperties(userPropertiesJson, error => {
    console.log(error);
  });
};

export const saveDeviceTokenInFreshchat = token => {
  Freshchat.setPushRegistrationToken(token);
};

export const isFreshchatNotification = (freshchatPushPayload, callback) => {
  return Freshchat.isFreshchatNotification(freshchatPushPayload, callback);
};

export const handleFreshchatPushNotifications = freshchatPushPayload => {
  Freshchat.handlePushNotification(freshchatPushPayload);
};
