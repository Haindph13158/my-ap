import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { View, TouchableOpacity, KeyboardAvoidingViewBase } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import SelectTime from '../components/SelectTime/SelectTime'
import TableITem from '../components/TableItem/TableITem'
import ConfigHeader from '../container/header/configHeader'
import { fetchPoint } from '../features/reducer/pointSubject'
const data = [39, 38, 37, 36, 35]
export default function SubjectScreen() {
  const navigation = useNavigation()
  const { users } = useSelector(state => state.auths)
  const { point } = useSelector(state => state.point)
  const dispatch = useDispatch()
  const navigate = (id, name) => {
    navigation.navigate('PointSubject', {
      id: id,
      headerTitle: name
    })
  };
  const renderDataSelect = useCallback((value) => {
    switch (value) {
      case 39:
        return "Spring 2022"
        break;
      case 38:
        return "Fall 2021"
        break
      case 37:
        return "Summer 2021"
        break;
      case 36:
        return "Spring 2021"
        break;

      case 35:
        return "Fall 2020"
        break;

      default:
        break;
    }
  },[])
  let dataNew
  const[termId, setTermId] = useState(data[0])
  const term = (value)=>{
     setTermId(value)
  }
  useEffect(() => {
    dispatch(fetchPoint({
      ...users,
      term_id: termId
    }))
  },[termId])
  return (
    <View>
      <ConfigHeader />
      <View style={{marginTop: 10}}>
        <SelectTime
          dataSlot={data}
          renderDataSelect={renderDataSelect}
          value={term}
        />
      </View>
      <ScrollView keyboardShouldPersistTaps="always" style={{marginBottom: 120}}>
        <View style={{marginBottom: 120}}>
        {
          point && Array.isArray(point) && point.filter(item => item.subject_name.length !== 0 ).map((item, index) => (
            <TouchableOpacity
              onPress={() => navigate(item.subject_id, item.subject_name)}
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
        </ScrollView>
    </View>
  )
}
