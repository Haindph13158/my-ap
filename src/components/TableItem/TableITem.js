import { useNavigation } from '@react-navigation/native'
import React, { memo } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, StatusBar } from 'react-native'

function TableITem({
    attendance,
    content,
    point
}) {
    return (

        <View style={styles.item}>
            <View>
                <Text style={styles.titleAttendace}>{content.subject_name} - {content.subject_code}</Text>
                {
                    attendance && (
                        <>
                            <Text style={styles.text}>
                                Vắng: <Text
                                    style={styles.total_absent}
                                >{content.total_absent}/{content.total_to_now}</Text> cho tới hiện tại
                            </Text>
                            <Text style={styles.text}>
                                Vắng: <Text
                                    style={styles.total_absent}
                                >{content.total_absent}/{content.total_session}</Text> trên tổng số
                            </Text>
                        </>
                    )
                }
                {
                    point && (
                        <>
                            <Text style={styles.text} >
                                Trạng thái: <Text style={styles.textPoint} > {content.status_name}</Text>
                            </Text>
                        </>
                    )
                }
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    tab: {
        height: 10,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
    },
    title: {
        fontSize: 14,
    },
    text: {
        color: '#888',
        fontSize: 13,
        paddingBottom: 5,
        paddingTop: 5
    },
    icon: {
        marginLeft: 350,
        position: 'absolute',
    },
    View: {
        flexDirection: 'row',
    },
    iconHeader: {
        position: 'absolute',
        paddingTop: 60,
        paddingLeft: 320,
        flexDirection: 'row',
    },
    icon: {
        paddingRight: 7,
    },
    titleAttendace: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    total_absent: {
        color: 'orange',
        fontWeight: 'bold'
    },
    textPoint: {
        color: 'green'
    }
});
TableITem.propsTypes = {
    attendance: Boolean,
    content: Object
}
export default memo(TableITem)