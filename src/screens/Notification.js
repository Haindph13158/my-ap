import React from 'react';
import { View, StyleSheet, Text, StatusBar, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import TopBar from '../container/header/TopBar';
const Notification = () => {
    const navigation = useNavigation()
    const fakeData = [
        {
            title: 'Lịch học ngày 20/11/2020',
            content: 'Font-end Freameworks - PT15202-Phòng P305',
            time: '2 giờ trước',
            icon: 'check'
        },
        {
            title: 'Lịch học ngày 20/11/2020',
            content: 'Font-end Freameworks - PT15202-Phòng P305',
            time: '2 giờ trước',
            icon: 'check'
        },
        {
            title: 'Thông tin học tập',
            content: 'THÔNG BÁO VỀ KẾ HOẠCH THI TIẾNG ANH GIAI ĐOẠN 1-KỲ FALL 2020',
            time: '1 ngày trước',
            icon: 'bells'
        },
    ]
    const renderData = () => {
        const Item = ({ item }) => (
            <TouchableOpacity style={styles.item}  >
                <View style={styles.icon} >
                    <Icon backgroundColor='none' name={item.icon} size={20} color='#888' />
                </View>
                <View style={styles.content} >
                    <Text style={styles.title} >{item.title}
                    </Text>
                    <Text style={styles.text} >{item.content}</Text>
                    <Text style={styles.text}>{item.time}</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <SafeAreaView style={styles.container} >
                {fakeData.map((item, index)=>(
                    <Item key={index} item={item} />
                ))}
            </SafeAreaView>
        )
    }

    return (
        <>
            <TopBar />
            <View  >
                <ScrollView>
                    {renderData()}
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: 'red'
    },
    textTitle: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 15,
        justifyContent: 'center',
        paddingTop: 10
    },
    titleHeader: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingTop: 60,
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 1,
        flexDirection: 'row'

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    text: {
        color: '#888',
        fontSize: 13,
        paddingTop: 5
    },
    icon: {
        justifyContent: 'center',
        paddingRight: 20
    },
    content: {
        paddingRight: 20
    }
})

export default Notification;
