import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IconView from '../../common/IconView';

const styles = StyleSheet.create({
  modal: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  flexBox: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  textMessage: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
    width: '90%',
  },
  boxClick: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  textBold: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
const ConfirmMessage = props => {
  const {onShowModal, message, type} = props;
  const renderTypeIcon = typeMessage => {
    if (typeMessage === 'error') {
      return (
        <IconView
          name="closecircleo"
          component="AntDesign"
          color="red"
          size={24}
        />
      );
    } else if (typeMessage === 'confirm') {
      return (
        <IconView
          name="exclamationcircle"
          component="AntDesign"
          color="yellow"
          size={24}
        />
      );
    } else if (typeMessage === 'success') {
      return (
        <IconView
          name="checkcircleo"
          component="AntDesign"
          color="green"
          size={24}
        />
      );
    } else {
      return (
        <IconView
          name="closecircleo"
          component="AntDesign"
          color="red"
          size={24}
        />
      );
    }
  };
  return (
    <Modal
      style={{margin: 0}}
      onModalHide={onShowModal}
      visible={true}
      useNativeDriver={true}
      onBackdropPress={onShowModal}
      onBackButtonPress={onShowModal}
      animationInTiming={400}
      isVisible={true}
      backdropColor="black"
      hasBackdrop={true}>
      <View style={styles.modal}>
        <View style={styles.flexBox}>
          {renderTypeIcon(type)}
          <Text style={styles.textMessage}>{message}</Text>
        </View>
        <TouchableOpacity style={styles.boxClick} onPress={onShowModal}>
          <Text style={styles.textBold}>Ok</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

ConfirmMessage.propTypes = {};

export default ConfirmMessage;
