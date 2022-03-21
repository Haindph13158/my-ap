import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar, StyleSheet, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ScrollableTabView, {
  ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import AttendanceContent from '../../components/ScheduleComponent/attendanceContent';
import ScheduleComponent from '../../components/ScheduleComponent/scheduleComponent';
import ScheduleItem from '../../components/ScheduleComponent/scheduleItemComponent';
import ConfigHeader from '../../container/header/configHeader';
import { onSetSchedule } from '../../features/scheduleSlide/scheduleSlide';

const colums = [
  {
    id: 0,
    title: 'Lịch học',
    titleStyle: {
      fontSize: 20,
      color: 'red',
    },
    keyIndex: 'study',
  },
  {
    id: 1,
    title: 'Lịch thi',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'actions',
  },
  {
    id: 2,
    title: 'Điểm danh',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
];
const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  tab: {
    height: 10,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
  },
  text: {
    color: '#888',
    fontSize: 12,
  },
  icon: {
    marginLeft: 350,
    position: 'absolute',
  },
  View: {
    flexDirection: 'row',
  },
  iconHeader: {
    position: 'absolute',
    paddingTop: 60,
    paddingLeft: 320,
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 7,
  },
});
function Schedule2Screen() {
  const dispatch = useDispatch();
  const {schedules} = useSelector(state => state.schedules);
  const [keyActive, setKeyActive] = useState('Lịch học');
  const setOptionSchedule = keyIndex => {
    setKeyActive(keyIndex.ref.props.tabLabel);
    dispatch(onSetSchedule(keyIndex.ref.props));
  };

  const renderData = () => {
    let render = null;
    if (keyActive === 'Lịch học') {
      render = (
        <SafeAreaView style={styles.container}>
          {/* <ScheduleComponent schedules={schedules} /> */}
          {schedules.map(schedule => (
            <ScheduleItem key={schedule.id} schedule={schedule} />
          ))}
        </SafeAreaView>
      );
    }
    else if(keyActive === "Lịch thi"){
      render = (
        <SafeAreaView style={styles.container}>
          <ScheduleComponent schedules={schedules} />
        </SafeAreaView>
      );
    }
    else {
      render = (
        <SafeAreaView style={styles.container}>
          {schedules.map((item, index) => {
            return <AttendanceContent attendance={item} key={index} />;
          })}
        </SafeAreaView>
      );
    }
    return render;
  };

  return (
    <>
      <ConfigHeader />
      <ScrollableTabView
        renderTabBar={tabBarProps => {
          return <ScrollableTabBar />;
        }}
        tabBarPosition="top"
        onChangeTab={e => {
          setOptionSchedule(e);
        }}
        initialPage={0}
        tabBarUnderlineStyle={{
          backgroundColor: 'red',
          height: 1,
        }}
        tabBarBackgroundColor={'white'}
        tabBarActiveTextColor={'red'}
        tabBarTextStyle={{fontSize: 14}}

        // scrollWithoutAnimation={true}
      >
        {colums.map((item, index) => (
          <View key={index} tabLabel={item.title}>
            <ScrollView>{renderData()}</ScrollView>
          </View>
        ))}
      </ScrollableTabView>
    </>
  );
}

Schedule2Screen.propTypes = {};

export default Schedule2Screen;
