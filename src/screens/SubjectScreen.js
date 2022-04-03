import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import SelectTime from '../components/SelectTime/SelectTime';
import TableITem from '../components/TableItem/TableITem';
import ConfigHeader from '../container/header/configHeader';
import {fetchPoint} from '../features/reducer/pointSubject';
const data = [
  'Spring 2022',
  'Fall 2021',
  'Summer 2021',
  'Spring 2021',
  'Fall 2020',
];

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 10,
  },
});

function SubjectScreen() {
  const navigation = useNavigation();
  const {users} = useSelector(state => state.auths);
  const {point, loading} = useSelector(state => state.point);
  const [termId, setTermId] = useState(39);
  const [defaultVL, setDefaultVl] = useState(data[0]);
  const dispatch = useDispatch();
  const navigate = (id, name) => {
    navigation.navigate('PointSubject', {
      id: id,
      headerTitle: name,
    });
  };
  const valueSelect = useCallback(value => {
    setDefaultVl(value);
    switch (value) {
      case 'Spring 2022':
        setTermId(39);
        break;
      case 'Fall 2021':
        setTermId(38);
        break;
      case 'Summer 2021':
        setTermId(37);
        break;
      case 'Spring 2021':
        setTermId(36);
        break;

      case 'Fall 2020':
        setTermId(35);
        break;

      default:
        setTermId(39);
        break;
    }
  }, []);
  const getApiData = useCallback(() => {
    dispatch(
      fetchPoint({
        ...users,
        term_id: termId,
      }),
    );
  }, [users, termId]);
  useEffect(() => {
    getApiData();
  }, [getApiData]);

  const _onRefresh = useCallback(() => {
    getApiData();
  }, [getApiData]);

  return (
    <View>
      <ConfigHeader />
      <View style={styles.marginTop}>
        <SelectTime
          dataSlot={data}
          defaultValue={defaultVL}
          value={valueSelect}
        />
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={_onRefresh} />
        }
        keyboardShouldPersistTaps="always"
        style={{marginBottom: 120}}>
        <View style={{marginBottom: 120}}>
          {point &&
            Array.isArray(point) &&
            point
              .filter(item => item.subject_name.length !== 0)
              .map((item, index) => (
                <TouchableOpacity
                  onPress={() => navigate(item.subject_id, item.subject_name)}
                  activeOpacity={0.8}
                  key={index}>
                  <TableITem point={true} content={item} />
                </TouchableOpacity>
              ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default memo(SubjectScreen);
