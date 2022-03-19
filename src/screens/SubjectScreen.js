import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
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
} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import ConfigHeader from '../container/header/configHeader';
const data = [
  {
    name: '* Gia hạn học phí',
    nameScreen: 'Fee',
  },
  {
    name: '* Đăng ký học lại',
    nameScreen: 'Subject',
  },
  {
    name: '* Đăng ký thi lại',
    nameScreen: 'Subject',
  },
  {
    name: '* Chuyển ngành',
    nameScreen: 'Subject',
  },
  {
    name: '* Đăng ký bảo lưu',
    nameScreen: 'Subject',
  },
];
const data2 = [
  {
    name: 'Khen thưởng / Kỉ luật',
    icon: 'grade',
    nameScreen: 'Reward',
  },
  {
    name: 'SMS',
    icon: 'chat',
    nameScreen: 'Sms',
  },
];
function SubjectScreen(props) {
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigation();
  const category = [];
  const log = () => console.log('this is an example method');
  const setHaldelClick = data => {
    console.log(data);
    navigation.navigate(data.nameScreen);
  };
  return (
    <>
      <ConfigHeader />
      <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.texttitle}>
          <Text style={styles.texttitle}>Thông tin thêm</Text>
        </View>
        <ListItem.Accordion
          style={styles.accordion}
          content={
            <>
              <Icon
                name="language"
                style={styles.icon}
                color="#F5B16D"
                size={30}
              />
              <ListItem.Content>
                <ListItem.Title>Dịch vụ trực tuyến</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}>
          {data.map((item, i) => (
            <ListItem
              key={i}
              onPress={() => setHaldelClick(item)}
              bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={styles.text}>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </ListItem.Accordion>
        {data2.map((item, i) => (
          <ListItem key={i} onPress={() => setHaldelClick(item)} bottomDivider>
            <Icon
              name={item.icon}
              style={styles.icon}
              color="#F5B16D"
              size={30}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.text2}>{item.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#DDDDDD',
  },
  container: {
    backgroundColor: '#ffffff',

    flex: 2,
  },
  texttitle: {
    fontWeight: 'bold',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    paddingRight: 20,
  },
  text: {
    marginLeft: 10,
  },
  text2: {
    marginLeft: -15,
  },
  accordion: {
    borderTopWidth: 0.5,
  },
});

SubjectScreen.propTypes = {};

export default SubjectScreen;
