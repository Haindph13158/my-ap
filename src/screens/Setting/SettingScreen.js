import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import React, { memo } from 'react';
import {
  Text,

} from "react-native-elements";
import ConfigHeader from "../../container/header/configHeader";
import IconView from "../../common/IconView";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    icon: 'heart-half',
    link: 'Ionicons',
    content: 'Khen thưởng & Kỷ luật',
    intro: 'Xem thông tin khen thưởng và kỷ luật',
    route: 'Reward'
  },
  {
    icon: 'planet-outline',
    link: 'Ionicons',
    content: 'Dịch vụ trực tuyến',
    intro: 'Sử dụng các dịch trực tuyến',
    route: 'Listservices'
  },
  {
    icon: 'phone-call',
    link: 'Feather',
    content: 'SMS',
    intro: 'Danh sách số điện thoại nhận SMS',
    route: 'Sms'
  },
  {
    icon: 'creditcard',
    link: 'AntDesign',
    content: 'Học phí',
    intro: 'Thông tin giao dịch, hoá đơn',
    route: 'Tuition'
  },
];

function SettingScreen() {
  const navigation = useNavigation();

  return (
    <>
      <ConfigHeader />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Thông tin thêm</Text>
          </View>
          {data.map((item, index) => (
            <View key={index} style={styles.container}>
              <TouchableOpacity onPress={() => navigation.navigate(item.route)} >
                <View style={styles.touchable}>
                  <View style={styles.icon}>
                    <IconView component={item.link} name={item.icon} size={35} />
                  </View>
                  <View>
                    <Text style={styles.text}>{item.content}</Text>
                    <Text style={styles.text2}>{item.intro}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 10,
    fontSize: 32,
  },
  touchable: {
    flexDirection: "row",
    alignItems: 'center',
    borderWidth: 2,
    padding: 20,
    borderColor: "rgba(158, 150, 150, .5)",
    borderRadius: 15,
    backgroundColor: 'white'
  },
  icon: {
    marginRight: 20,
  },
  text: {
    fontWeight: "bold",
    flexDirection: "column",
    paddingBottom: 10,
  },
  text2: {
    color: "gray",
  }
});

SettingScreen.propTypes = {};

export default memo(SettingScreen);
