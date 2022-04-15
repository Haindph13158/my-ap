import PropTypes from 'prop-types';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {RefreshControl, ScrollView, TouchableOpacity, View} from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import ListAttendance from './listAttendance';
import ListTest from './ListTest';
import ScheduleList from './ScheduleList';

export const optionTabar = {
  lich_hoc: 'Lịch học',
  lich_thi: 'Lịch thi',
  diem_danh: 'Điểm danh',
};


function ScheduleContainer({colums}) {
  const [option, setOption] = useState(optionTabar.lich_hoc);
  const setOptionSchedule = useCallback(
    opt => {
      setOption(opt);
    },
    [option],
  );
  

  const renderData = useMemo(() => {
    switch (option) {
      case optionTabar.lich_hoc:
        return (
          <TouchableOpacity activeOpacity={1}>
            <ScheduleList />
          </TouchableOpacity>
        );
        break;
      case optionTabar.diem_danh:
        return (
          <TouchableOpacity activeOpacity={1}>
            <ListAttendance />
          </TouchableOpacity>
        );
        break;
      case optionTabar.lich_thi:
        return (
          <TouchableOpacity activeOpacity={1}>
            <ListTest />
          </TouchableOpacity>
        );
        break;
      default:
        return (
          <TouchableOpacity activeOpacity={1}>
            <ScheduleList />
          </TouchableOpacity>
        );
        break;
    }
  }, [option]);

  return (
    <ScrollableTabView
      renderTabBar={tabBarProps => {
        return <ScrollableTabBar />;
      }}
      tabBarPosition="top"
      onChangeTab={e => {
        setOptionSchedule(e.ref.props.tabLabel);
      }}
      initialPage={0}
      tabBarUnderlineStyle={{
        backgroundColor: 'red',
        height: 1,
      }}
      tabBarBackgroundColor={'white'}
      tabBarActiveTextColor={'red'}
      tabBarTextStyle={{fontSize: 14}}>
      {colums.map((item, index) => (
        <View key={index} tabLabel={item.title}>
          {renderData}
        </View>
      ))}
    </ScrollableTabView>
  );
}

ScheduleContainer.propTypes = {
  colums: PropTypes.array,
};

export default memo(ScheduleContainer);
