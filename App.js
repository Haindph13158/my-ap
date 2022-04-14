/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistor, {store} from './src/app/store';
import NavBottom from './src/container/navBottom';
import {useColorScheme} from 'react-native';
import FirstLoginScreen from './src/screens/authScreen/firstLoginScreen';
import LoginScreen from './src/screens/authScreen/loginScreen';
import FeeScreen from './src/screens/FeeScreen';
import Atendance from './src/screens/homeScreen/Atendance';
import StartApp from './src/screens/homeScreen/StartApp';
import FormInfoMember from './src/screens/member/FormInfoMember';
import Notification from './src/screens/Notification';
import RewardScreen from './src/screens/RewardScreen';
import ViewContent from './src/screens/ScheduleScreen/ViewContent';
import ChangeIndustryScreen from './src/screens/servicesOnline/ChangeIndustryScreen';
import ExamScreen from './src/screens/servicesOnline/ExamScreen';
import ListServicesScreen from './src/screens/servicesOnline/ListServicesScreen';
import RegisteredServiceScreen from './src/screens/servicesOnline/RegisteredServiceScreen';
import SemesterScreen from './src/screens/servicesOnline/SemesterScreen';
import StudyScreen from './src/screens/servicesOnline/StudyScreen';
import PrivateScreen from './src/screens/Setting/PrivateScreen';
import SettingDetail from './src/screens/Setting/settingDetail';
import TuitionScreen from './src/screens/Setting/TuitionScreen';
import SmsScreen from './src/screens/SmsScreen';
import PointSubject from './src/screens/subject/PointSubject';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MyTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(0,0,0,1)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  }
};

const Stack = createNativeStackNavigator();
const App = () => {
  const MainScreen = () => {
    return <NavBottom />;
  };

  const fetchTokenList = async () => {
    const listToken = await (
      await axios.get(
        'https://6132c0c8ab7b1e001799b5bc.mockapi.io/token-device',
      )
    ).data;
    console.log(listToken);
  };

  useEffect(() => {
    fetchTokenList();
  }, []);
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <NavigationContainer
            theme={scheme === 'dark' ? MyTheme : DefaultTheme}>
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
