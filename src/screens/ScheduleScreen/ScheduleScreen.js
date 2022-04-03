import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  RefreshControl,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ContentOption from '../../components/ScheduleComponent/ContentOption';
import {ScrollView} from 'react-native-gesture-handler';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import ConfigHeader from '../../container/header/configHeader';
import {fetchPosts} from '../../features/reducer/postSlide';
import axios from 'axios';

const colums = [
  {
    id: 0,
    title: 'Học Tập',
    titleStyle: {
      fontSize: 20,
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
    marginTop: 10,
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
  // const {schedules} = useSelector(state => state.schedules);
  const {users} = useSelector(state => state.auths);
  const {posts, loading, error} = useSelector(state => state.posts);
  const navigate = () => {
    navigation.navigate('viewContent', {
      headerTitle: 'THÔNG BÁO NHẬN BẰNG TỐT NGHIỆP ĐỢT 3.2020',
    });
  };
  const [option, setOption] = useState(1);
  const setOptionSchedule = useCallback(
    opt => {
      setOption(opt.i + 1);
    },
    [option],
  );

  const getApiData = useCallback(() => {
    const optionPost = {
      campus_id: users.campus_code,
      type: option,
      page: 1,
      limit: 10,
      token: users.token,
    };
    dispatch(fetchPosts(optionPost));
  }, [users, option]);
  useEffect(() => {
    getApiData();
  }, [getApiData]);

  const _onRefresh = useCallback(() => {
    getApiData();
  }, [getApiData]);

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
        tabBarTextStyle={{fontSize: 14}}>
        {colums.map((item, index) => (
          <View key={index} tabLabel={item.title}>
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={_onRefresh} />
              }>
              <TouchableOpacity activeOpacity={1} style={styles.container}>
                {posts.map((item, index) => (
                  <ContentOption
                    keyIndex="schedule"
                    content={item}
                    key={index}
                  />
                ))}
              </TouchableOpacity>
            </ScrollView>
          </View>
        ))}
      </ScrollableTabView>
    </>
  );
}

ScheduleScreen.propTypes = {};

export default ScheduleScreen;
