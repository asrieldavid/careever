import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomeLayout from '../../HomeLayout';
import Colors from '../../Colors';
import DoctorCard from './DoctorCard';
import Card from '../../components/Card/Card';
import Styles, {Fonts} from '../../Styles';
import {NAVIGATION} from '../../Constants';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GradientBackground from '../../components/GradientBackground/GradientBackground';

Sound.setCategory('Playback');

const ScheduleConfirmationScreen = ({route, navigation}: any): JSX.Element => {
  const {doctorDetails, date, month, time} = route.params;
  const [showSuccess, setShowSuccess] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSuccess(false);
    }, 1500);
    const successSound = new Sound(
      require('../../assets/sounds/success.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log(error);
          return;
        }
        successSound.play();
        successSound.release();
      },
    );
  }, []);
  if (showSuccess) {
    return (
      <View style={[Styles.fullScreen, Styles.container]}>
        <GradientBackground>
          <View style={Styles.container}>
            <Image source={require('../../assets/images/doctor/success.gif')} />
          </View>
        </GradientBackground>
      </View>
    );
  }
  return (
    <>
      <HomeLayout navigation={navigation}>
        <View style={[Styles.row, styles.confirmationHeader]}>
          <Text style={styles.title}>You have booked</Text>
          <FontAwesome6
            style={styles.checkIcon}
            name={'circle-check'}
            size={14}
            color={Colors.green}
            solid
          />
        </View>
        <DoctorCard doctorDetails={doctorDetails} />
        <Text style={styles.title}>Date and Time</Text>
        <View style={[Styles.row, styles.section]}>
          <Card style={styles.card}>
            <View style={[Styles.row, styles.cardContent]}>
              <FontAwesome6
                name={'calendar'}
                size={38}
                color={Colors.green}
                solid
              />
              <Text style={[styles.title, styles.cardTitle]}>
                {date} {month}
              </Text>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={[Styles.row, styles.cardContent]}>
              <FontAwesome6
                name={'clock'}
                size={38}
                color={Colors.green}
                solid
              />
              <Text style={[styles.title, styles.cardTitle]}>{time}</Text>
            </View>
          </Card>
        </View>
        <Text style={styles.title}>Payments Details</Text>
        <View style={styles.feeDetails}>
          <Text style={styles.feeContent}>Consultation fee</Text>
          <Text style={styles.feeContent}>Tax</Text>
          <View style={Styles.row}>
            <Text style={styles.feeContent}>Total</Text>
            <Text style={[styles.feeContent, styles.boldContent]}>
              ₹{doctorDetails.fee}
            </Text>
          </View>
        </View>
      </HomeLayout>
      <TouchableOpacity
        style={[Styles.greenButton, styles.doneButton]}
        onPress={async () => {
          const appointments = await AsyncStorage.getItem(
            'careever_appointments',
          );
          let schedules: any[] = appointments ? JSON.parse(appointments) : [];
          schedules = [...schedules, route.params];
          await AsyncStorage.setItem(
            'careever_appointments',
            JSON.stringify(schedules),
          );
          navigation.navigate(NAVIGATION.HOME_LAYOUT);
        }}>
        <Text style={Styles.greenButtonText}>Done</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  confirmationHeader: {
    marginTop: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkIcon: {
    marginBottom: 16,
  },
  title: {
    ...Fonts({color: Colors.titleText2, fontSize: 16, fontWeight: '700'})
      .commissioner,
    marginBottom: 16,
    marginEnd: 10,
  },
  cardTitle: {
    fontSize: 18,
    marginEnd: 0,
    marginBottom: 0,
  },
  section: {
    marginBottom: 28,
  },
  card: {
    width: 140,
  },
  cardContent: {
    alignItems: 'center',
  },
  feeDetails: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.green,
    padding: 16,
    marginBottom: 16,
  },
  feeContent: {
    ...Fonts({fontSize: 14}).istokWeb,
    marginBottom: 8,
  },
  boldContent: {
    fontWeight: '700',
  },
  doneButton: {
    width: '100%',
    borderRadius: 0,
    height: 80,
  },
});

export default ScheduleConfirmationScreen;
