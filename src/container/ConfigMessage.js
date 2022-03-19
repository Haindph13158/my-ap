import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../components/avatarComponent/Avatar'
import { Image, StyleSheet, View } from 'react-native'
const styles = StyleSheet.create({
    avatar: {
        borderRadius: 50,
        backgroundColor: 'black',
        width: 100, 
        height: 100
    }
})
function ConfigMessage(props) {
  return (
    <View>
        <Avatar />
    </View>
  )
}

ConfigMessage.propTypes = {

}

export default ConfigMessage

