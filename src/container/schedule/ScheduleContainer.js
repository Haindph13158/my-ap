import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import ScheduleItem from '../../components/ScheduleComponent/scheduleItemComponent';
import TextApp from '../../components/ScheduleComponent/TextApp';
import SelectTime from '../../components/SelectTime/SelectTime';
import TableITem from '../../components/TableItem/TableITem';
import {fetchAttendace} from '../../features/scheduleSlide/AttendanceSlide';
import {fetchSchedules} from '../../features/scheduleSlide/scheduleSlide';
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
    // flex: 1
    marginTop: 10,
    marginBottom: 20
    // marginTop: StatusBar.currentHeight || 0,
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
  selectSlide: {
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
  },
  btnStyle: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  dropdownStyle: {
    borderRadius: 8,
  },
});

const dataSlot = [
  '7 ngày tới',
  '30 ngày tới',
  '90 ngày tới',
  '7 ngày trước',
  '30 ngày trước',
  '90 ngày trước',
];
function ScheduleContainer({colums}) {
  const {schedules} = useSelector(state => state.schedules);
  const {users} = useSelector(state => state.auths);
  const {attendances} = useSelector(state => state.attendances);
  const [option, setOption] = useState(optionTabar.lich_hoc);
  const dispatch = useDispatch();
  const {listSchedule} = useSelector(state => state.schedules);
  const [typeSelect, setTypeSelect] = useState('');
  const setOptionSchedule = useCallback(
    opt => {
      setOption(opt);
    },
    [option],
  );
  useEffect(() => {
    dispatch(fetchSchedules(users));
    dispatch(fetchAttendace(users));
  }, [users]);
  const navigation = useNavigation();

  const renderDataSelect = useCallback(value => {
    return value;
  }, []);
  const valueSelect = useCallback(value => {
    setTypeSelect(value);
  }, []);
  const renderData = () => {
    switch (option) {
      case optionTabar.lich_hoc:
        return (
          // <TextApp />
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            <SelectTime
              dataSlot={dataSlot}
              renderDataSelect={renderDataSelect}
              value={valueSelect}
            />
            {listSchedule.map((schedule, index) => (
              <ScheduleItem key={index} schedule={schedule} />
            ))}
          </TouchableOpacity>
        );
        break;
      case optionTabar.diem_danh:
        return (
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            {attendances &&
              Array.isArray(attendances) &&
              attendances.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('Atendance', {
                      id: item.subject_id,
                      headerTitle: item.subject_name,
                    })
                  }>
                  <TableITem attendance={true} content={item} />
                </TouchableOpacity>
              ))}
          </TouchableOpacity>
        );
        break;
      case optionTabar.lich_thi:
        return (
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            <SelectTime
              dataSlot={dataSlot}
              renderDataSelect={renderDataSelect}
              value={valueSelect}
            />
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
  };

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
