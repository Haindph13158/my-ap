import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username: Số điện thoại phụ huynh"
          value={email}
          onChangeText={text => setEmail(text)}
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
          - Phụ huynh sử dụng số điện thoại đăng ký với nhà trường để đăng nhập
        </Text>
        <Text style={styles.noteText}>
          - Để lấy mật khẩu truy cập phụ huynh soạn tin nhắn cú pháp{' '}
          <Text style={{fontWeight: 'bold'}}>POLY MK </Text>
          gửi về đầu số <Text style={{fontWeight: 'bold'}}>8100</Text>
        </Text>
      </View>
      <Button
        title="FirstLoginScreen"
        onPress={() => navigation.navigate('FirstLogin')}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 20,
  },
});
