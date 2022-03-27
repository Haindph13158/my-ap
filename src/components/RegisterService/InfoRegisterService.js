import React from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NoStyleItemContext} from 'antd/lib/form/context';
const data = [
  {
    code: '7129-AA/19E',
    listService: 'Đăng ký học lại',
    time: '27-3-2022 11:45:20',
    status: 'Đã hoàn thành',
    notification: 'Đã đăng ký thành công',
  },
  {
    code: '59952-AA/21E',
    listService: 'Đăng ký bảo lưu',
    time: '27-3-2022 12:45:20',
    status: 'Đã hoàn thành',
    notification: 'Đã đăng ký thành công',
  },
];
function InfoRegisterService(props) {
  return (
    <View style={styles.container}>
      <>
        <Text style={{color: '#646c9a', fontSize: 24}}>Dịch vụ đã đăng ký</Text>
      </>
      {data.map((item, index) => (
        <View style={styles.zz}>
          <>
            <Text style={styles.text}>Mã đơn: {item.code}</Text>
            <Text style={styles.text}>Loại dịnh vụ: {item.listService}</Text>
            <Text style={styles.text}>Thời gian: {item.time}</Text>
            <Text style={styles.text}>
              Trạng thái: <Text style={{color: 'green'}}>{item.status}</Text>
            </Text>
            <Text style={styles.text}>Thông báo: {item.notification}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  paddingLeft: 10,
                  paddingTop: 15,
                  paddingBottom: 15,
                }}>
                Hành động:
              </Text>
              <View style={styles.buttonStyle}>
                <Button title="Hủy dịch vụ"></Button>
              </View>
            </View>
          </>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  zz: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 8.5,
    elevation: 3,
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',

    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'rgba(158, 150, 150, .5)',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonStyle: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
});

InfoRegisterService.propTypes = {};

export default InfoRegisterService;
