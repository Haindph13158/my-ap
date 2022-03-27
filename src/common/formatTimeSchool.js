const formatTimeSchool = (lesson) => {
    let time = '00:00 - 23:59';
    if (lesson === 1) {
      time = '07:15 - 09:15';
    } else if (lesson === 2) {
      time = '09:25 - 11:25';
    } else if (lesson === 3) {
      time = '12:00 - 14:00';
    } else if (lesson === 4) {
      time = '14:10 - 16:10';
    } else if (lesson === 5) {
      time = '16:20 - 18:20';
    } else if (lesson === 6) {
      time = '18:30 - 20:30';
    }
    return time;
}

export default formatTimeSchool;