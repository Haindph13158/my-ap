import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import ConfirmMessage from '../../components/confirmMessage/confirmMessage';
import TopBar from '../../container/header/TopBar';
import {login} from '../../features/auth/authSlide';

const messgageError = 'Tài khoản hoặc mật khẩu không đúng !';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [sđt, setSđt] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const onShowModal = () => {
    setIsShowModal(prev => !prev);
  };
  const handleLogin = () => {
    const user = {
      phone_number: sđt,
      password: password,
    };

    axios
      .post('https://api.poly.edu.vn/api/auth/login-parent', user)
      .then(res => {
        res.data.data.campus_code = res.data.data.campus_code
          ? res.data.data.campus_code
          : 'ph';
        dispatch(login(res.data.data));
        navigation.navigate('Home');
      })
      .catch(err => {
        onShowModal();
      });
  };

  return (
    <>
      <TopBar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Đăng nhập tài khoản phụ huynh</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username: Số điện thoại phụ huynh"
              value={sđt}
              onChangeText={text => setSđt(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.noteContainer}>
            <Text style={styles.noteText}>
              - Phụ huynh sử dụng số điện thoại đăng ký với nhà trường để đăng
              nhập
            </Text>
            <Text style={styles.noteText}>
              - Để lấy mật khẩu truy cập phụ huynh soạn tin nhắn cú pháp{' '}
              <Text style={{fontWeight: 'bold'}}>POLY MK </Text>
              gửi về đầu số <Text style={{fontWeight: 'bold'}}>8100</Text>
            </Text>
          </View>
          {isShowModal && (
            <ConfirmMessage
              message={messgageError}
              onShowModal={onShowModal}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'rgb(240, 240, 240)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 40,
    marginTop: 30,
    height: 60,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  noteContainer: {
    width: '80%',
    marginTop: 50,
  },
  noteText: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderRadius: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(249, 92, 4)',
    borderWidth: 2,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'rgb(249, 92, 4)',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
});
