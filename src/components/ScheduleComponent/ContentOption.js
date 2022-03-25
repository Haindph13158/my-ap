import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, StyleSheet, Text, StatusBar } from 'react-native';

function ContentOption({ keyIndex, content }) {
  const navigation = useNavigation();
  const navigate = (id, name, code) => {
    navigation.navigate('Atendance', {
      id: id,
      headerTitle: name + '-' + code
    })
  };
  const listAttendance = useMemo(() => {
    return (
      <TouchableOpacity
        onPress={() => navigate(content.subject_id, content.subject_name, content.group_name)}
        activeOpacity={0.8}
        style={styles.item}>
        <View>
          <Text style={styles.titleAttendace}>{content.subject_name}</Text>
          <Text style={styles.text}>
            Vắng: <Text
              style={styles.total_absent}
            >{content.total_absent}/{content.total_to_now}</Text> cho tới hiện tại
          </Text>
          <Text style={styles.text}>
            Vắng: <Text
              style={styles.total_absent}
            >{content.total_absent}/{content.total_session}</Text> trên tổng số
          </Text>
        </View>
      </TouchableOpacity>
    )


  }, [])

  const contentOption = useMemo(() => {
    return (
      <TouchableOpacity
        onPress={() => navigate()}
        activeOpacity={0.8}
        style={styles.item}>
        <View>
          <Text style={styles.title}>{content.title}</Text>
          <Text style={styles.text}>
            {content.authorTitle}: {content.author}{' '}
          </Text>
          <Text style={styles.text}>
            {content.timeTitle}:{content.time}{' '}
          </Text>
        </View>
      </TouchableOpacity>
    )

  })


  return (
    <View key={content.id}>
      {
        keyIndex === 'attendance' ? listAttendance : contentOption
      }
    </View>
  );
}

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
    fontSize: 13,
    paddingBottom: 5,
    paddingTop: 5
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
  titleAttendace: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  total_absent: {
    color: 'orange',
    fontWeight: 'bold'
  }
});

ContentOption.propTypes = {
  content: PropTypes.object
};

export default memo(ContentOption);
