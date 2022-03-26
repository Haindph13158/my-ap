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
const data = ['Thiết kế trang Web', 'Đồ họa', 'Mobile', 'Dirital Marketing'];
const date = {
  timeAfter: '15/3/2022',
  timeBefore: '20/3/2022',
  time: '26/11/2022'
}

function ChangeIndustryScreen(props) {
  const handleSubmit = useCallback((value, type) => {
    console.log(value, type);
  })
  return (
    <ScrollView>
      <TopBar />
      <InfoServiceComponent
        data={data}
        date={date}
        submit={handleSubmit}
        titleSelect1="Chọn ngành"
      />
    </ScrollView>
  );
}

ChangeIndustryScreen.propTypes = {};

export default ChangeIndustryScreen;
