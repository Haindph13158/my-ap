import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import IconView from '../../common/IconView';
import Avatar from '../../components/avatarComponent/Avatar';
import Modal from 'react-native-modal';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {logout} from '../../features/auth/authSlide';
GoogleSignin.configure({
  webClientId:
    '947392457157-e7rslp5fbb4qo208je5lek26euqjn8ro.apps.googleusercontent.com',
});
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#F95B00',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    // marginLeft: -5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textUser: {
    marginLeft: 5,
    color: 'white',
    fontWeight: '600',
  },
  textEmail: {
    color: 'black',
    fontWeight: '700',
  },
  safe: {
    backgroundColor: '#F95B00',
  },
  modal: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 40,
    top: 0,
    left: 0,
    bottom: 0,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  viewLogout: {
    padding: 40,
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
  },
  textLogout: {
    marginLeft: 10,
    color: 'blue',
    fontWeight: '600',
  },
  modalUser: {
    marginLeft: 20,
    marginTop: 40,
  },
  marginTop: {
    marginTop: 20,
  },
  optionModal: {
    marginTop: 20,
  },
  optionViewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textBtn: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});
function ConfigHeader(props) {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {users} = useSelector(state => state.auths);
  const [isShowModal, setIsShowModal] = useState(false);

  const onShowModal = () => {
    setIsShowModal(prev => !prev);
  };

  const Logout = async () => {
    await GoogleSignin.signOut();
    dispatch(logout({}));
    navigation.navigate('FirstLogin');
  };
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.image} onPress={onShowModal}>
          <Avatar
            width={40}
            height={40}
            uri="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          />

          <Text style={styles.textUser}>Xin chào, {users.full_name}</Text>
        </TouchableOpacity>
        <View style={styles.flexRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate('notification')}
            activeOpacity={0.8}
            style={{marginRight: 10}}>
            <IconView
              component="Ionicons"
              name="ios-notifications-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
      {isShowModal && (
        <Modal
          style={{margin: 0}}
          onModalHide={onShowModal}
          visible={true}
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          useNativeDriver={true}
          onBackdropPress={onShowModal}
          onBackButtonPress={onShowModal}
          animationInTiming={400}
          isVisible={true}
          backdropColor="black"
          hasBackdrop={true}>
          <View style={styles.modal}>
            <View style={styles.modalUser}>
              <Avatar
                width={60}
                height={60}
                uri="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              />
              <View style={styles.marginTop}>
                <Text style={styles.textEmail}>{users.full_name}</Text>
                <Text style={styles.textEmail}>{users.user_email}</Text>
              </View>
              <View style={styles.optionModal}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Home');
                    setIsShowModal(false);
                  }}
                  style={styles.optionViewBtn}>
                  <IconView
                    component="AntDesign"
                    name="home"
                    size={24}
                    color="#D47632"
                  />
                  <Text style={styles.textBtn}>Trang chủ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('FormInfo');
                    setIsShowModal(false);
                  }}
                  style={styles.optionViewBtn}>
                  <IconView
                    component="FontAwesome5"
                    name="user-circle"
                    size={24}
                    color="#D47632"
                  />
                  <Text style={styles.textBtn}>Hồ sơ cá nhân</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.viewLogout}>
              <TouchableOpacity style={styles.flexRow} onPress={Logout}>
                <IconView
                  component="MaterialCommunityIcons"
                  name="logout-variant"
                  size={24}
                  color="blue"
                />
                <Text style={styles.textLogout}>Đăng xuất</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

ConfigHeader.propTypes = {};

export default ConfigHeader;
