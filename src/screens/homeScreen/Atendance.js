import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AtendanceComponent from '../../components/homeComponent/atendanceComponent'
import ConfigHeader from '../../container/header/configHeader'
import TopBar from '../../container/header/TopBar'
import { fetchAttendace } from '../../features/scheduleSlide/AttendanceSlide'
export default function Atendance({ route }) {
    const { id, headerTitle } = route.params
    const dispatch = useDispatch()
    const { attendances } = useSelector(state => state.attendances)
    const { users } = useSelector(state => state.auths)

    const data = attendances.filter(item => item.subject_id === id).map((item, index) => {
        return (

            <AtendanceComponent
                data={item.activities}
                absent={item.total_absent}
                now={item.total_to_now}
                session={item.total_session}
                key={index}
            />

        )
    })
    return (
        <>
            <TopBar headerTitle={headerTitle} />
            <View>
                {data}
            </View>
        </>
    )

}
