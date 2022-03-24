import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Button, DataTable} from 'react-native-paper';
import formatTimeSchool from '../../common/formatTimeSchool';
import IconView from '../../common/IconView';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const numberOfItemsPerPageList = [2, 3, 4];

const items = [
  {
    key: 1,
    name: 'Page 1',
  },
  {
    key: 2,
    name: 'Page 2',
  },
  {
    key: 3,
    name: 'Page 3',
  },
];
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  table: {
    padding: 10,
    borderBottomWidth: 1,
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
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  border3: {
    borderLeftColor: 'rgba(0,0,0,0.1)',
    borderLeftWidth: 1,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  border4: {
    borderLeftColor: 'rgba(0,0,0,0.1)',
    borderLeftWidth: 1,
    width: 100,
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
    width: 90,
    justifyContent: 'center',
    padding: 5,
  },
  row3: {
    borderLeftColor: 'rgba(0,0,0,0.1)',
    borderLeftWidth: 1,
    width: 80,
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
});

function ScheduleComponent({schedules}) {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

  React.useEffect(() => {
     setPage(0);
  }, [numberOfItemsPerPage]);
  const [idShow, setIdShow] = useState(null);
  const [content, setContent] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [isCheckShow, setIsCheckShow] = useState(false);
  const onShowDetail = id => {
    setIdShow(id);
    setIsCheckShow(!isCheckShow);
  };

  const onShowModal = text => {
    setContent(text);
    setIsShowModal(true);
  };

  const onCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.header}>
          <View style={styles.border1}>
            <Text style={styles.textHeader}>STT</Text>
          </View>
          <View style={styles.border2}>
            <Text style={styles.textHeader}>Ngày</Text>
          </View>
          <View style={styles.border3}>
            <Text style={styles.textHeader}>Phòng</Text>
          </View>
          <View style={styles.border4}>
            <Text style={styles.textHeader}>Giảng đường</Text>
          </View>
        </View>

        {schedules.map((item, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => onShowDetail(item.id)} activeOpacity={0.8} style={styles.rowTable}>
              <View key={item.id} style={styles.row1}>
                {idShow === item.id && isCheckShow ? (
                  <TouchableOpacity
                    style={{marginRight: 4}}
                    onPress={() => onShowDetail(null)}>
                    <IconView
                      name="minuscircleo"
                      component="AntDesign"
                      color="blue"
                      size={16}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{marginRight: 4}}
                    onPress={() => onShowDetail(item.id)}>
                    <IconView
                      name="pluscircleo"
                      component="AntDesign"
                      color="blue"
                      size={16}
                    />
                  </TouchableOpacity>
                )}
                <Text style={styles.textHeader}>{index + 1}</Text>
              </View>
              <View style={styles.row2}>
                <Text numberOfLines={1} style={styles.textHeader}>
                  {item.day}
                </Text>
                {/* <Text numberOfLines={1} style={styles.textHeader}>
                  23/03/2022
                </Text> */}
              </View>
              <View style={styles.row3}>
                <Text numberOfLines={2} style={styles.textHeader}>
                  {item.room_name}
                </Text>
              </View>
              <View style={styles.row4}>
                <Text numberOfLines={2} style={styles.textHeader}>
                  {item.area_name}
                </Text>
              </View>
            </TouchableOpacity>
            {idShow === item.id && isCheckShow && (
              <View
                style={{
                  borderColor: 'rgba(0,0,0,0.1)',
                  borderLeftWidth: 1,
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  paddingRight: 10,
                }}>
                <View style={styles.viewFlex}>
                  <Text style={styles.textLeft}>Mã môn:</Text>
                  <Text style={styles.textHeader}>{item.subject_code}</Text>
                </View>
                <View style={styles.viewFlex}>
                  <Text style={styles.textLeft}>Môn:</Text>
                  <Text style={styles.textHeader}>{item.subject_name}</Text>
                </View>
                <View style={styles.viewFlex}>
                  <Text style={styles.textLeft}>Giảng viên:</Text>
                  <Text style={styles.textHeader}>
                    {item.activity_leader_login}
                  </Text>
                </View>

                <View style={styles.viewFlex}>
                  <Text style={styles.textLeft}>Ca:</Text>
                  <Text style={styles.textHeader}>{item.slot}</Text>
                </View>
                <View style={styles.viewFlex}>
                  <Text style={styles.textLeft}>Thời gian:</Text>
                  <Text style={styles.textHeader}>
                    {formatTimeSchool(item.slot)}
                  </Text>
                </View>
                <View style={styles.viewFlex}>
                  <Text style={styles.textLeft}>Link học trực tuyến</Text>
                  <Text style={styles.textHeader}></Text>
                </View>
                <View style={styles.viewFlex}>
                  <Text style={styles.textLeft}>Chi tiết</Text>
                  <TouchableOpacity
                    onPress={() => onShowModal(item.syllabus_plan_noi_dung)}>
                    <Text style={{color: 'blue'}}>Chi tiết</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ))}
      </View>
      {isShowModal && (
        <Modal
          style={{margin: 0}}
          onModalHide={onCloseModal}
          visible={true}
          animationIn="slideInTop"
          animationOut="slideOutBottom"
          useNativeDriver={true}
          onBackdropPress={onCloseModal}
          onBackButtonPress={onCloseModal}
          isVisible={true}
          backdropColor="#9d9a9a"
          hasBackdrop={true}>
          <View style={styles.modal}>
            <View style={styles.headerModal}>
              <Text style={styles.textheaderModal}>Nội dung</Text>
              <TouchableOpacity onPress={onCloseModal}>
                <IconView
                  name="close"
                  component="AntDesign"
                  color="rgba(0,0,0,0.3)"
                  size={14}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headerModal}>
              <Text>{content}</Text>
            </View>
            <Button onPress={onCloseModal}>Đóng</Button>
          </View>
        </Modal>
      )}
      <DataTable>
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
      </DataTable>
    </View>
  );
}

ScheduleComponent.propTypes = {
  schedules: PropTypes.array,
};

export default ScheduleComponent;
