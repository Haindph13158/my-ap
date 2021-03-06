import React, {useMemo} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useTable} from 'react-table/dist/react-table.development';
const HEIGHT = Dimensions.get('window').height;
import {useTheme} from '@react-navigation/native';
export default function TableSheet({
  absent,
  session,
  now,
  item,
  column,
  status,
  getCellProps,
  medium_score,
}) {
  const {colors} = useTheme();
  const percentSession = (absent / session) * 100;
  const percentNow = (absent / now) * 100;
  const columns = useMemo(() => column, []);
  const data = useMemo(() => item, []);
  const tableIntance = useTable({
    columns,
    data,
  });
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    tableIntance;

  return (
    <>
      {absent ? (
        <View style={styles.bottomCell}>
          <View style={styles.borderBotLeft}>
            <Text
              style={{fontSize: 13, fontWeight: 'bold', color: colors.text}}>
              Vắng:
              <Text style={styles.colorAbsent}>
                {absent}/{session} {percentSession.toFixed()}%
              </Text>
              trên tổng số
            </Text>
          </View>
          <View style={styles.borderBotRight}>
            <Text
              style={{fontSize: 13, fontWeight: 'bold', color: colors.text}}>
              Vắng:
              <Text style={[styles.colorAbsent]}>
                {absent}/{now} {percentNow.toFixed()}%
              </Text>
              tới hiện tại
            </Text>
          </View>
        </View>
      ) : null}
      <View style={styles.table} {...getTableProps}>
        <View style={styles.header}>
          <View style={styles.border1}>
            <Text style={[styles.textHeader, {color: colors.text}]}>STT</Text>
          </View>
          {headerGroups.map((item, i) =>
            item.headers.map((columzz, index) => (
              <View key={index} style={columzz.styleHeader}>
                <Text style={[styles.textHeader, {color: colors.text}]}>
                  {columzz.render('title')}
                </Text>
              </View>
            )),
          )}
        </View>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={{marginBottom: 60}}>
          <View style={{marginBottom: 60}}>
            <View {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <View key={index} style={styles.rowTable}>
                    <View key={item.id} style={styles.row1}>
                      <Text style={[styles.textHeader, {color: colors.text}]}>{index + 1}</Text>
                    </View>
                    {row.cells.map(cell => (
                      <View
                        key={index}
                        {...cell.getCellProps([
                          {
                            style: cell.column.styleRow,
                          },
                        ])}>
                        <Text
                          style={{
                            color: getCellProps(cell) ? getCellProps(cell): 'black',
                            ...styles.textHeader,
                          }}>
                          {cell.render('Cell')}
                        </Text>
                      </View>
                    ))}
                  </View>
                );
              })}
            </View>
            {status ? (
              <View style={styles.bottomCell}>
                <View style={styles.borderBotLeft}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: colors.text}}>
                    Trung bình:
                    <Text style={styles.colorAbsent}>{medium_score} </Text>
                  </Text>
                </View>
                <View style={styles.borderBotRight}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: colors.text}}>
                    Trạng thái:
                    <Text style={styles.colorAbsent}>{status} </Text>
                  </Text>
                </View>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  table: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    height: HEIGHT,
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
    // padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textHeader: {
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
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    borderLeftWidth: 1,
    borderRightColor: 'rgba(0,0,0,0.1)',
    borderLeftColor: 'rgba(0,0,0,0.1)',
    borderRightWidth: 1,
  },
  colorAbsent: {
    color: 'green',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
  },
  borderBotLeft: {
    paddingTop: 10,
    paddingBottom: 10,
    // borderRightColor: 'rgba(0,0,0,0.1)',
    // borderRightWidth: 1,
  },
  borderBotRight: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  borderBotLeftPoint: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
