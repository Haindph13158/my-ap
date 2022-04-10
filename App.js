/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View, TextInput} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistor, {store} from './src/app/store';
import NavBottom from './src/container/navBottom';
import FeeScreen from './src/screens/FeeScreen';
import SmsScreen from './src/screens/SmsScreen';
import FirstLoginScreen from './src/screens/authScreen/firstLoginScreen';
import LoginScreen from './src/screens/authScreen/loginScreen';
import StartApp from './src/screens/homeScreen/StartApp';
import Notification from './src/screens/Notification';
import RewardScreen from './src/screens/RewardScreen';
import ExamScreen from './src/screens/servicesOnline/ExamScreen';
import FormInfoMember from './src/screens/member/FormInfoMember';
import Atendance from './src/screens/homeScreen/Atendance';
import StudyScreen from './src/screens/servicesOnline/StudyScreen';
import ChangeIndustryScreen from './src/screens/servicesOnline/ChangeIndustryScreen';
import SemesterScreen from './src/screens/servicesOnline/SemesterScreen';
import ViewContent from './src/screens/ScheduleScreen/ViewContent';
import ListServicesScreen from './src/screens/servicesOnline/ListServicesScreen';
import RegisteredServiceScreen from './src/screens/servicesOnline/RegisteredServiceScreen';
import PointSubject from './src/screens/subject/PointSubject';
import TuitionScreen from './src/screens/Setting/TuitionScreen';
import SettingDetail from './src/screens/Setting/settingDetail';
import PrivateScreen from './src/screens/Setting/PrivateScreen';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

async function saveTokenToDatabase(token) {
  // Assume user is already signed in
  const userId = auth().currentUser.uid;

  // Add the token to the users datastore
  await firestore()
    .collection('users')
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
}

const Stack = createNativeStackNavigator();
const App = () => {
  const MainScreen = () => {
    return <NavBottom />;
  };
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  const [tokenApp, setTokenApp] = useState('');

  useEffect(() => {
    requestUserPermission();
    messaging()
      .getToken()
      .then(token => {
        console.log('token', token);
        setTokenApp(token)
        // return saveTokenToDatabase(token);
      });
    if (Platform.OS == 'ios') {
      messaging()
        .getAPNSToken()
        .then(token => {
          console.log('token', token);
          // return saveTokenToDatabase(token);
        });
    }
    // messaging().onNotificationOpenedApp(remoteMessage => {
    //   console.log(
    //     'Notification caused app to open from background state:',
    //     remoteMessage.notification,
    //   );
    //   // navigation.navigate(remoteMessage.data.type);
    // });

    // // Check whether an initial notification is available
    // messaging()
    //   .getInitialNotification()
    //   .then(remoteMessage => {
    //     if (remoteMessage) {
    //       console.log(
    //         'Notification caused app to open from quit state:',
    //         remoteMessage.notification,
    //       );
    //       setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
    //     }
    //     setLoading(false);
    //   });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <TextInput value={tokenApp} />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="App">
              <Stack.Screen
                name="App"
                component={StartApp}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Home"
                component={MainScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Atendance"
                component={Atendance}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Fee"
                component={FeeScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Reward"
                component={RewardScreen}
              />

              <Stack.Screen
                options={{headerShown: false}}
                name="Sms"
                component={SmsScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Exam"
                component={ExamScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Study"
                component={StudyScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Industry"
                component={ChangeIndustryScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Semester"
                component={SemesterScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="RegisterService"
                component={RegisteredServiceScreen}
              />

              <Stack.Screen
                options={{headerShown: false}}
                name="FirstLogin"
                component={FirstLoginScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="viewContent"
                component={ViewContent}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="notification"
                component={Notification}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="FormInfo"
                component={FormInfoMember}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Listservices"
                component={ListServicesScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="PointSubject"
                component={PointSubject}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Tuition"
                component={TuitionScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="SettingDetail"
                component={SettingDetail}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="PrivateScreen"
                component={PrivateScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
