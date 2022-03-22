import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import ScheduleItem from '../../components/ScheduleComponent/scheduleItemComponent';
import ContentOption from '../../components/ScheduleComponent/ContentOption';
import ScheduleComponent from '../../components/ScheduleComponent/scheduleComponent';
import {optionTabar} from './ScheduleContainer';
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
function ListTabarContent(props) {
  const {option} = props;
  const {schedules} = useSelector(state => state.schedules);
  const renderData = useMemo(() => {
    switch (option) {
      case optionTabar.lich_hoc:
        return (
          <SafeAreaView style={styles.container}>
            {schedules.map(schedule => (
              <ScheduleItem key={schedule.id} schedule={schedule} />
            ))}
          </SafeAreaView>
        );
        break;
     
      case optionTabar.diem_danh:
        return (
          <SafeAreaView style={styles.container}>
            {schedules.map((item, index) => (
              <ContentOption key={index} content={item} />
            ))}
          </SafeAreaView>
        );
        break;
      case optionTabar.lich_thi:
        return (
          <SafeAreaView style={styles.container}>
            <ScheduleComponent schedules={schedules} />
          </SafeAreaView>
        );
        break;
      default:
        return (
          <SafeAreaView style={styles.container}>
            {schedules.map(schedule => (
              <ScheduleItem key={schedule.id} schedule={schedule} />
            ))}
          </SafeAreaView>
        );
        break;
    }
  }, [option]);
  return <>{renderData}</>;
}

ListTabarContent.propTypes = {};

export default memo(ListTabarContent);
