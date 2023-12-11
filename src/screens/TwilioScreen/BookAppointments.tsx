import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../Colors';
import Styles, {Fonts} from '../../Styles';
import {NAVIGATION} from '../../Constants';
import GradientBackground from '../../components/GradientBackground/GradientBackground';

const BookAppointments = ({navigation}: any): JSX.Element => {
  return (
    <GradientBackground>
      <View style={[Styles.container]}>
        <FontAwesome6
          name={'calendar-xmark'}
          size={32}
          color={Colors.darkBlue}
        />
        <Text style={styles.noAppointmentText}>
          No appointments scheduled today!
        </Text>
        <TouchableOpacity
          style={[styles.bookAppointment]}
          onPress={() => {
            navigation.navigate(NAVIGATION.DOCTORS_SCREEN);
          }}>
          <Text style={styles.linkText}>Book Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION.APPOINTMENTS_SCREEN);
          }}>
          <Text style={styles.linkText}>Go to Appointments</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  noAppointmentText: {
    marginTop: 16,
    marginBottom: 24,
    ...Fonts({fontSize: 16, color: Colors.black1}).istokWeb,
  },
  bookAppointment: {
    marginBottom: 24,
  },
  linkText: {
    textDecorationLine: 'underline',
    ...Fonts({fontSize: 16, fontWeight: '700', color: Colors.darkBlue})
      .istokWeb,
  },
});

export default BookAppointments;
