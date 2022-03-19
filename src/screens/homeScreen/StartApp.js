import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ConfigHeader from '../../container/header/configHeader'
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  viewImage: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  logo: {
    width: 320,
    height: 109,
  },
  image: {
    width: 300,
    height: 450,
  },
  loading: {
    width: 100,
    height: 100,
  },
});
function StartApp(props) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setTimeout(() => {
      navigation.navigate('FirstLogin');
    }, 3000);
  }, [navigation]);
  return (
    <>
    <View>
      <View style={styles.container}>
        {!loading && (
          <ActivityIndicator  size={100} color="#00ff00" />
        )}
        {loading && (
          <View>
            <View style={styles.viewLogo}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/320px-FPT_Polytechnic.png',
                }}
              />
            </View>
            <View style={styles.viewImage}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n.png',
                }}
              />
            </View>
          </View>
        )}
      </View>
    </View>
    </>
    
  );
}

StartApp.propTypes = {};

export default StartApp;
