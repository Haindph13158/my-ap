import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import TopBar from '../../container/header/TopBar'
const columns = [
    {
        title: 'Gia hạn học phí',
        route: 'Fee'
    },
    {
        title: 'Đăng ký thi lại',
        route: 'Exam'
    },
    {
        title: 'Đăng ký học lại',
        route: 'Study'
    },
    {
        route: 'Industry',
        title: 'Đăng ký chuyển ngành'
    },
    {
        title: 'Đăng ký bảo lưu',
        route: 'Semester'
    }
]
export default function ListServicesScreen() {
    const navigate = useNavigation()
    return (
        <>
            <TopBar />
            {
                columns.map((item, index) => (
                    <ListItem
                        key={index}
                        onPress={() => navigate.navigate(item.route)}
                        bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title style={styles.text}>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
            }
        </>
    )
}
const styles = StyleSheet.create({
    text: {
        marginLeft: 10,
    },
})
