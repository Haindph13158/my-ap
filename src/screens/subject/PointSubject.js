import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import TableSheet from '../../components/TableSheet/TableSheet'
import TopBar from '../../container/header/TopBar'
import { columnPoint } from '../../components/TableSheet/columns'
export default function PointSubject({route}) {
    const { id, headerTitle } = route.params
    const {point} = useSelector(state=> state.point)
    const data = point.filter(item =>item.id === id).map((item,index) => (
        <TableSheet
        item={item.point}
        key={index}
        column={columnPoint}
        status={item.status}
    />
    ))
  return (
    <>
    <TopBar headerTitle={headerTitle}  />
    <View>
        {data}
    </View>
    </>
  )
}
