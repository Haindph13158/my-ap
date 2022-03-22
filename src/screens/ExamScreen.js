import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import {
  Text,
  ListItem,
  Avatar,
  Icon,
  Badge,
  ListItemProps,
  Button,
  Switch,
  colors,
} from "react-native-elements";
import React from "react"
import { Dropdown } from 'react-native-element-dropdown';
import TopBar from "../container/header/TopBar";
import SelectDropdown from "react-native-select-dropdown";
const data = [
     'Reactjs',
    'Angular',
    'HTML & CSS',
   
  ];
  const dataTime = [
    {
      timeAfter: "15/3/2022",
      timeBefore: "20/3/2022",
    },
  ];
const dataTimeExam = [
    { time: "26/11/2022"}
]
function ExamScreen(props) {
  return (
    <ScrollView>
        <TopBar/>
      <View style={styles.container}>
        <>
          <Text style={styles.title}>Đăng ký thi lại</Text>
        </>
        {dataTime.map((item, index) => (
          <Text style={styles.titleTime}>
            Thời gian đăng ký: {item.timeAfter} to {item.timeBefore}
          </Text>
          
        ))}
         {dataTimeExam.map((item, index) => (
          <Text style={{color: "red", paddingLeft:15,paddingTop:5}}>
            Các đơn đăng ký từ {item.time} sẽ được trừ tự động nếu có số dư trong ví
          </Text>
          
        ))}
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.infoStudent}>Thông tin sinh viên</Text>
          <>
            <Text style={styles.text}>Họ và tên: Nguyễn Đức Hải</Text>
            <Text style={styles.text}>Mã sinh viên: PH13158</Text>
            <Text style={styles.text}>Ký thứ: 6</Text>
            <Text style={styles.text}>
              Trạng thái: <Text style={{ color: "green" }}>(HDI) Học đi</Text>
            </Text>
            <Text style={styles.text}>Loại dịch vụ: Đăng ký thi lại</Text>
            <View style={styles.column}>
              <Text style={{fontWeight:"bold",marginTop:5,marginRight:10}}>Chọn môn:</Text>
             <TouchableOpacity>
             <SelectDropdown
                  data={data}
                  buttonStyle={{borderRadius: 10, width:250,height:35}}
                  buttonTextStyle={{fontWeight: 'bold', fontSize:15}}
                  dropdownStyle={{borderRadius: 10, width:250,height:150}}
                  defaultButtonText="Chọn ca học"
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />
             </TouchableOpacity>
            </View>
            <Text style={styles.text}>Số tiền: 0</Text>
          </>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity >
          <Text style={styles.touchable}>Hoàn tất đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <Text style={styles.text}>Lưu ý: Khi thực hiện thanh toán qua DNG mã sinh viên của bạn là <Text style={{color:'red', fontWeight:'bold'}}>PH13158</Text></Text>
      <Text style={{marginTop:5}}>Trong trường hợp sinh viên đã thanh toán nhưng trạng thái đơn chưa đổi sang <Text style={{color:'green', fontWeight:'bold'}}>Đã thanh toán</Text>, sinh viên phải chủ động nhấn nút <Text style={{color:'red', fontWeight:'bold'}}>Kiểm tra thanh toán DNG</Text> để cập nhật trạng thái đơn</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 15,
    },
    title: {
      fontWeight: "bold",
      padding: 15,
      fontSize: 30,
    },
    touchable: {
      textAlign: "center",
      justifyContent: "center",
      borderWidth: 2,
      padding: 15,
      backgroundColor:'green',
      color:'#ffffff',
      borderColor: "rgba(158, 150, 150, .5)",
      borderRadius: 15,
    },
    content: {
      padding: 15,
      borderColor: "rgba(158, 150, 150, .5)",
      shadowColor: "#000",
  
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
  
      elevation: 3,
    },
    titleTime: {
      paddingLeft: 15,
      color: "red",
    },
    infoStudent: {
      color: "#646c9a",
      borderBottomWidth: 1,
      paddingBottom: 15,
      borderColor: "rgba(158, 150, 150, .5)",
    },
    text: {
      marginTop: 10,
      fontWeight: "bold",
    },
    column: {
      flexDirection: "row",
      paddingTop:10,
      
    },
    dropdown: {
      height: 40,
      width: 250,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingLeft: 15
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
  });

ExamScreen.propTypes = {}

export default ExamScreen
