import { useTheme } from '@react-navigation/native';
import React, {memo, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector} from 'react-redux';

function InfoServiceComponent({
  data,
  type,
  date,
  submit,
  number,
  reason,
  dataSlot,
  titleSelect1,
  titleSelect2,
}) {
  const {colors} = useTheme();
  const {info} = useSelector(state => state.infoUser);
  const [typeSelect, setTypeSelect] = useState('');


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleTime}>
          Thời gian đăng ký: {date.timeAfter} to {date.timeBefore}
        </Text>
        <Text style={styles.colorTextDate}>
          Các đơn đăng ký từ {date.time} sẽ được trừ tự động nếu có số dư trong
          ví
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.infoStudent}>Thông tin sinh viên</Text>
          <>
            <Text style={styles.text}>Họ và tên: {info.full_name}</Text>
            <Text style={styles.text}>Mã sinh viên: {info.user_code}</Text>
            <Text style={styles.text}>Ký thứ: 6</Text>
            <Text style={styles.text}>
              Trạng thái: <Text style={styles.colorStatus}>(HDI) Học đi</Text>
            </Text>
            <Text style={styles.text}>Loại dịch vụ: {type}</Text>
            <View style={styles.column}>
              <Text style={styles.lableSelect}>{titleSelect1}:</Text>
              <TouchableOpacity>
                <SelectDropdown
                  data={data}
                  buttonStyle={styles.buttonStyle}
                  buttonTextStyle={styles.buttonTextStyle}
                  dropdownStyle={styles.dropdownStyle}
                  defaultButtonText={`${titleSelect1} học`}
                  onSelect={(selectedItem, index) => {
                    setTypeSelect(selectedItem);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </TouchableOpacity>
            </View>
            {dataSlot && (
              <View style={styles.column}>
                <Text style={styles.lableSelect}>Chọn ca:</Text>
                <TouchableOpacity>
                  <SelectDropdown
                    data={dataSlot}
                    buttonStyle={styles.buttonStyle}
                    buttonTextStyle={styles.buttonTextStyle}
                    dropdownStyle={styles.dropdownStyle}
                    defaultButtonText={`${titleSelect2} học`}
                    onSelect={(selectedItem, index) => {
                      
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.text}>Số tiền: 0</Text>
            {number && (
              <View>
                <Text style={styles.text}>Phí dịch vụ: 0</Text>
                <Text style={styles.text}>
                  Ngày đăng ký: {new Date().toLocaleDateString()}
                </Text>
                <Text style={styles.text}>
                  Số điện thoại <Text style={{color: 'red'}}>*</Text>
                </Text>
                <TextInput
                  placeholder="Nhập số điện thoại( bắt buộc )"
                  required={true}
                  multiline={true}
                  numberOfLines={2}
                  style={{
                    height: 40,
                    marginTop: 5,
                    textAlignVertical: 'top',
                    borderWidth: 1,
                    borderColor: 'rgba(158, 150, 150, .5)',
                    borderRadius: 5,
                  }}
                />
              </View>
            )}
            {reason && reason.length !== 0 ? (
              <View>
                <Text
                  style={{fontWeight: 'bold', marginTop: 5, marginRight: 20}}>
                  Lí do <Text style={{color: 'red'}}>*</Text>
                </Text>
                <TextInput
                  placeholder={`Nhập lí do muốn ${reason}(Bắt buộc)`}
                  required={true}
                  multiline={true}
                  numberOfLines={10}
                  style={{
                    height: 150,
                    textAlignVertical: 'top',
                    borderWidth: 1,
                    borderRadius: 10,
                    marginTop: 5,
                    borderColor: 'rgba(158, 150, 150, .5)',
                  }}
                />
              </View>
            ) : null}
          </>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text onPressIn={submit(typeSelect, info)} style={styles.touchable}>
            Hoàn tất đăng ký
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Lưu ý: Khi thực hiện thanh toán qua DNG mã sinh viên của bạn là{' '}
          <Text style={{color: 'red', fontWeight: 'bold'}}>
            {info.user_code}
          </Text>
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
    </>
  );
}
export default memo(InfoServiceComponent);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  touchable: {
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    padding: 15,
    backgroundColor: 'green',
    color: '#ffffff',
    borderColor: 'rgba(158, 150, 150, .5)',
    borderRadius: 15,
  },
  content: {
    padding: 15,
    borderColor: 'rgba(158, 150, 150, 0.5)',
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  titleTime: {
    paddingLeft: 15,
    color: 'red',
  },
  infoStudent: {
    color: '#646c9a',
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: 'rgba(158, 150, 150, .5)',
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black'
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
  colorStatus: {
    color: 'green',
  },
  colorTextDate: {
    color: 'red',
    paddingLeft: 15,
    paddingTop: 5,
  },
  lableSelect: {
    fontWeight: 'bold',
    marginTop: 5,
    marginRight: 10,
    width: 80,
    color: 'black'
  },
  buttonStyle: {
    borderRadius: 10,
    height: 35,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  dropdownStyle: {
    borderRadius: 10,
    width: 230,
    height: 150,
  },
});
// InfoServiceComponent.propTypes = {
//   data: Object,
//   type: String,
//   date: Object,
//   submit: Function,
//   dataSlot: Array,
// };
