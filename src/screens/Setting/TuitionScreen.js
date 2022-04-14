import React, {memo, useCallback, useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {useDispatch, useSelector} from 'react-redux';
import IconView from '../../common/IconView';
import TuitionComponent from '../../components/TuitionComponent';
import TopBar from '../../container/header/TopBar';
import {fetchTransaction} from '../../features/reducer/transaction';
import {fetchTuiTion} from '../../features/reducer/TuitionSlide';
const WIDTH_WINDOWN = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  ViewItemContent: {
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#635a6e',
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
  },
  textContent: {
    fontStyle: 'italic',
  },
  textStatus: {
    fontWeight: 'bold',
    color: 'green',
  },
  list_english: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list_english_item: {
    alignItems: 'center',
    width: (WIDTH_WINDOWN - 20) / 4,
  },
  statusOver: {
    backgroundColor: 'red',
    height: 10,
    width: 30,
  },
  viewDetail: {
    marginTop: 10,
    paddingTop: 10,
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    width: '100%',
    borderStyle: 'dashed',
  },
  textDetailHeader: {
    color: '#563183',
    fontWeight: '400',
  },
  textDetailKey: {
    fontWeight: 'bold',
    color: '#635a6e',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box_content_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginTop: {
    marginTop: 10,
  },
  marginLeft: {
    marginLeft: 5,
  },
  textWidth50: {
    width: '40%',
    fontWeight: 'bold',
    color: '#635a6e',
  },
  textWidth30: {
    width: '30%',
    fontWeight: 'bold',
    color: '#635a6e',
    textAlign: 'center',
  },
  textWidth20: {
    width: '30%',
    fontWeight: 'bold',
    color: '#635a6e',
    textAlign: 'center',
  },

  box: {
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 8,
  },
  titleEng: {
    fontSize: 24,
    color: '#635a6e',
    fontWeight: '500',
  },
});

function TuitionScreen(props) {
  const [expanded, setExpanded] = React.useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const {users} = useSelector(state => state.auths);
  const {tuitions, loading} = useSelector(state => state.tuitions);
  const {transaction} = useSelector(state => state.transaction);
  const kihoc = tuitions.english_finish - 1;
  const dispatch = useDispatch();
  const getApiData = useCallback(() => {
    dispatch(fetchTuiTion(users));
    dispatch(fetchTransaction(users));
  }, [users]);

  const _onRefresh = useCallback(() => {
    getApiData();
  }, [getApiData]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <>
      <TopBar />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={_onRefresh} />
        }
        style={styles.container}>
        {tuitions && kihoc && !loading ? (
          <View>
            <View style={styles.ViewItemContent}>
              <IconView
                component="MaterialCommunityIcons"
                name="card-account-details"
                size={40}
                color="green"
              />
              <Text style={styles.textBold}>{tuitions.study_wallet} đ</Text>
              <Text style={styles.textContent}>Ví học phí</Text>
            </View>
            <View style={styles.ViewItemContent}>
              <IconView
                component="MaterialCommunityIcons"
                name="card-account-details"
                size={40}
                color="#d50b0b"
              />
              <Text style={styles.textBold}>{tuitions.relearn_wallet} đ</Text>
              <Text style={styles.textContent}>Ví học lại/Thi lại</Text>
            </View>
            <View style={styles.ViewItemContent}>
              <IconView
                component="MaterialCommunityIcons"
                name="card-account-details"
                size={40}
                color="#0728b6"
              />
              <Text style={styles.textBold}>{tuitions.etc_wallet} đ</Text>
              <Text style={styles.textContent}>Ví khác</Text>
            </View>
            <View style={styles.ViewItemContent}>
              <IconView
                component="MaterialCommunityIcons"
                name="card-account-details"
                size={40}
                color="#cdaa07"
              />
              <Text style={styles.textBold}>{tuitions.promotion_wallet} đ</Text>
              <Text style={styles.textContent}>Ví ưu đãi</Text>
            </View>
            <View style={styles.ViewItemContent}>
              <Text style={styles.titleEng}>Lộ trình học tiếng anh</Text>
              <View style={styles.list_english}>
                {tuitions?.list_english &&
                  tuitions?.list_english.length &&
                  tuitions?.list_english.map(item => (
                    <View key={item.level} style={styles.list_english_item}>
                      <Text style={styles.textBold}>{item.subject_name}</Text>
                      <Text style={styles.textStatus}>{item.text}</Text>
                    </View>
                  ))}
              </View>
              <View style={styles.viewDetail}>
                <Text style={styles.textDetailHeader}>
                  Thông tin về tiếng anh học gần nhất
                </Text>
                <View style={styles.flexRow}>
                  <Text style={styles.textDetailKey}>Level: </Text>
                  <Text>{tuitions?.english_finish}</Text>
                </View>
                <View style={styles.flexRow}>
                  <Text style={styles.textDetailKey}>Tên môn: </Text>
                  <Text>{tuitions?.list_english[kihoc]?.subject_name}</Text>
                </View>
                <View style={styles.flexRow}>
                  <Text style={styles.textDetailKey}>Trạng thái: </Text>
                  <Text style={styles.textStatus}>
                    {tuitions?.list_english &&
                      tuitions?.list_english?.length &&
                      tuitions?.list_english[kihoc]?.text}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.marginTop}
                  activeOpacity={0.8}
                  onPress={toggleExpanded}>
                  <View style={styles.box_content_item}>
                    <View style={styles.flexRow}>
                      <IconView
                        name="pencil-square-o"
                        component="FontAwesome"
                        size={20}
                      />
                      <Text style={styles.marginLeft}>
                        Lịch sử học tiếng anh
                      </Text>
                    </View>
                    <View style={styles.viewIcon}>
                      {expanded ? (
                        <IconView
                          name="right"
                          component="AntDesign"
                          size={14}
                          color="rgba(0,0,0,0.5)"
                        />
                      ) : (
                        <IconView
                          name="down"
                          component="AntDesign"
                          size={14}
                          color="rgba(0,0,0,0.5)"
                        />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <Collapsible duration={200} collapsed={expanded} align="center">
                  <View
                    style={[
                      styles.flexRow,
                      {
                        paddingBottom: 5,
                        paddingTop: 5,
                        borderBottomColor: 'rgba(0,0,0,0.1)',
                        borderBottomWidth: 1,
                      },
                    ]}>
                    <Text style={styles.textWidth50}>Tên môn</Text>
                    <Text style={styles.textWidth30}>Học kỳ</Text>
                    <Text style={styles.textWidth20}>Trạng thái</Text>
                  </View>
                  {tuitions?.list_english &&
                    tuitions?.list_english.length > 0 &&
                    tuitions?.list_english.map(item => (
                      <View
                        key={item.level}
                        style={[
                          styles.flexRow,
                          {
                            paddingBottom: 5,
                            paddingTop: 5,
                            borderBottomColor: 'rgba(0,0,0,0.1)',
                            borderBottomWidth: 1,
                          },
                        ]}>
                        <Text style={[styles.textWidth50, {fontWeight: '300'}]}>
                          {item.subject_name}
                        </Text>
                        <Text style={[styles.textWidth30, {fontWeight: '300'}]}>
                          {item.level}
                        </Text>
                        <Text style={[styles.textWidth20, {color: 'green'}]}>
                          {item.text}
                        </Text>
                      </View>
                    ))}
                </Collapsible>
              </View>
            </View>
            <View style={styles.box}>
              <Text>Thông tin giao dịch, hoá đơn</Text>
              {transaction.map(item => (
                <TuitionComponent tran={item} key={item.id} />
              ))}
            </View>
          </View>
        ): null}
      </ScrollView>
    </>
  );
}

TuitionScreen.propTypes = {};

export default memo(TuitionScreen);
