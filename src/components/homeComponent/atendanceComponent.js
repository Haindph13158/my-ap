import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import formatTimeSchool from '../../common/formatTimeSchool';
import IconView from '../../common/IconView';
import ConfigHeader from '../../container/header/configHeader';
export default function AtendanceComponent({
    absent,
    session,
    now,
    data
}) {

    const percentSession = absent/session*100
    const percentNow = absent/now*100

    return (
        <View style={styles.container}>
            <View style={styles.table}>
                <View style={styles.header}>
                    <View style={styles.border1}>
                        <Text style={styles.textHeader}>STT</Text>
                    </View>
                    <View style={styles.border2}>
                        <Text style={styles.textHeader}>Ngày Học</Text>
                    </View>
                    <View style={styles.border3}>
                        <Text style={styles.textHeader}>Ca</Text>
                    </View>
                    <View style={styles.border4}>
                        <Text style={styles.textHeader}>Trạng thái</Text>
                    </View>
                </View>
                <ScrollView>

                {data.map((item, index) => {
                    return (
                    <View key={index}>
                        <View style={styles.rowTable}>
                            <View key={item.id} style={styles.row1}>
                                <Text style={styles.textHeader}>{index + 1}</Text>
                                <Text></Text>
                            </View>
                            <View style={styles.row2}>
                                <Text style={styles.textHeader}>
                                    {item.day}
                                </Text>
                            </View>

                            <View style={styles.row3}>
                                <Text style={styles.textHeader}>
                                    {item.slot}
                                </Text>
                            </View>
                            <View style={styles.row4}>
                                <Text style={styles.textHeader}>
                                    {item.val_text}
                                </Text>
                            </View>
                           
                        </View>
                    </View>
                    )
                }

                
                )}
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
        backgroundColor:'white'
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
        flexDirection: 'row',
        alignItems: 'center',
        width: 50,
        justifyContent: 'center',
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    border2: {
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderLeftWidth: 1,
        width: 180,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    border3: {
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderLeftWidth: 1,
        width: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    border4: {
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderLeftWidth: 1,
        width: 70,
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
    row2: {
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderLeftWidth: 1,
        width: 180,
        justifyContent: 'center',
        padding: 5,
    },
    row3: {
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderLeftWidth: 1,
        width: 50,
        justifyContent: 'center',
        padding: 5,
    },
    row4: {
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderLeftWidth: 1,
        width: 100,
        justifyContent: 'center',
        padding: 5,
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
    modal: {
        height: 200,
        backgroundColor: 'white',
        position: 'absolute',
        top: 5,
        left: 5,
        right: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    },
    headerModal: {
        padding: 20,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomCell: {
        flexDirection:'row'
    },
    colorAbsent: {
        color: 'red',
        fontWeight:'bold'
    }
});