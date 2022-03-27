import React, { memo, useCallback, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import {
  ScrollView,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import ScheduleItem from '../../components/ScheduleComponent/scheduleItemComponent';
import { fetchSchedules, } from '../../features/scheduleSlide/scheduleSlide';
import ScheduleComponent from '../../components/ScheduleComponent/scheduleComponent';
import ContentOption from '../../components/ScheduleComponent/ContentOption';
import { fetchAttendace } from '../../features/scheduleSlide/AttendanceSlide';
import TableITem from '../../components/TableItem/TableITem';
import { useNavigation } from '@react-navigation/native';
export const optionTabar = {
  lich_hoc: 'Lịch học',
  lich_thi: 'Lịch thi',
  diem_danh: 'Điểm danh',
  hoc_tap: 'Học Tập',
  hoat_dong: 'Hoạt động',
  hoc_phi: 'Học phí',
};
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
function ScheduleContainer({ colums }) {
  const { schedules } = useSelector(state => state.schedules);
  const { users } = useSelector(state => state.auths);
  const { attendances } = useSelector(state => state.attendances)
  const [option, setOption] = useState(optionTabar.lich_hoc);
  const dispatch = useDispatch();
  const { listSchedule } = useSelector(state => state.schedules)
  const setOptionSchedule = useCallback(opt => {
    setOption(opt);
  },
    [option],
  );
  useEffect(() => {
    dispatch(fetchSchedules(users))
    dispatch(fetchAttendace(users))
  }, [users]);
  const navigation = useNavigation()
  const renderData = () => {
    switch (option) {
      case optionTabar.lich_hoc:

        return (
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            {listSchedule.map((schedule, index) => (
              <ScheduleItem key={index} schedule={schedule} />
            ))}
          </TouchableOpacity>
        );
        break;
      case optionTabar.diem_danh:

        return (
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            {attendances && Array.isArray(attendances) && attendances.map((item, index) =>
            (
              <TouchableOpacity onPress={() => navigation.navigate('Atendance', {
                id: item.subject_id,
                headerTitle: item.subject_name
              }) } >
              <TableITem attendance={true} key={index} content={item} />
              </TouchableOpacity>
            )
            )}
          </TouchableOpacity>
        );
        break;
      case optionTabar.lich_thi:
        return (
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            {listSchedule.map((schedule, index) => (
              <ScheduleItem key={index} schedule={schedule} />
            ))}
          </TouchableOpacity>
        );
        break;
      default:
        return (
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            {schedules.map((schedule, index) => (
              <ScheduleItem key={index} schedule={schedule} />
            ))}
          </TouchableOpacity>
        );
        break;
    }
  }

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
      tabBarTextStyle={{ fontSize: 14 }}>
      {colums.map((item, index) => (
        <View key={index} tabLabel={item.title}>
          <ScrollView keyboardShouldPersistTaps="always">
            {renderData()}
          </ScrollView>
        </View>
      ))}
    </ScrollableTabView>
  );
}

ScheduleContainer.propTypes = {
  colums: PropTypes.array,
};

export default memo(ScheduleContainer);
