import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {
  Text,
} from 'react-native-elements';
import React, { useCallback } from 'react';
import TopBar from '../../container/header/TopBar';
import InfoServiceComponent from '../../components/infoSv/infoServiceComponent';

const data = ['Hoàn thành', 'Chưa hoàn thành'];
const date =  {
  timeAfter: "15/3/2022",
  timeBefore: "20/3/2022",
  time: "26/11/2022"
}

function SemesterScreen(props) {
  const handleSubmit = useCallback((value, info)=>{
    console.log(value);
    console.log(info);
  })
  return (
    <ScrollView>
      <TopBar />  
      <InfoServiceComponent
      data={data}
      date={date}
      submit={handleSubmit}
      type ='Đăng kí bảo lưu'
      number={true}
      reason='Bảo lưu'
      titleSelect1="Trạng thái"
      />
    </ScrollView>
  );
}


SemesterScreen.propTypes = {};

export default SemesterScreen;
