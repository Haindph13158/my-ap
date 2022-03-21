import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Schedule2Screen from '../ScheduleScreen/Schedule2Screen';
import {fetchSchedules} from '../../features/scheduleSlide/scheduleSlide'
function HomeScreen(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSchedules())

  }, [])
  
  return (
    <>
      <Schedule2Screen />
    </>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;
