import React, { memo, useState } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

function SelectTime({
  dataSlot,
  renderDataSelect,
  value
}) {
  return (
    <View style={styles.selectSlide}>
      <Text>Thời gian</Text>
      <SelectDropdown
        data={dataSlot}
        buttonStyle={styles.btnStyle}
        buttonTextStyle={styles.buttonTextStyle}
        dropdownStyle={styles.dropdownStyle}
        defaultButtonText={renderDataSelect(dataSlot[0])}
        onSelect={(selectedItem, index) => {
          value(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          value(selectedItem);
          return renderDataSelect(selectedItem)
        }}
        rowTextForSelection={(item, index) => {
          return renderDataSelect(item);
        }}
      />
      <Text>Lựa chọn thời gian để hiển thị chi tiết lịch học</Text>
    </View>
  )
}
export default memo(SelectTime)
const styles = StyleSheet.create({
  selectSlide: {
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10
  },
  btnStyle: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  dropdownStyle: {
    borderRadius: 8,

  }
});