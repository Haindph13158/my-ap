import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import {
  Text,
} from "react-native-elements";
import React, { useCallback } from "react"
import TopBar from "../../container/header/TopBar";
import InfoServiceComponent from "../../components/infoSv/infoServiceComponent";
const data = [
     'Reactjs',
    'Angular',
    'HTML & CSS',
  ];
  const date =  {
      timeAfter: "15/3/2022",
      timeBefore: "20/3/2022",
      time: "26/11/2022",
      
    }
function ExamScreen() {
  const handleSubmit = useCallback((value, info)=> {
    console.log(value,'value');
    console.log(info,'info');
  },[])
  return (
    <ScrollView>
        <TopBar/>
  
      <InfoServiceComponent
      data={data}
      type='Đăng kí thi lại'
      date={date}
      submit={handleSubmit}
      titleSelect1="Chọn môn"
      />
    </ScrollView>
  )
}


ExamScreen.propTypes = {}

export default ExamScreen
