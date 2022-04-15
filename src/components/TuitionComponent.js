import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IconView from '../common/IconView';
import Collapsible from 'react-native-collapsible';
const styles = StyleSheet.create({
  boxhd: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginTop: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  textDetailKey: {
    fontWeight: 'bold',
    color: '#635a6e',
  },
  flexD: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  colorBlack: {
    color: 'black'
  }
});
function TuitionComponent(props) {
  const {tran} = props;
  const [expanded, setExpanded] = React.useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <View style={styles.boxhd}>
      <TouchableOpacity
        onPress={toggleExpanded}
        style={styles.flexD}
        activeOpacity={0.8}>
        <View style={styles.flexRow}>
          <Text style={styles.textDetailKey}>Học kỳ: </Text>
          <Text style={styles.colorBlack}>{tran.term_name}</Text>
        </View>
        <View style={styles.viewIcon}>
          {expanded ? (
            <IconView
              name="right"
              component="AntDesign"
              size={14}
              color="rgba(0,0,0,0.5)"
            />
          ) : (
            <IconView
              name="down"
              component="AntDesign"
              size={14}
              color="rgba(0,0,0,0.5)"
            />
          )}
        </View>
      </TouchableOpacity>
      <Collapsible duration={200} collapsed={expanded} align="center">
        <View
          style={[
            styles.flexRow,
            {
              marginTop: 10,
              paddingTop: 10,
              borderTopColor: 'rgba(0,0,0,0.1)',
              borderTopWidth: 1,
            },
          ]}>
          <View
            style={[
              styles.flexRow,
              {
                width: '50%',
                marginBottom: 5,
              },
            ]}>
            <Text style={styles.textDetailKey}>Mã hoá đơn: </Text>
            <Text style={styles.colorBlack}>{tran.invoice_id}</Text>
          </View>
          <View
            style={[
              styles.flexRow,
              {
                width: '50%',
                marginBottom: 5,
              },
            ]}>
            <Text style={styles.textDetailKey}>Số tiền: </Text>
            <Text style={styles.colorBlack}>{tran.amount_text} đ</Text>
          </View>
          <View
            style={[
              styles.flexRow,
              {
                width: '50%',
                marginBottom: 5,
              },
            ]}>
            <Text style={styles.textDetailKey}>Loại: </Text>
            <Text style={styles.colorBlack}>{tran.type_extension}</Text>
          </View>
          <View
            style={[
              styles.flexRow,
              {
                width: '50%',
                marginBottom: 5,
              },
            ]}>
            <Text style={styles.textDetailKey}>Học kỳ: </Text>
            <Text style={styles.colorBlack}>{tran.term_name}</Text>
          </View>
          <View
            style={[
              styles.flexRow,
              {
                width: '100%',
                marginBottom: 5,
              },
            ]}>
            <Text style={styles.textDetailKey}>Thời gian: </Text>
            <Text style={styles.colorBlack}>{tran.created_at_format}</Text>
          </View>
          <View
            style={[
              styles.flexRow,
              {
                width: '100%',
                marginBottom: 5,
              },
            ]}>
            <Text style={styles.textDetailKey}>Chú thích: </Text>
            <Text style={styles.colorBlack}>{tran.note}</Text>
          </View>
        </View>
      </Collapsible>
    </View>
  );
}

TuitionComponent.propTypes = {};

export default memo(TuitionComponent);
