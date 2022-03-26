import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {
  Text,
} from 'react-native-elements';
import React, { useCallback } from 'react';
import TopBar from '../../container/header/TopBar';
import InfoServiceComponent from '../../components/infoSv/infoServiceComponent';
const data = [
  'Reactjs',
  'Angular',
    'HTML & CSS',
];

const date =  {
    timeAfter: '15/3/2022',
    timeBefore: '20/3/2022',
    time: '26/11/2022'
  }

const dataSlot = [
    "Ca 1 (07:15:00 - 9:15:00)",
    "Ca 2 (09:15:00 - 9:15:00)",
];
function StudyScreen(props) {
  const handleSubmit = useCallback((value, type)=> {
    console.log(value,type);
  },[])
  return (
    <ScrollView>
      <TopBar />
     <InfoServiceComponent
     data={data}
     date={date}
     submit={handleSubmit}
     dataSlot={dataSlot}
     titleSelect1="Chọn môn"
     titleSelect2="Chọn ca"
     />
    </ScrollView>
  );
}

StudyScreen.propTypes = {};

export default StudyScreen;
