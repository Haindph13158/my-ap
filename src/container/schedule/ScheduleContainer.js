import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import SelectDropdown from 'react-native-select-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import IconView from '../../common/IconView';
import ScheduleItem from '../../components/ScheduleComponent/scheduleItemComponent';
import TableITem from '../../components/TableItem/TableITem';
import { fetchAttendace } from '../../features/scheduleSlide/AttendanceSlide';
import { fetchSchedules } from '../../features/scheduleSlide/scheduleSlide';
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
    marginTop: 20
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10
  },
  btnStyle: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  dropdownStyle: {
    borderRadius: 8,

  }
});

const dataSlot = ["90 ngày trước", "30 ngày trước", "7 ngày trước", "7 ngày tới", "30 ngày tới", "90 ngày tới"]
function ScheduleContainer({ colums }) {
  const { schedules } = useSelector(state => state.schedules);
  const { users } = useSelector(state => state.auths);
  const { attendances } = useSelector(state => state.attendances)
  const [option, setOption] = useState(optionTabar.lich_hoc);
  const dispatch = useDispatch();
  const [typeSelect, setTypeSelect] = useState('');
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
          <View activeOpacity={1} style={styles.container}>
            <View style={styles.selectSlide}>
              <Text>Thời gian</Text>
              <SelectDropdown
                data={dataSlot}
                buttonStyle={styles.btnStyle}
                buttonTextStyle={styles.buttonTextStyle}
                dropdownStyle={styles.dropdownStyle}
                defaultButtonText={"7 ngày tới"}
                onSelect={(selectedItem, index) => {
                  setTypeSelect(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
              <Text>Lựa chọn thời gian để hiển thị chi tiết lịch học</Text>
            </View>
            {listSchedule.map((schedule, index) => (
              <ScheduleItem key={index} schedule={schedule} />
            ))}
          </View>
        );
        break;
      case optionTabar.diem_danh:

        return (
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            {attendances && Array.isArray(attendances) && attendances.map((item, index) =>
            (
              <TouchableOpacity  key={index} onPress={() => navigation.navigate('Atendance', {
                id: item.subject_id,
                headerTitle: item.subject_name
              }) } >
              <TableITem attendance={true} content={item} />
              </TouchableOpacity>
            )
            )}
          </TouchableOpacity>
        );
        break;
      case optionTabar.lich_thi:
        return (
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            <View style={styles.selectSlide}>
              <Text>Thời gian</Text>
              <SelectDropdown
                data={dataSlot}
                buttonStyle={styles.btnStyle}
                buttonTextStyle={styles.buttonTextStyle}
                dropdownStyle={styles.dropdownStyle}
                defaultButtonText={"7 ngày tới"}
                onSelect={(selectedItem, index) => {
                  setTypeSelect(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
              <Text>Lựa chọn thời gian để hiển thị chi tiết lịch thi</Text>
            </View>
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