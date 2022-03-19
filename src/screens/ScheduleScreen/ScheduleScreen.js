import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import ConfigHeader from '../../container/header/configHeader';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {onSetSchedule} from '../../features/scheduleSlide/scheduleSlide';

const colums = [
  {
    id: 0,
    title: 'Học Tập',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'study',
  },
  {
    id: 1,
    title: 'Hoạt động',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'actions',
  },
  {
    id: 2,
    title: 'Học phí',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
  ,
  {
    id: 2,
    title: 'Học phí',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
  {
    id: 2,
    title: 'Học phí',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
  {
    id: 2,
    title: 'Học phí',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
];
const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  tab: {
    height: 10,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
  },
  text: {
    color: '#888',
    fontSize: 12,
  },
  icon: {
    marginLeft: 350,
    position: 'absolute',
  },
  View: {
    flexDirection: 'row',
  },
  iconHeader: {
    position: 'absolute',
    paddingTop: 60,
    paddingLeft: 320,
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 7,
  },
});
function ScheduleScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {schedules} = useSelector(state => state.schedules);
  const navigate = () => {
    navigation.navigate('viewContent', {
      headerTitle: 'THÔNG BÁO NHẬN BẰNG TỐT NGHIỆP ĐỢT 3.2020',
    });
  };

  const setOptionSchedule = keyIndex => {
    dispatch(onSetSchedule(keyIndex.ref.props));
  };

  const renderData = () => {
    return (
      <SafeAreaView style={styles.container}>
        {schedules.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => navigate()}
              activeOpacity={0.8}
              style={styles.item}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>
                  {item.authorTitle}: {item.author}{' '}
                </Text>
                <Text style={styles.text}>
                  {item.timeTitle}: {item.time}{' '}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </SafeAreaView>
    );
  };

  return (
    <>
      <ConfigHeader />
      <ScrollableTabView
        renderTabBar={tabBarProps => {
          return <ScrollableTabBar />;
        }}
        tabBarPosition="top"
        onChangeTab={e => {
          setOptionSchedule(e);
        }}
        initialPage={0}
        tabBarUnderlineStyle={{
          backgroundColor: 'red',
          height: 1,
        }}
        tabBarBackgroundColor={'white'}
        tabBarActiveTextColor={'red'}
        tabBarTextStyle={{fontSize: 14}}

        // scrollWithoutAnimation={true}
      >
        {colums.map((item, index) => (
          <View key={index} tabLabel={item.title}>
            <ScrollView>{renderData()}</ScrollView>
          </View>
        ))}
      </ScrollableTabView>
    </>
  );
}

ScheduleScreen.propTypes = {};

export default ScheduleScreen;
