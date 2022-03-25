import React, { useMemo } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useTable } from 'react-table/dist/react-table.development';
import { columnAttendance } from './columns';
export default function TableSheet({
    absent,
    session,
    now,
    item
}) {
    const percentSession = absent / session * 100
    const percentNow = absent / now * 100
    const columns = useMemo(() => columnAttendance, [])
    const data = useMemo(() => item, [])
    const tableIntance = useTable({
        columns,
        data
    })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableIntance
    return (
        <View style={styles.container}>
            <View style={styles.table}  {...getTableProps} >
                <View style={styles.header}>
                    <View style={styles.border1}>
                        <Text style={styles.textHeader}>STT</Text>
                    </View>
                    {headerGroups.map(item => (
                        item.headers.map(columzz => (
                            <View style={columzz.styleHeader}>
                                <Text style={styles.textHeader}>
                                    {columzz.render('title')}
                                </Text>
                            </View>
                        ))))}
                </View>
                <ScrollView  >
                    <View {...getTableBodyProps()}  >
                        {rows.map((row, index) => {
                            prepareRow(row)
                            return (
                                <View style={styles.rowTable}>

                                    <View key={item.id} style={styles.row1}>
                                        <Text style={styles.textHeader}>{index + 1}</Text>
                                        <Text></Text>
                                    </View>
                                    {row.cells.map(cell => (
                                        <View {...cell.getCellProps()}>
                                            <View style={cell.column.styleRow} >
                                                <Text style={styles.textHeader}>
                                                    {cell.render('Cell')}
                                                </Text>
                                            </View>
                                        </View>

                                    ))}
                                </View>
                            )
                        })}
                    </View>
                    <View
                        style={styles.bottomCell}
                    >
                        <Text>Vắng: <Text style={styles.colorAbsent} >  {absent}/{session} {percentSession.toFixed()}% </Text> trên tổng số </Text>
                        <Text>Vắng: <Text style={styles.colorAbsent} > {absent}/{now} {percentNow.toFixed()} % </Text> tới hiện tại</Text>

                    </View>

                </ScrollView>

            </View>

            {/* <DataTable>
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
        onPageChange={page => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        showFastPaginationControls
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={numberOfItemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    table: {
        padding: 10,
        backgroundColor: 'white'
    },
    header: {
        borderTopColor: 'rgba(0,0,0,0.1)',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderRightColor: 'rgba(0,0,0,0.1)',
        borderLeftColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#F1F1F1',
        flexDirection: 'row',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
    },
    rowTable: {
        borderRightWidth: 1,
        borderRightColor: 'rgba(0,0,0,0.1)',
        borderLeftColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
    },
    border1: {
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderLeftWidth: 1,
        width: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    row1: {
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderLeftWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 50,
        justifyContent: 'center',
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    textHeader: {
        color: 'rgba(0, 0 ,0 ,0.8)',
        fontSize: 13,
        textAlign: 'center',
    },
    viewFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    textLeft: {
        width: 140,
        color: 'black',
        paddingLeft: 10,
    },

    bottomCell: {
        flexDirection: 'row'
    },
    colorAbsent: {
        color: 'red',
        fontWeight: 'bold'
    }
});