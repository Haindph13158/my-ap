import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import TableSheet from '../../components/TableSheet/TableSheet'
import TopBar from '../../container/header/TopBar'
import { columnPoint } from '../../components/TableSheet/columns'
export default function PointSubject({route}) {
    const { id, headerTitle } = route.params
    const {point} = useSelector(state=> state.point)
   
    const data = point.filter(item =>item.subject_id === id).map((item,index) => (
        <TableSheet
        item={item.grades}
        key={index}
        getCellProps={() => {return 'black'}}
        column={columnPoint}
        status={item.status_name}
        medium_score={item.medium_score}
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
