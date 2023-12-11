import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingAppointments from './UpcomingAppointments';
import AppointmentsHistory from './AppointmentsHistory';
import Colors from '../../Colors';
const {height} = Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();
const AppointmentsScreen = (): JSX.Element => {
  return (
    <View style={styles.tabsContainer}>
      <Tab.Navigator
        screenOptions={{
          lazy: true,
          tabBarStyle: {
            backgroundColor: Colors.greenHeader,
          },
          tabBarIndicatorStyle: {
            borderBottomWidth: 2,
            borderBottomColor: Colors.white,
            backgroundColor: Colors.white,
          },
          tabBarAndroidRipple: {color: 'transparent', radius: 0},
          tabBarLabelStyle: {
            textTransform: 'none',
            color: Colors.white,
            fontWeight: '700',
          },
        }}>
        <Tab.Screen name="Upcoming" component={UpcomingAppointments} />
        <Tab.Screen name="History" component={AppointmentsHistory} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    minHeight: '100%',
    height: height - 120,
  },
});

export default AppointmentsScreen;
