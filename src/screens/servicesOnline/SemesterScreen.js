import React, { useCallback } from 'react';
import {
  ScrollView
} from 'react-native';
import InfoServiceComponent from '../../components/infoSv/infoServiceComponent';
import TopBar from '../../container/header/TopBar';

const data = ['Hoàn thành', 'Chưa hoàn thành'];
const date = {
  timeAfter: '15/3/2022',
  timeBefore: '20/3/2022',
  time: '26/11/2022',
};

function SemesterScreen(props) {
  const handleSubmit = useCallback((value, info) => {
    // console.log(value);
    // console.log(info);
  });
  return (
    <>
      <TopBar />
      <ScrollView>
        <InfoServiceComponent
          data={data}
          date={date}
          submit={handleSubmit}
          type="Đăng kí bảo lưu"
          number={true}
          reason="Bảo lưu"
          titleSelect1="Trạng thái"
        />
      </ScrollView>
    </>
  );
}

SemesterScreen.propTypes = {};

export default SemesterScreen;
