import React, {memo, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification';
import {useDispatch, useSelector} from 'react-redux';
import IconView from '../../common/IconView';
import {notification} from '../../features/reducer/notiSlide';
import ConfirmMessage from '../confirmMessage/confirmMessage';

const ScheduleItem = ({schedule}) => {
  // console.log(schedule);
  const [expanded, setExpanded] = React.useState(true);
  const [messgage, setMessgage] = useState('');
  const dispatch = useDispatch();
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const [date, setDate] = useState(new Date(schedule.timestamp));
  const [open, setOpen] = useState(false);
  const {notis} = useSelector(state => state.notis);
  const [isShowModal, setIsShowModal] = useState(false);
  const onShowModal = () => {
    setIsShowModal(prev => !prev);
  };

  const createChannels = (id, name) => {
    PushNotification.createChannel({
      channelId: id,
      channelName: name,
    });
  };

  const handelNoti = time => {
    if (new Date(schedule.timestamp).getTime() - time > 0) {
      PushNotification.cancelLocalNotification();
      PushNotification.localNotificationSchedule({
        channelId: `${schedule.id}`,
        subText: `Nội dung tiết học: ${schedule.syllabus_plan_description} - ${schedule.syllabus_plan_noi_dung}`,
        title: 'Click xem lịch học',
        message: `Bạn sắp có lịch học môn ${schedule.subject_name}`, // message text
        date: new Date(time),
        allowWhileIdle: true,
        largeIcon: 'icon',
        smallIcon: 'icon',
        shortcutId: `${schedule.id}`,
        playSound: true,
        soundName: 'bcd',
        repeatType: 'day',
        vibration: 30000,
        repeatTime: 2,
        number: 30,
        autoCancel: false,
        priority: 'max',
      });
    }
  };

  const onSetTime = date => {
    const message = `Bạn đã đặt báo lịch học môn ${schedule.subject_name} - thời gian là ${date}`;
    setMessgage(message);
    setOpen(false);
    setDate(date);
    onShowModal();
    const notifi = {
      id: schedule.id,
      time: date,
    };
    const name = `${schedule.subject_name} - ${schedule.id}`;
    createChannels(`${schedule.id}`, name);
    handelNoti(date);
    dispatch(notification(notifi));
  };

  let check = false;

  if (notis.length > 0) {
    const checkClock = notis.find(item => item.id === schedule.id);
    if (checkClock) {
      check = true;
    }
  }

  return (
    <View style={styles.accordion}>
      {isShowModal && (
        <ConfirmMessage
          message={messgage}
          onShowModal={onShowModal}
          type="success"
        />
      )}
      {check && (
        <View style={styles.clock}>
          <IconView
            name="clockcircle"
            component="AntDesign"
            size={18}
            color="rgb(249, 92, 4)"
          />
        </View>
      )}
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} onPress={toggleExpanded}>
          <View style={styles.box_content_item}>
            <View style={styles.box_left_title}>
              <Text style={{fontSize: 14}}>
                {schedule.room_name} - Ca {schedule.slot}
              </Text>
            </View>
            <View style={styles.box_right_title}>
              <Text style={styles.text_top}>{schedule.day}</Text>
              <Text numberOfLines={2} style={styles.text_bottom}>
                {schedule.subject_name} - {schedule.subject_code}
              </Text>
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
          </View>
        </TouchableOpacity>
        <Collapsible duration={200} collapsed={expanded} align="center">
          <View>
            {schedule.url_room_online ? (
              <Text>
                Link Online: <Text>{schedule.url_room_online}</Text>{' '}
              </Text>
            ) : null}

            <View
              style={[
                styles.box_content_item,
                {
                  borderTopColor: 'rgba(0,0,0,0.1)',
                  borderTopWidth: 1,
                  marginTop: 10,
                },
              ]}>
              <View style={styles.box_left_dropdown}>
                <Text>
                  <Text style={styles.text_note_content}>Giảng đường: </Text>
                  <Text style={styles.data_text_note_content}>
                    {schedule.area_name}
                  </Text>
                </Text>
                <Text>
                  <Text style={styles.text_note_content}>Mã môn: </Text>
                  <Text style={styles.data_text_note_content}>
                    {schedule.subject_code}
                  </Text>
                </Text>
                <Text>
                  <Text style={styles.text_note_content}>Thời gian: </Text>
                  <Text style={styles.data_text_note_content}>
                    {schedule.slot_time}
                  </Text>
                </Text>
              </View>
              <View style={styles.box_right_dropdown}>
                <Text>
                  <Text style={styles.text_note_content}>Lớp: </Text>
                  <Text style={styles.data_text_note_content}>
                    {schedule.room_name}
                  </Text>
                </Text>
                <Text>
                  <Text style={styles.text_note_content}>Giảng viên: </Text>
                  <Text style={styles.data_text_note_content}>
                    {schedule.activity_leader_login}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          {!check && (
            <View style={styles.flexBox}>
              <Text style={styles.text_note_content}>Đặt lịch hẹn giờ :</Text>
              <TouchableOpacity
                style={styles.btnBox}
                onPress={() => setOpen(true)}>
                <Text>Đặt thời gian</Text>
              </TouchableOpacity>
            </View>
          )}
        </Collapsible>
      </View>
      <DatePicker
        maximumDate={new Date(schedule.timestamp)}
        minimumDate={new Date()}
        modal
        title="Đặt thời gian báo"
        confirmText="Đặt thời gian"
        open={open}
        date={date}
        mode="time"
        onConfirm={date => onSetTime(date)}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  box_content_item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  box_left_title: {
    width: 120,
    fontSize: 14,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(249, 92, 4)',
  },
  text_bottom: {
    fontSize: 14,
    maxWidth: '75%',
  },
  text_top: {
    fontSize: 14,
  },
  box_right_title: {
    paddingLeft: 10,
  },
  box_right_dropdown: {
    marginLeft: 30,
    marginBottom: 10,
  },
  text_note_content: {
    color: '#333',
    fontSize: 14,
  },
  data_text_note_content: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  box_left_dropdown: {
    marginTop: 10,
  },
  viewIcon: {
    position: 'absolute',
    right: 0,
  },
  notifications: {
    position: 'absolute',
    right: -10,
    top: -15,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  btnBox: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    marginLeft: 20,
  },
  clock: {
    position: 'absolute',
    left: -8,
    top: -8,
  },
});

export default memo(ScheduleItem);
