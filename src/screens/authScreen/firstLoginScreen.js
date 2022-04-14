import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useDispatch, useSelector} from 'react-redux';
import googleIcon from '../../assets/google-plus.png';
import ConfirmMessage from '../../components/confirmMessage/confirmMessage';
import {login, logout} from '../../features/auth/authSlide';
import {fetchCampus} from '../../features/reducer/campusSlide';
GoogleSignin.configure({
  offlineAccess: true,
  forceCodeForRefreshToken: true,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId:
    '977319685675-97jfg1gjq73e1bpfb5u8b9d85d7rlm2o.apps.googleusercontent.com',
});
const WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = WIDTH * 0.88;
const carouselItems = [
  {
    imgUrl:
      'https://reviewedu.net/wp-content/uploads/2021/09/Cao-dang-fpt.jpeg',
  },
  {
    imgUrl:
      'https://vtv1.mediacdn.vn/thumb_w/650/2020/8/20/photo1534139475155-15341394751561891087312-1597925109215457201345.jpg',
  },
  {
    imgUrl:
      'http://icdn.dantri.com.vn/zoom/1200_630/2020/08/28/tin-nhap-hoc-docx-1598604173087.png',
  },
];

const messgageError =
  'Email của bạn không hợp lệ, vui lòng đăng nhập lại email đúng !';

const FirstLoginScreen = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const onShowModal = () => {
    setIsShowModal(prev => !prev);
  };
  const dispatch = useDispatch();
  const signOut = async () => {
    dispatch(logout({}))
    await GoogleSignin.signOut();
  };
  // const {campus} = useSelector(state => state.campus);
  const [campus, setCampus] = useState([]);
  const [dataSlot, setDataSlot] = useState([]);
  const [campusId, setCampusId] = useState('');
  useEffect(() => {
    axios
      .get('https://api.poly.edu.vn/myap/fu/campus/get-list')
      .then(res => res.data)
      .then(data => {
        setCampus(data.data);
        const arr = [];
        data.data.forEach(item => {
          arr.push(item.campus_name);
        });
        setDataSlot(arr);
      });
  }, []);

  const carouselCardItem = ({item, index}) => {
    return (
      <View style={styles.cardCarousel} key={index}>
        <Image style={styles.Image} source={{uri: item.imgUrl}} />
      </View>
    );
  };

  const valueSelect = useCallback(value => {
    const checkCampus = campus.find(item => item.campus_name === value);
    if (checkCampus) {
      setCampusId(checkCampus.campus_code);
    }
  }, [campus]);

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    let {idToken} = await GoogleSignin.signIn();
    if (idToken) {
      try {
        let {data} = await axios.post(
          'https://api.poly.edu.vn/api/auth/login-token-google',
          {id_token: idToken, campus_code: campusId},
        );
        dispatch(login(data.data));
        navigation.navigate('Home');
      } catch (err) {
        signOut();
        onShowModal();
      }
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.slider_container}>
          <Carousel
            data={carouselItems}
            renderItem={carouselCardItem}
            sliderWidth={ITEM_WIDTH}
            itemWidth={ITEM_WIDTH}
            useScrollView={true}
            onSnapToItem={index => setActiveSlide(index)}
          />
        </View>
      </SafeAreaView>
      {isShowModal && (
        <ConfirmMessage
          message={messgageError}
          onShowModal={onShowModal}
          type="error"
        />
      )}
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 50,
          marginHorizontal: 8,
          backgroundColor: '#000',
          borderColor: 'red',
          borderWidth: 1,
        }}
        inactiveDotColor="red"
        dotColor="red"
        animatedDuration={100}
        inactiveDotScale={1}
      />
      <SelectDropdown
        data={dataSlot}
        buttonStyle={styles.btnStyle}
        buttonTextStyle={styles.buttonTextStyle}
        dropdownStyle={styles.dropdownStyle}
        defaultButtonText={`Chọn cơ sở đào tạo`}
        onSelect={(selectedItem, index) => {
          valueSelect(selectedItem);
        }}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem;
        }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={campusId === ''}
          style={styles.button_second}
          onPress={
            () =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            // () => handelNoti()
          }>
          <Image style={styles.googleIcon} source={googleIcon} />
          <Text style={styles.buttonText}>Đăng nhập bằng tài khoản google</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 35,
          width: '80%',
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text
            style={{
              width: 50,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '500',
            }}>
            Hoặc
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button_bottom}>
          <Text style={styles.buttonText}>
            Đăng nhập bằng tài khoản phụ huynh
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.left_bottom}>
          <Text style={styles.version}>Phiên bản 1.0</Text>
          <Text style={styles.version}>Bản quyền FPT</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.right_bottom}>
            <Text style={{color: 'rgb(64, 169, 255)'}}>Giúp đỡ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  slider_container: {
    height: 200,
    width: ITEM_WIDTH,
    marginBottom: 30,
    overflow: 'hidden',
  },
  cardCarousel: {
    width: ITEM_WIDTH,
  },
  Image: {
    height: 200,
    borderRadius: 8,
  },
  googleIcon: {
    marginRight: 10,
  },
  buttonContainer: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button_second: {
    flexDirection: 'row',
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
  button_first: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderRadius: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#333',
    borderWidth: 2,
  },
  button_bottom: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderRadius: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#333',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#333',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 130,
  },
  right_bottom: {
    marginLeft: WIDTH / 2,
  },
  btnStyle: {
    // backgroundColor: 'red',
    borderColor: '',
    width: '85%',
    borderRadius: 40,
    borderColor: 'rgb(249, 92, 4)',
    borderWidth: 2,
    height: 60,
  },
  buttonTextStyle: {},
  dropdownStyle: {
    borderRadius: 10,
  },
});

export default FirstLoginScreen;
