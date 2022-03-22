import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import React from 'react';
import {
  Text,
  ListItem,
  Avatar,
  Icon,
  Badge,
  ListItemProps,
  Button,
  Switch,
  colors,
} from "react-native-elements";
import IconView from "../common/IconView";
const data = [
  {
    icon: 'heart-half',
    link: 'Ionicons',
    content: 'Khen thưởng & Kỷ luật',
    intro: 'Xem thông tin khen thưởng và kỷ luật',
  },
  {
    icon: 'planet-outline',
    link: 'Ionicons',
    content: 'Dịch vụ trực tuyến',
    intro: 'Sử dụng các dịch trực tuyến',
  },
  {
    icon: 'phone-call',
    link: 'Feather',
    content: 'SMS',
    intro: 'Danh sách số điện thoại nhận SMS',
  },
];

function SettingScreen(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Thông tin thêm</Text>
        </View>
        {data.map((item, idex) => (
          <View style={styles.container}>
            <TouchableOpacity>
              <View style={styles.touchable}>
                <View style={styles.icon}>
                <IconView component={item.link} name={item.icon} size={35}  />
                
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
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    padding: 15,
    fontSize: 32,
  },
  touchable: {
    flexDirection: "row",
    borderWidth: 2,
    padding: 25,
    borderColor: "rgba(158, 150, 150, .5)",
    borderRadius: 15,
  },
  icon: {
    
    marginRight: 35,
    paddingTop: 15,
  },
  text: {
    fontWeight: "bold",
    flexDirection: "column",
    paddingBottom: 10,
  },
  text2: {
    color: "gray",
  },
});

SettingScreen.propTypes = {};

export default SettingScreen;
