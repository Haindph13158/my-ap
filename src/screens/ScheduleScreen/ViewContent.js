import React, {memo} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import TopBar from '../../container/header/TopBar';
import routers from '../../container/header/routerParams';
const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: 'red',
  },
  content: {
    backgroundColor: '#fff',
    margin: 10,
    height: '100%',
    padding: 12,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 14,
    width: '60%',
  },
  text: {
    color: '#888',
    fontSize: 12,
  },
  textContent: {
    fontSize: 14,
  },
  two: {
    flex: 1,
    justifyContent: 'center',
  },
  three: {
    paddingTop: 43,
  },
  ford: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    paddingBottom: 70,
  },
  icon: {
    background: 'none',
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 100,
  },
  titleHeader: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 60,
  },
});
function ViewContent(props) {
  const navigation = useNavigation();
  const {route} = props;
  const activeRoute = useRoute();
  let headerTitle = activeRoute.name;
  
  routers.forEach((route) => {
    if(route.name === headerTitle){
      headerTitle = route.title
    }
  })
  if(route && route?.params){
    console.log("route.params.headerTitle", route.params.headerTitle);
    headerTitle = route.params.headerTitle
  }
  return (
    <>
      <TopBar headerTitle={headerTitle} />
      <ScrollView>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.content}>
            <View>
              <Text style={styles.textBold}>Phòng TC&QLĐT thông báo</Text>
            </View>

            <View style={styles.two}>
              <Text style={styles.textContent}>
                1. Hiện tại đã có bằng tốt nghiệp của sinh viên tốt nghiệp đợt
                3.2020
              </Text>
              <Text style={styles.textContent}>
                2. Sinh viên mang thẻ sinh viên hoặc chứng minh thư lên phòng
                dịch vụ sinh viên đẻ nhận bằng
              </Text>
            </View>

            <View style={styles.three}>
              <Text>
                <Text style={styles.textBold}>
                  Thời gian nhận bằng từ ngày 11/11/2000 đến 30//11/2020, tại
                  phòng dịch vụ sinh viên
                </Text>
                <Text style={styles.textContent}>
                  {' '}
                  (tầng 1 toàn nhà P trường FPT Polytechnic Hà nội phố Trịnh văn
                  bô, Nam từ liêm, Hà nội)- Gặp cán bộ PĐT ThuBt trong giờ hành
                  chính
                </Text>
              </Text>
              <Text>
                Mọi ý kiến thắc mắc xin liên hệ Phòng tổ chức và quản lí đào
                tạo.
              </Text>
              <Text>SĐT: 024.7300.1955 nhánh số 2 hoặc 024.259.4013</Text>
            </View>
            <View style={styles.ford}>
              <Text style={styles.textContent}>
                Hà nội, ngày 11 tháng 11 năm 2020
              </Text>
              <View
                style={{
                  paddingTop: 20,
                }}>
                <Text style={styles.textBold}>
                  PHÒNG TỔ CHỨC VÀ QUẢN LÍ ĐÀO ĐẠO
                </Text>
              </View>
            </View>
            <View style={styles.bottom}>
              <Text style={styles.text}>Người đăng: huongnt166 </Text>
              <Text style={styles.text}>Thời gian: 17:32:15-11/11/2020</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
ViewContent.propTypes = {};

export default memo(ViewContent);
