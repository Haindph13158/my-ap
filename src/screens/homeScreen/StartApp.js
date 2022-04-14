import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import ConfirmMessage from '../../components/confirmMessage/confirmMessage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const messgageError =
  'Phiên đăng nhập của bạn đã hết hạn, vui lòng đăng nhập lại !';
const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewImage: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  logo: {
    width: 320,
    height: 109,
  },
  image: {
    width: 300,
    height: 450,
  },
  loading: {
    width: 100,
    height: 100,
  },
});
function StartApp(props) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const {users} = useSelector(state => state.auths);
  const [isShowModal, setIsShowModal] = useState(false);
  // const onShowModal = () => {
  //   setIsShowModal(prev => !prev);
  //   navigation.navigate('FirstLogin');
  // };

  const signOut = async () => {
    await GoogleSignin.signOut();
    navigation.navigate('FirstLogin');
    dispatch(logout({}));
  };

  useEffect(() => {
    axios
      .get(
        'https://api.poly.edu.vn/app-mobile/fu/schedule/get-test-schedule?campus_id=ph&user_code=PH18005&term_id=39',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + users?.token,
          },
        },
      )
      .then(res => navigation.navigate('Home'))
      .catch(err => {
        signOut();
      });
  }, [navigation]);
  return (
    <>
      <View>
        <View style={styles.container}>
          {!loading && <ActivityIndicator size={100} color="#00ff00" />}
          {loading && (
            <View>
              <View style={styles.viewLogo}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/320px-FPT_Polytechnic.png',
                  }}
                />
              </View>
              <View style={styles.viewImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n.png',
                  }}
                />
              </View>
            </View>
          )}
          {/* {isShowModal && users?.token && (
            <ConfirmMessage
              message={messgageError}
              onShowModal={onShowModal}
              type="error"
            />
          )} */}
        </View>
      </View>
    </>
  );
}

StartApp.propTypes = {};

export default StartApp;
