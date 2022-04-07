import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TopBar from '../container/header/TopBar';
import { fetchSms } from '../features/reducer/sms';


const SmsScreen = () => {
    const {sms} = useSelector(item => item.smsUser)
    const {users} = useSelector(item => item.auths)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchSms(users))
    },[dispatch])
  const renderItem = ({item}) => (
    <>
      
      <TouchableOpacity activeOpacity={0.8} style={styles.item}>
        <View>
          <Text style={styles.textItemLeft}>{item.is_active === 1 ? 'Kích hoạt' : null}</Text>
        </View>
        <View>
          <Text style={styles.textItem}>{item.owner_type}</Text>
          <Text style={styles.textItem}>Số điện thoại: {item.phone}</Text>
          <Text style={styles.textItem}>Họ và Tên: {item.owner_name}</Text>
          <Text style={styles.textItem}>Ngày tạo: {item.created_on}</Text>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <>
      <TopBar />
      <FlatList
        data={sms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  title: {
    fontSize: 32,
  },
  textItem: {
    marginBottom: 5,
    color: '#000',
    fontWeight: '500',
  },
  textItemLeft: {
    width: 100,
    marginRight: 10,
    color: 'green',
  },
});

export default SmsScreen;
