import React, { memo, useEffect, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TopBar from '../../container/header/TopBar';
import { fetchInfoUser } from '../../features/reducer/infoUser';
const HEIGHT = Dimensions.get('window').height;
const FormInfoMember = ({navigation}) => {
  const [passportCode, setPassportCode] = useState('');
  const [addressIssued, setAddressIssued] = useState('');
  const [course, setCourse] = useState('');
  const [higtSchoolCode, setHigtSchoolCode] = useState('');
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.auths);
  const {info} = useSelector(state => state.infoUser);
  const handleSubmit = () => {};
  useEffect(() => {
    dispatch(fetchInfoUser(users.user_login));
  }, [users]);
  return (
    <View style={styles.swapper}>
      <TopBar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.wrapperInputs_title}>Thông tin cá nhân</Text>
          <View style={styles.wrapperInputs}>
            <Text style={styles.marginBottom}>Họ tên: </Text>
            <TextInput
              placeholder="Họ tên"
              value={info.full_name}
              onChangeText={text => setUserName(text)}
              style={styles.input}
              editable={false}
              selectTextOnFocus={false}
            />
            <Text style={styles.marginBottom}>Mã sinh viên: </Text>
            <TextInput
              placeholder="Mã sinh viên"
              value={info.user_code}
              onChangeText={text => setStudentCode(text)}
              style={styles.input}
              editable={false}
              selectTextOnFocus={false}
            />
            <Text style={styles.marginBottom}>Số điện thoại: </Text>
            <TextInput
              placeholder="Mã sinh viên"
              value={info.user_telephone}
              onChangeText={text => setStudentCode(text)}
              style={styles.input}
              editable={false}
              selectTextOnFocus={false}
            />
            <Text style={styles.marginBottom}>Giới tính: </Text>
            <TextInput
              placeholder="Mã sinh viên"
              value={'Nam'}
              onChangeText={text => setStudentCode(text)}
              style={styles.input}
              editable={false}
              selectTextOnFocus={false}
            />
            <Text style={styles.marginBottom}>Địa chỉ: </Text>
            <TextInput
              editable={false}
              placeholder="Địa chỉ"
              value={info.user_address}
              style={styles.input}
            />
          </View>
          <Text style={styles.wrapperInputs_title}>CMND/Căn cước/Hộ chiếu</Text>
          <View style={styles.wrapperInputs}>
            <TextInput
              placeholder="Số CMND | CCCD | Hộ chiếu"
              value={passportCode}
              onChangeText={text => setPassportCode(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Nơi cấp"
              value={addressIssued}
              onChangeText={text => setAddressIssued(text)}
              style={styles.input}
            />
          </View>
          <Text style={styles.wrapperInputs_title}>Thông tin học tập</Text>
          <View style={styles.wrapperInputs}>
            <Text style={styles.marginBottom}>Mã tài khoản: </Text>
            <TextInput
              placeholder="Mã tài khoản"
              value={users.user_login}
              onChangeText={text => setAccountCode(text)}
              style={styles.input}
              editable={false}
              selectTextOnFocus={false}
            />
            <Text style={styles.marginBottom}>Khoá học: </Text>
            <TextInput
              placeholder="Khoá học"
              value={course}
              onChangeText={text => setCourse(text)}
              style={styles.input}
            />
            <Text style={styles.marginBottom}>Chuyên ngành: </Text>
            <TextInput
              editable={false}
              placeholder="Chuyên ngành"
              value={info.chuyen_nganh}
              onChangeText={text => setCourse(text)}
              style={styles.input}
            />
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
    padding: 10,
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
    marginBottom: 20,
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
    fontWeight: 'bold',
    paddingBottom: 10,
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
    marginBottom: 10,
  },
  marginBottom: {
    marginBottom: 5,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default memo(FormInfoMember);
