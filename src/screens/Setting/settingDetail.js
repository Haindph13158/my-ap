import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TopBar from '../../container/header/TopBar';
import IconView from '../../common/IconView';
import {useNavigation} from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { logout } from '../../features/auth/authSlide';
import { useDispatch } from 'react-redux';
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  boxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  text: {
    paddingBottom: 15,
    paddingTop: 15,
    marginLeft: 20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    width: '100%',
    color: 'black',
  },
});
const SettingDetail = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const Logout = async () => {
    await GoogleSignin.signOut();
    dispatch(logout({}));
    navigation.navigate('FirstLogin');
  };
  return (
    <>
      <TopBar />
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PrivateScreen')}
          activeOpacity={0.5}
          style={styles.boxItem}>
          <IconView
            component="AntDesign"
            name="lock"
            size={24}
            color="#0c1fa4"
          />
          <Text style={styles.text}>Quyền riêng tư</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.boxItem}>
          <IconView
            component="Feather"
            name="shield"
            size={24}
            color="#1eab13"
          />
          <Text style={[styles.text, {borderBottomWidth: 0}]}>
            Tài khoản và bảo mật
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('notification')} activeOpacity={0.5} style={styles.boxItem}>
          <IconView
            component="Ionicons"
            name="notifications-outline"
            color="#e26a15"
            size={24}
          />
          <Text style={styles.text}>Thông báo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Logout} activeOpacity={0.5} style={styles.boxItem}>
          <IconView
            component="Feather"
            name="user-check"
            color="blue"
            size={24}
          />
          <Text style={styles.text}>Chuyển tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Logout}
          activeOpacity={0.5}
          style={styles.boxItem}>
          <IconView component="Feather" name="log-out" size={24} />
          <Text style={[styles.text, {borderBottomWidth: 0}]}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

SettingDetail.propTypes = {};

export default SettingDetail;
