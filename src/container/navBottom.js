import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import IconView from '../common/IconView';
import HomeScreen from '../screens/homeScreen/HomeScreen';

import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';
import SettingScreen from '../screens/SettingScreen';
import SubjectScreen from '../screens/SubjectScreen';
import ConfigHeader from './header/configHeader';
const Tab = createMaterialBottomTabNavigator();


function NavBottom(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="rgba(255, 155, 107, 0.8)"
      barStyle={{backgroundColor: 'white'}}
      tabBarItemStyle={{color: 'red'}}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        barStyle={{backgroundColor: 'white', borderColor: 'red', borderWidth: 2}}
        options={{
          tabBarIcon: ({ color }) => (
            <IconView component="Entypo" name='home' size={25} color={color} />
          ),
          headerTitle: (props) => <ConfigHeader {...props} />
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IconView component="FontAwesome" name='calendar' size={25} color={color} />
          ),
          headerTitle: props => <ConfigHeader {...props} />
        }}
      />
      
      <Tab.Screen
        name="Subject"
        component={SubjectScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IconView component="AntDesign" name='windowso' size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IconView component="AntDesign" name='setting' size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

NavBottom.propTypes = {};

export default NavBottom;
