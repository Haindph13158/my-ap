import React from 'react';
import { useSelector } from 'react-redux';
import ConfigHeader from '../../container/header/configHeader';
import ScheduleContainer from '../../container/schedule/ScheduleContainer';
const colums = [
  {
    id: 4,
    title: 'Lịch học',
    titleStyle: {
      fontSize: 20,
      color: 'red',
    },
    keyIndex: 'study',
  },
  {
    id: 5,
    title: 'Lịch thi',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'actions',
  },
  {
    id: 6,
    title: 'Điểm danh',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
];
function HomeScreen(props) {
  const {error} = useSelector(state => state.auths);
  return (
    <>
      <ConfigHeader />
      <ScheduleContainer colums={colums} />
    </>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;
