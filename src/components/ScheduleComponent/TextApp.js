import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';

const ScheduleItem = ({schedule}) => {
  const [expanded, setExpanded] = React.useState(true);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpanded}>
        <View style={styles.box_content_item}>
          <View style={styles.box_left_title}>
            <Text style={{fontSize: 14}}>
              {schedule.room_name}-Ca {schedule.slot}
            </Text>
          </View>
          <View style={styles.box_right_title}>
            <Text style={styles.text_top}>{schedule.day}</Text>
            <Text numberOfLines={2} style={styles.text_bottom}>
              {schedule.subject_name} - {schedule.subject_code}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={expanded} align="center">
        <View>
          {schedule.url_room_online ? (
            <Text>
              Link Online: <Text>{schedule.url_room_online}</Text>{' '}
            </Text>
          ) : null}

          <View style={styles.box_content_item}>
            <View style={styles.box_left_dropdown}>
              <Text>
                <Text style={styles.text_note_content}>Giảng đường: </Text>
                <Text style={styles.data_text_note_content}>
                  {schedule.area_name}
                </Text>
              </Text>
              {/* <Text>
              <Text style={styles.text_note_content}>Mã môn: </Text>
              <Text style={styles.data_text_note_content}>
                {schedule.subject_code}
              </Text>
            </Text> */}
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
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {
    marginTop: 10,
    borderRadius: 10,
  },
  box_content_item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    maxWidth: 185,
  },
  text_top: {
    fontSize: 14,
  },
  box_right_title: {
    paddingLeft: 10,
  },
  box_right_dropdown: {
    marginLeft: 30,
  },
  text_note_content: {
    color: '#333',
    fontSize: 14,
  },
  data_text_note_content: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default memo(ScheduleItem);
