import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const ScheduleItem = props => {
  const {schedule} = props;
  const [expanded, setExpanded] = React.useState(false);
  const setConfigTime = ca => {
    let time = '00:00:00 - 23:59:59';
    if (ca === 1) {
      time = '07:15:00 - 09:15:00';
    } else if (ca === 2) {
      time = '09:25:00 - 11:25:00';
    } else if (ca === 3) {
      time = '12:00:00 - 14:00:00';
    } else if (ca === 4) {
      time = '14:10:00 - 16:10:00';
    } else if (ca === 5) {
      time = '16:20:00 - 18:20:00';
    } else if (ca === 6) {
      time = '18:30:00 - 20:30:00';
    }
    return time;
  };
  return (
    <ListItem.Accordion
      style={styles.accordion}
      content={
        <>
          <ListItem.Content style={styles.box_content_item}>
            <View style={styles.box_left_title}>
              <Text style={{fontSize: 14}}>{schedule.room_name}-Ca {schedule.slot}</Text>
            </View>
            <View style={styles.box_right_title}>
              <Text style={styles.text_top}>{schedule.day}</Text>
              <Text numberOfLines={1} style={styles.text_bottom}>{schedule.subject_name}</Text>
            </View>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <ListItem style={styles.bottomDivider}>
        <ListItem.Content style={styles.box_content_item}>
          <View style={styles.box_left_dropdown}>
            <Text>
              <Text style={styles.text_note_content}>Giảng đường: </Text>
              <Text style={styles.data_text_note_content}>{schedule.area_name}</Text>
            </Text>
            <Text>
              <Text style={styles.text_note_content}>Mã môn: </Text>
              <Text style={styles.data_text_note_content}>{schedule.subject_code}</Text>
            </Text>
            <Text>
              <Text style={styles.text_note_content}>Thời gian: </Text>
              <Text style={styles.data_text_note_content}>
                {setConfigTime(schedule.slot)}
              </Text>
            </Text>
          </View>
          <View style={styles.box_right_dropdown}>
            <Text>
              <Text style={styles.text_note_content}>Lớp: </Text>
              <Text style={styles.data_text_note_content}>{schedule.room_name}</Text>
            </Text>
            <Text>
              <Text style={styles.text_note_content}>Giảng viên: </Text>
              <Text style={styles.data_text_note_content}>{schedule.activity_leader_login}</Text>
            </Text>
          </View>
        </ListItem.Content>
      </ListItem>
    </ListItem.Accordion>
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
    fontSize: 14,
    padding: 20,
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(249, 92, 4)',
  },
  text_bottom: {
    paddingTop: 20,
    fontSize: 14,
  },
  text_top: {
    fontSize: 14,
  },
  box_right_title: {
    paddingLeft: 15,
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

export default ScheduleItem;
