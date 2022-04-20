import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ScheduleItem from '../../components/ScheduleComponent/scheduleItemComponent';
import SelectTime from '../../components/SelectTime/SelectTime';
import { fetchSchedules } from '../../features/scheduleSlide/scheduleSlide';
const dataSlot = [
  '7 ngày tới',
  '30 ngày tới',
  '90 ngày tới',
  '7 ngày trước',
  '30 ngày trước',
  '90 ngày trước',
];
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  content: {
    marginTop: 30,
  },
  ScrollView: {
    marginBottom: 90,
  },
});
const messgageError =
  'Phiên đăng nhập của bạn đã hết hạn, vui lòng đăng nhập lại !';
function ScheduleList(props) {
  const {schedules, loading, error} = useSelector(state => state.schedules);
  const dispatch = useDispatch();
  const [day, setDay] = useState(7);
  const [timeDay, setTimeDay] = useState(dataSlot[0]);
  const {users} = useSelector(state => state.auths);
  const navigation = useNavigation();
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  const pushTokenServer = async token => {
    const data = {token, name: users.user_code};
    const listToken = await (
      await axios.get(
        'https://6132c0c8ab7b1e001799b5bc.mockapi.io/token-device',
      )
    ).data;
    const checkToken = listToken.find(item => item.name === users.user_code);
    if (checkToken) {
      axios
        .put(
          `https://6132c0c8ab7b1e001799b5bc.mockapi.io/token-device/${checkToken.id}`,
          data,
        )
        .then(res => res)
        .catch(err => console.log(err));
    } else {
      axios
        .post('https://6132c0c8ab7b1e001799b5bc.mockapi.io/token-device', data)
        .then(res => res)
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    if (users?.user_code) {
      requestUserPermission();
      messaging()
        .getToken()
        .then(token => {
          pushTokenServer(token);
          // return saveTokenToDatabase(token);
        });
      if (Platform.OS == 'ios') {
        messaging()
          .getToken()
          .then(token => {
            console.log('token', token);
            pushTokenServer(token);
            // return saveTokenToDatabase(token);
          });
      }
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log(remoteMessage);
        Alert.alert(JSON.stringify(remoteMessage.notification.body));
      });
 
      return unsubscribe;
    }
 
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage.data.type);
    });

    
    // // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        setLoading(false);
      });
  }, [users]);
  const getApiData = useCallback(() => {
    const optionSchedule = {
      token: users.token,
      campus_code: users.campus_code,
      day: day,
      user_code: users.user_code,
    };
    dispatch(fetchSchedules(optionSchedule));
  }, [day, users]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  const _onRefresh = useCallback(() => {
    getApiData();
  }, [getApiData]);

  const valueSelect = useCallback(value => {
    setTimeDay(value);
    switch (value) {
      case '7 ngày tới':
        setDay(7);
        break;
      case '30 ngày tới':
        setDay(30);
        break;
      case '90 ngày tới':
        setDay(90);
        break;
      case '7 ngày trước':
        setDay(-7);
        break;
      case '30 ngày trước':
        setDay(-30);
        break;
      case '90 ngày trước':
        setDay(-90);
        break;
      default:
        setDay(7);
        break;
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <SelectTime
          dataSlot={dataSlot}
          defaultValue={timeDay}
          value={valueSelect}
        />
        <ScrollView
          style={styles.ScrollView}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={_onRefresh} />
          }
          keyboardShouldPersistTaps="always">
          <View style={styles.ScrollView}>
            {schedules.map((schedule, index) => (
              <ScheduleItem key={index} schedule={schedule} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

ScheduleList.propTypes = {};

export default memo(ScheduleList);
