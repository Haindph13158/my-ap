import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import TableITem from '../components/TableItem/TableITem'
import ConfigHeader from '../container/header/configHeader'
import { fetchPoint } from '../features/reducer/pointSubject'

export default function SubjectScreen() {
  const navigation = useNavigation()
  const {users} = useSelector(state => state.auths)
  const {point} = useSelector(state => state.point)
  const dispatch = useDispatch()
  const navigate = (id, name) => {
    navigation.navigate('PointSubject', {
      id: id,
      headerTitle: name 
    })
  };
  useEffect(() => {
    dispatch(fetchPoint(users))
  }, [users]);
  return (
    <View>
      <ConfigHeader />
      <View>
        {
          point && Array.isArray(point) && point.map((item, index) => (
            <TouchableOpacity
            onPress={() => navigate(item.id, item.subject_name)}
            activeOpacity={0.8}
            key={index}
            >
              <TableITem
                point={true}
                content={item}
              />
            </TouchableOpacity>
          ))
        }

      </View>
    </View>
  )
}
