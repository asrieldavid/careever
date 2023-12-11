import React, {useEffect, useState} from 'react';
import HomeLayout from '../../HomeLayout';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppointmentCard from '../HomeScreen/AppointmentsCard';
import NoData from './NoData';
import {sortBy} from 'lodash';
import {useIsFocused} from '@react-navigation/native';

const UpcomingAppointments = (): JSX.Element => {
  const isFocused = useIsFocused();
  const [appointments, setAppointments] = useState<any>();
  useEffect(() => {
    if (isFocused) {
      AsyncStorage.getItem('careever_appointments').then(appointmentList => {
        if (appointmentList) {
          setAppointments(
            sortBy(JSON.parse(appointmentList), ['date', 'time', 'month']),
          );
        }
      });
    }
  }, [isFocused]);

  if (!appointments) {
    return <NoData />;
  }
  return (
    <HomeLayout disablePadding={true} showHeader={false}>
      <View style={styles.appointmentsContainer}>
        {appointments &&
          appointments.map((appointment: any) => (
            <View
              style={styles.appointmentCard}
              key={`${appointment.doctorDetails.name}-${appointment.date}-${appointment.time}`}>
              <AppointmentCard isAppointmentScreen appointment={appointment} />
            </View>
          ))}
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  appointmentsContainer: {
    marginTop: 16,
  },
  appointmentCard: {
    marginBottom: 4,
  },
});

export default UpcomingAppointments;
