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
  ListItem,
  Avatar,
  Icon,
  Badge,
  ListItemProps,
  Button,
  Switch,
  colors,
} from 'react-native-elements';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import TopBar from '../container/header/TopBar';
const data = ['Thiết kế trang Web', 'Đồ họa', 'Mobile', 'Dirital Marketing'];

const dataTime = [
  {
    timeAfter: '15/3/2022',
    timeBefore: '20/3/2022',
  },
];

const data2 = ['Ca 1 (07:15:00 - 9:15:00)', 'Ca 2 (09:15:00 - 9:15:00)'];
function ChangeIndustryScreen(props) {
  return (
    <ScrollView>
      <TopBar />
      <View style={styles.container}>
        <>
          <Text style={styles.title}>Đăng ký chuyển ngành</Text>
        </>
        
        
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.infoStudent}>Thông tin sinh viên</Text>
          <>
            <Text style={styles.text}>Họ và tên: Nguyễn Đức Hải</Text>
            <Text style={styles.text}>Mã sinh viên: PH13158</Text>
            <Text style={styles.text}>Ký thứ: 6</Text>
            <Text style={styles.text}>
              Trạng thái: <Text style={{color: 'green'}}>(HDI) Học đi</Text>
            </Text>
            <Text style={styles.text}>Loại dịch vụ: Chuyển ngành</Text>
            <View style={styles.column}>
              <Text style={{fontWeight: 'bold', marginTop: 5, marginRight: 10}}>
                Chọn ngành:
              </Text>
              <TouchableOpacity>
                <SelectDropdown
                  data={data}
                  buttonStyle={{borderRadius: 10, width: 240, height: 35}}
                  buttonTextStyle={{fontWeight: 'bold', fontSize: 15}}
                  dropdownStyle={{borderRadius: 10, width: 250, height: 150}}
                  defaultButtonText="Chọn ngành học"
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
            <View >
              <Text style={{fontWeight: 'bold', marginTop: 5, marginRight: 20}}>
                Lí do <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                placeholder="Nhập lí do muốn chuyển ngành(Bắt buộc)"
                required={true}
                multiline={true}
                numberOfLines={10}
                style={{
                  height: 150,
                  textAlignVertical: 'top',
                  borderRadius: 10,
                  borderWidth: 1,
                  marginTop:5,
                  borderColor: 'rgba(158, 150, 150, .5)',
                }}
              />
            </View>
          </>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.touchable}>Hoàn tất đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Lưu ý: Khi thực hiện thanh toán qua DNG mã sinh viên của bạn là{' '}
          <Text style={{color: 'red', fontWeight: 'bold'}}>PH13158</Text>
        </Text>
        <Text style={{marginTop: 5}}>
          Trong trường hợp sinh viên đã thanh toán nhưng trạng thái đơn chưa đổi
          sang{' '}
          <Text style={{color: 'green', fontWeight: 'bold'}}>
            Đã thanh toán
          </Text>
          , sinh viên phải chủ động nhấn nút{' '}
          <Text style={{color: 'red', fontWeight: 'bold'}}>
            Kiểm tra thanh toán DNG
          </Text>{' '}
          để cập nhật trạng thái đơn
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 30,
  },
  touchable: {
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'green',
    color: '#ffffff',
    borderColor: 'rgba(158, 150, 150, .5)',
    borderRadius: 15,
  },
  content: {
    padding: 10,
    borderColor: 'rgba(158, 150, 150, .5)',
    shadowColor: '#000',

    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  titleTime: {
    paddingLeft: 10,
    color: 'red',
  },
  infoStudent: {
    color: '#646c9a',
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontWeight: 'bold',
    borderColor: 'rgba(158, 150, 150, .5)',
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  column: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  dropdown: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingLeft: 15,
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

ChangeIndustryScreen.propTypes = {};

export default ChangeIndustryScreen;
