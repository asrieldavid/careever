import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HomeLayout from '../../HomeLayout';
import DoctorCard from './DoctorCard';
import {ScheduleDate, getDates, getTime} from './Constants';
import Styles, {Fonts} from '../../Styles';
import Colors from '../../Colors';
import {NAVIGATION} from '../../Constants';

const DoctorScheduleScreen = ({route, navigation}: any): JSX.Element => {
  const {doctorDetails} = route.params;
  const times: string[] = getTime();
  const availableDates: ScheduleDate[] = getDates();

  const [selectedDate, setSelectedDate] = useState(availableDates[0]);
  const [selectedTime, setSelectedTime] = useState(times[0]);
  return (
    <HomeLayout navigation={navigation}>
      <View style={styles.doctorCard}>
        <DoctorCard doctorDetails={doctorDetails} />
      </View>
      <Text style={[styles.title, styles.titleContainer]}>Dates Available</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[Styles.row, styles.section]}>
          {availableDates.map((data: ScheduleDate) => (
            <TouchableOpacity
              key={data.date}
              onPress={() => setSelectedDate(data)}
              style={[
                Styles.boxShadow,
                styles.cardButton,
                styles.dateButton,
                selectedDate.date === data.date ? styles.selectedButton : {},
              ]}>
              <Text style={styles.title}>{data.date}</Text>
              <Text style={[styles.title, styles.month]}>{data.month}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Text style={[styles.title, styles.titleContainer]}>Time Available</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[Styles.row, styles.section, styles.timeContainer]}>
          {times.map((time: string) => (
            <TouchableOpacity
              key={time}
              onPress={() => setSelectedTime(time)}
              style={[
                Styles.boxShadow,
                styles.cardButton,
                styles.timeButton,
                selectedTime === time ? styles.selectedButton : {},
              ]}>
              <Text style={[styles.title]}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={[Styles.row, styles.amountContainer]}>
          <Text style={[styles.title]}>Amount Payable:</Text>
          <Text style={[styles.title, styles.amount]}>
            ₹{doctorDetails.fee}
          </Text>
        </View>
        <TouchableOpacity
          style={[Styles.greenButton, styles.bookButton]}
          onPress={() => {
            navigation.navigate(NAVIGATION.SCHEDULE_CONFIRMATION_SCREEN, {
              doctorDetails,
              date: selectedDate.date,
              month: selectedDate.month,
              time: selectedTime,
            });
          }}>
          <Text style={Styles.greenButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  doctorCard: {
    marginTop: 24,
    marginBottom: 14,
  },
  section: {
    marginBottom: 32,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    ...Fonts({color: Colors.titleText2, fontSize: 18, fontWeight: '700'})
      .commissioner,
  },
  cardButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 4,
  },
  selectedButton: {
    backgroundColor: Colors.lightGreen1,
  },
  dateButton: {
    marginHorizontal: 18,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  month: {
    fontSize: 14,
  },
  timeContainer: {
    justifyContent: 'flex-start',
  },
  timeButton: {
    padding: 10,
    width: 73,
    marginEnd: 24,
    marginStart: 18,
  },
  amountContainer: {
    marginBottom: 10,
  },
  amount: {
    fontSize: 22,
  },
  bottomContainer: {
    marginHorizontal: 26,
  },
  bookButton: {
    width: '100%',
  },
});

export default DoctorScheduleScreen;
