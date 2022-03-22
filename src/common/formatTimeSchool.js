const formatTimeSchool = (lesson) => {
    let time = '00:00:00 - 23:59:59';
    if (lesson === 1) {
      time = '07:15:00 - 09:15:00';
    } else if (lesson === 2) {
      time = '09:25:00 - 11:25:00';
    } else if (lesson === 3) {
      time = '12:00:00 - 14:00:00';
    } else if (lesson === 4) {
      time = '14:10:00 - 16:10:00';
    } else if (lesson === 5) {
      time = '16:20:00 - 18:20:00';
    } else if (lesson === 6) {
      time = '18:30:00 - 20:30:00';
    }
    return time;
}

export default formatTimeSchool;