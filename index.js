/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { LogBox } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
PushNotification.configure({
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  },
  popInitialNotification: true,
  requestPermissions: true,
})
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
AppRegistry.registerComponent(appName, () => App);
