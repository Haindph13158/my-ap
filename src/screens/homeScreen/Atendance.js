import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TableSheet from '../../components/TableSheet/TableSheet';
import TopBar from '../../container/header/TopBar';
import {columnAttendance} from '../../components/TableSheet/columns';
export default function Atendance({route}) {
  const {id, headerTitle} = route.params;
  const {attendances} = useSelector(state => state.attendances);
  const data = attendances
    .filter(item => item.subject_id === id)
    .map((item, index) => {
      return (
        <TableSheet
          item={item.activities}
          absent={item.total_absent}
          now={item.total_to_now}
          session={item.total_session}
          key={index}
          column={columnAttendance}
          getCellProps={(cellInfo) => {
                  switch (cellInfo.value) {
                    case "Absent":
                      return 'red'
                      break;
                    case "Present":
                      return 'green'
                      break;
                    default:
                      break;
                  }
          }

           }
        />
      );
    });
  return (
    <>
      <TopBar headerTitle={headerTitle} />
      <View>{data}</View>
    </>
  );
}
