import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View, StyleSheet, Text, StatusBar} from 'react-native';

function ContentOption(props) {
  const {content} = props;
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('viewContent', {
      headerTitle: 'THÔNG BÁO NHẬN BẰNG TỐT NGHIỆP ĐỢT 3.2020',
    });
  };
  return (
    <View key={content.id}>
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

ContentOption.propTypes = {
    content: PropTypes.object
};

export default memo(ContentOption);
