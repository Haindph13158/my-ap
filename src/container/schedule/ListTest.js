import React, {memo, useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ScheduleItem from '../../components/ScheduleComponent/scheduleItemComponent';
import SelectTime from '../../components/SelectTime/SelectTime';
import {fetchTest} from '../../features/scheduleSlide/TestSlide';
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
    marginBottom: 90
  }
});

function ListTest(props) {
  const {listTest, loading, error} = useSelector(state => state.test);
  const dispatch = useDispatch();
  const [day, setDay] = useState(7);
  const {users} = useSelector(state => state.auths);
  const [timeDay, setTimeDay] = useState(dataSlot[0]);
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

  const getApiData = () => {
    const optionListTest = {
      token: users.token,
      campus_code: users.campus_code,
      day: day,
      user_code: users.user_code,
    };
    dispatch(fetchTest(optionListTest));
  };
  useEffect(() => {
    getApiData();
  }, [users, day]);

  const _onRefresh = useCallback(() => {
    getApiData();
  }, [getApiData]);

  return (
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
          {listTest.map((schedule, index) => (
            <ScheduleItem key={index} schedule={schedule} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

ListTest.propTypes = {};

export default memo(ListTest);
