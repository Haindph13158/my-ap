import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useEffect} from 'react';
import {
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TableITem from '../../components/TableItem/TableITem';
import {fetchAttendace} from '../../features/scheduleSlide/AttendanceSlide';
import {useTheme} from '@react-navigation/native';
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  content: {
    marginTop: 30,
  },
  ScrollView: {
    
  }
});
function ListAttendance(props) {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const {attendances, loading} = useSelector(state => state.attendances);
  const {users} = useSelector(state => state.auths);
  const getApiData = useCallback(() => {
    dispatch(fetchAttendace(users));
  }, [users]);

  useEffect(() => {
    getApiData();
  }, []);

  const _onRefresh = useCallback(() => {
    getApiData();
  }, [getApiData]);
  return (
    <ScrollView
      style={styles.ScrollView}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={_onRefresh} />
      }
      keyboardShouldPersistTaps="always">
      <View style={[styles.container, {color: colors.text}]}>
        {attendances &&
          Array.isArray(attendances) &&
          attendances.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('Atendance', {
                  id: item.subject_id,
                  headerTitle: item.subject_name,
                })
              }>
              <TableITem attendance={true} content={item} />
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}

ListAttendance.propTypes = {};

export default memo(ListAttendance);
