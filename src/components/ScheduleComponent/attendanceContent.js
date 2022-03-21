import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import IconView from '../../common/IconView';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

function AttendanceContent(props) {
  const {attendance} = props;
  const navigate = () => {};
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigate()}
        activeOpacity={0.8}
        style={styles.item}>
        <View>
          <Text style={styles.title}>{attendance.title}</Text>
          <Text style={styles.text}>
            {attendance.authorTitle}: {attendance.author}{' '}
          </Text>
          <Text style={styles.text}>
            {attendance.timeTitle}: {attendance.time}{' '}
          </Text>
        </View>
        <IconView
          name="right"
          component="AntDesign"
          size={14}
          color="rgba(0, 0, 0,0.5)"
        />
      </TouchableOpacity>
    </View>
  );
}

AttendanceContent.propTypes = {};

export default AttendanceContent;
