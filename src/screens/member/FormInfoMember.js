import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  Button,
  Dimensions,
} from 'react-native';
import ConfigHeader from '../../container/header/configHeader';
import TopBar from '../../container/header/TopBar';
// import RNPickerSelect from "react-native-picker-select";
const HEIGHT = Dimensions.get('window').height;
const FormInfoMember = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [passportCode, setPassportCode] = useState('');
  const [date, setDate] = useState(new Date());
  const [addressIssued, setAddressIssued] = useState('');
  const [accountCode, setAccountCode] = useState('');
  const [course, setCourse] = useState('');
  const [specializ, setSpecializ] = useState('');
  const [higtSchoolCode, setHigtSchoolCode] = useState('');

  const handleSubmit = () => {};

  return (
    <View style={styles.swapper}>
      <TopBar />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapperInputs}>
            <Text style={styles.wrapperInputs_title}>Thông tin cá nhân</Text>
            <TextInput
              placeholder="Họ tên"
              value={userName}
              onChangeText={text => setUserName(text)}
              style={styles.input}
              secureTextEntry
            />
            <TextInput
              placeholder="Mã sinh viên"
              value={studentCode}
              onChangeText={text => setStudentCode(text)}
              style={styles.input}
              secureTextEntry
            />
            <View style={styles.wrapperInput}>
              {/* <RNPickerSelect
              style={styles.genderPicker}
              placeholder={{ label: "Giới tính", value: null }}
              onValueChange={(value) => setGender(value)}
              items={[
                { label: "Nam", value: 1 },
                { label: "Nữ", value: 2 },
                { label: "Khác", value: 3 },
              ]}
            /> */}
            </View>

            {/* <View style={styles.wrapperInput}>
            <DatePicker date={date} onDateChange={setDate} mode={'date'} />
          </View> */}

            <TextInput
              placeholder="Địa chỉ"
              value={address}
              onChangeText={text => setAddress(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
          <View style={styles.wrapperInputs}>
            <Text style={styles.wrapperInputs_title}>
              CMND/Căn cước/Hộ chiếu
            </Text>
            <TextInput
              placeholder="Số CMND | CCCD | Hộ chiếu"
              value={passportCode}
              onChangeText={text => setPassportCode(text)}
              style={styles.input}
              secureTextEntry
            />
            {/* <View style={styles.wrapperInput}>
            <DatePicker date={date} onDateChange={setDate} mode={'date'} />
          </View> */}
            <TextInput
              placeholder="Nơi cấp"
              value={addressIssued}
              onChangeText={text => setAddressIssued(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
          <View style={styles.wrapperInputs}>
            <Text style={styles.wrapperInputs_title}>
              CMND/Căn cước/Hộ chiếu
            </Text>
            <TextInput
              placeholder="Mã tài khoản"
              value={accountCode}
              onChangeText={text => setAccountCode(text)}
              style={styles.input}
              secureTextEntry
            />
            <TextInput
              placeholder="Khoá học"
              value={course}
              onChangeText={text => setCourse(text)}
              style={styles.input}
              secureTextEntry
            />
            {/* <View style={styles.wrapperInput}>
            <RNPickerSelect
              style={styles.selectPicker}
              placeholder={{ label: "Chuyên ngành", value: null }}
              onValueChange={(value) => setSpecializ(value)}
              items={[
                { label: "Thiết kế website", value: 1 },
                { label: "Thiết kế đồ hoạ", value: 2 },
                { label: "Lập trình ứng dụng", value: 3 },
              ]}
            />
          </View> */}
            {/* <View style={styles.wrapperInput}>
            <DatePicker date={date} onDateChange={setDate} mode={'date'} />
          </View> */}
          </View>
          <View style={styles.wrapperInputs}>
            <Text style={styles.wrapperInputs_title}>Tích hợp</Text>
            <TextInput
              placeholder="Số hiệu văn bằng tốt nghiệp THPT"
              value={higtSchoolCode}
              onChangeText={text => setHigtSchoolCode(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Cập nhật hồ sơ cá nhân</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  swapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#DDDDDD',
    height: HEIGHT,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8D8D8',
    marginBottom: 40,
  },
  wrapperInputs: {
    margin: 5,
    padding: 5,
    paddingBottom: 20,
    width: '95%',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  input: {
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingLeft: 20,
    marginTop: 20,
  },
  wrapperInput: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingLeft: 20,
    marginTop: 20,
  },
  selectPicker: {
    width: '100%',
  },
  wrapperInputs_title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderRadius: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(249, 92, 4)',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'rgb(249, 92, 4)',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10
  },
});

export default FormInfoMember;
