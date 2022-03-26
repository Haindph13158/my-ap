import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import TableITem from '../components/TableItem/TableITem'
import ConfigHeader from '../container/header/configHeader'
const content = [
  {
    id: 1,
    subject_name: 'Quản trị Website',
    status: 'Passed',
    lab1: 8,
    lab3: 9
  },
  {
    id: 2,
    subject_name: 'Quản trị Website',
    status: 'Passed',
    lab1: 8,
    lab3: 9
  },
  {
    id: 3,
    subject_name: 'Quản trị Website',
    status: 'Passed',
    lab1: 8,
    lab3: 9
  },
  {
    id: 4,
    subject_name: 'Quản trị Website',
    status: 'Passed',
    lab1: 8,
    lab3: 9
  },
  {
    id: 5,
    subject_name: 'Quản trị Website',
    status: ' not Passed',
    lab1: 8,
    lab3: 9
  }
]
export default function SubjectScreen() {
  const navigation = useNavigation()
  const navigate = (id, name, code) => {
    navigation.navigate('Atendance', {
      id: id,
      headerTitle: name + '-' + code
    })
  };
  return (
    <View>
      <ConfigHeader />
      <View>
        {
          content && Array.isArray(content) && content.map((item, index) => (
            <TouchableOpacity
            onPress={() => navigate(item.subject_id, item.subject_name, item.group_name)}
            activeOpacity={0.8}
            >
            <TableITem
              point={true}
              content={item}
              key={index}
            />
            </TouchableOpacity>
          ))
        }

      </View>
    </View>
  )
}
