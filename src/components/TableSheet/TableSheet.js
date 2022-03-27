import React, { useMemo } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTable } from 'react-table/dist/react-table.development';
const HEIGHT = Dimensions.get('window').height;
const defaultPropGetter = () => ({});
export default function TableSheet({
  absent,
  session,
  now,
  item,
  column,
  status,
  getCellProps = defaultPropGetter
}) {
  const percentSession = (absent / session) * 100;
  const percentNow = (absent / now) * 100;
  const columns = useMemo(() => column, []);
  const data = useMemo(() => item, []);
  const tableIntance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableIntance;
  return (
    <View style={styles.table} {...getTableProps}>
      <View style={styles.header}>
        <View style={styles.border1}>
          <Text style={styles.textHeader}>STT</Text>
        </View>
        {headerGroups.map((item, i) =>
          item.headers.map((columzz, index) => (
            <View key={index} style={columzz.styleHeader}>
              <Text style={styles.textHeader}>{columzz.render('title')}</Text>
            </View>
          )),
        )}
      </View>
      <ScrollView keyboardShouldPersistTaps="always">
        <View>
          <View {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <View key={index} style={styles.rowTable}>
                  <View key={item.id} style={styles.row1}>
                    <Text style={styles.textHeader}>{index + 1}</Text>
                  </View>
                  {row.cells.map(cell => (
                    <View key={index} {...cell.getCellProps([
                      {
                        style: cell.column.styleRow,
                      }
                    ])}>
                      <Text  style={{
                        color: getCellProps(cell),
                        ...styles.textHeader
                      }}>
                        {cell.render('Cell')}
                      </Text>
                    </View>
                  ))}
                </View>
              );
            })}
          </View>
        </View>
        {absent ? (
          <View style={styles.bottomCell}>
            <View style={styles.borderBotLeft}>
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                Vắng:
                <Text style={styles.colorAbsent}>

                  {absent}/{session} {percentSession.toFixed()}%
                </Text>
                trên tổng số
              </Text>
            </View>
            <View style={styles.borderBotRight}>
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Vắng:
                <Text style={styles.colorAbsent}>{absent}/{now} {percentNow.toFixed()} %
                </Text>
                tới hiện tại
              </Text>
            </View>
          </View>
        ) : null}
        {status ? (
          <View style={styles.bottomCell}>
            <View style={styles.borderBotLeftPoint}>
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                Trạng thái:
              </Text>
            </View>
            <View style={styles.borderBotRight}>
              <Text style={styles.colorAbsent}> {status} </Text>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </View>
  )
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
    // backgroundColor: 'red',
    marginBottom: 100,
    justifyContent: 'space-around',
    borderLeftWidth: 1,
    borderRightColor: 'rgba(0,0,0,0.1)',
    borderLeftColor: 'rgba(0,0,0,0.1)',
    borderRightWidth: 1,
  },
  colorAbsent: {
    color: 'red',
    fontWeight: 'bold',
  },
  borderBotLeft: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRightColor: 'rgba(0,0,0,0.1)',
    borderRightWidth: 1,
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
