import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native-elements';
import {ScrollView, View} from 'react-native';
import TopBar from '../../container/header/TopBar';
import InfoRegisterService from '../../components/RegisterService/InfoRegisterService';

function RegisteredServiceScreen(props) {
  return (
    <>
      <TopBar />
      <ScrollView>
        <InfoRegisterService />
      </ScrollView>
    </>
  );
}

RegisteredServiceScreen.propTypes = {};

export default RegisteredServiceScreen;
