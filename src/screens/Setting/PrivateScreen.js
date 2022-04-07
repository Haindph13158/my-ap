import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Switch } from "react-native-elements";
import TopBar from '../../container/header/TopBar';
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  boxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    paddingBottom: 15,
    paddingTop: 15,
    marginLeft: 20,
    width: '100%',
    color: 'black',
  },
});
const PrivateScreen = props => {
  const [value, setValue] = React.useState(true);
  return (
    <>
      <TopBar />
      <View style={styles.box}>
        <View style={styles.boxItem}>
          <Text>Cho phép nhận thông báo trên app</Text>
          <Switch
            color="#F95B00"
            value={value}
            onValueChange={() => setValue(!value)}
          />
        </View>
      </View>
    </>
  );
};

PrivateScreen.propTypes = {};

export default PrivateScreen;
