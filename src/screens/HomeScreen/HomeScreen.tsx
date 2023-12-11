import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import HomeLayout from '../../HomeLayout';
import AdCard from '../../components/AdCard/AdCard';
import Styles, {Fonts} from '../../Styles';
import Colors from '../../Colors';
import Card from '../../components/Card/Card';
import {
  Doctor,
  NEAREST_DOCTORS,
  SPECIALIST,
  SERVICES,
  Service,
  ImageList,
} from './Constants';
import AppointmentCard from './AppointmentsCard';
import NearestDoctorCard from './NearestDoctorCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {sortBy, take} from 'lodash';
import {useIsFocused} from '@react-navigation/native';

const {width: deviceWidth} = Dimensions.get('window');

const HomeScreen = ({navigation}: any): JSX.Element => {
  const isFocused = useIsFocused();
  const [appointments, setAppointments] = useState<any>();

  useEffect(() => {
    if (isFocused) {
      AsyncStorage.getItem('careever_appointments').then(appointmentList => {
        if (appointmentList) {
          setAppointments(
            take(
              sortBy(JSON.parse(appointmentList), ['date', 'time', 'month']),
              3,
            ),
          );
        }
      });
    }
  }, [isFocused]);

  return (
    <HomeLayout isMainScreen={true} isHomeScreen={true} disablePadding={true}>
      <View style={styles.sections}>
        <AdCard />
      </View>
      <View style={styles.horizontalSections}>
        <Text style={[styles.title, styles.horizontalTitle]}>Our Services</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {SERVICES.map((service: Service) => (
            <View key={service.title} style={styles.servicesContainer}>
              <TouchableOpacity
                style={styles.serviceTouchable}
                onPress={() => navigation.navigate(service.screenLink)}>
                <Card style={styles.serviceCard}>
                  <Image style={styles.serviceImage} source={service.image} />
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                </Card>
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.space} />
        </ScrollView>
      </View>
      {appointments && (
        <View style={styles.horizontalSections}>
          <Text style={[styles.title, styles.horizontalTitle]}>
            Upcoming Appointments
          </Text>
          {appointments.map((appointment: any) => (
            <AppointmentCard
              key={`${appointment.doctorDetails.name}-${appointment.date}-${appointment.time}`}
              appointment={appointment}
            />
          ))}
        </View>
      )}
      <View style={styles.horizontalSections}>
        <Text style={[styles.title, styles.horizontalTitle]}>
          Doctors near you
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {NEAREST_DOCTORS.map((doctorDetails: Doctor) => (
            <View key={doctorDetails.name}>
              <TouchableOpacity>
                <NearestDoctorCard {...doctorDetails} />
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={Styles.container}>
            <Text style={[styles.viewAllText, styles.viewAll]}>View All</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.sections}>
        <AdCard />
      </View>
      <View style={styles.sections}>
        <View style={[Styles.row, styles.specialistTitle]}>
          <Text style={styles.title}>Top Specialists</Text>
          <TouchableOpacity style={styles.viewAllTitle}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={SPECIALIST}
            keyExtractor={(item: ImageList) => item.title}
            contentContainerStyle={styles.specialistContainer}
            numColumns={3}
            columnWrapperStyle={styles.specialistColumnWrapper}
            renderItem={({item}) => (
              <Card style={styles.specialistCard}>
                <Image resizeMode={'cover'} source={item.image} />
                <Text style={styles.specialist}>{item.title}</Text>
              </Card>
            )}
          />
        </ScrollView>
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  sections: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  horizontalSections: {
    marginTop: 12,
  },
  title: {
    ...Fonts({color: Colors.titleText3, fontSize: 16, fontWeight: '700'})
      .commissioner,
    marginBottom: 16,
  },
  horizontalScroll: {
    paddingHorizontal: 12,
  },
  horizontalTitle: {
    marginHorizontal: 16,
  },
  servicesContainer: {
    height: 130,
    margin: 10,
  },
  serviceTouchable: {
    width: '100%',
    height: '100%',
  },
  serviceCard: {
    width: 140,
    height: 120,
    padding: 12,
  },
  space: {
    width: 20,
  },
  serviceImage: {
    width: 52,
    height: 52,
    marginBottom: 12,
  },
  serviceTitle: {
    ...Fonts({color: Colors.black1, fontSize: 18, fontWeight: '700'})
      .commissioner,
  },
  viewAll: {
    width: 140,
    textAlign: 'center',
    marginEnd: 10,
  },
  viewAllText: {
    textDecorationLine: 'underline',
    ...Fonts({fontSize: 14, fontWeight: '400', color: Colors.greenText})
      .istokWeb,
  },
  viewAllTitle: {
    marginBottom: 16,
  },
  specialistContainer: {
    width: deviceWidth - 32,
    marginBottom: 16,
    rowGap: 20,
    paddingTop: 6,
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  specialistColumnWrapper: {
    justifyContent: 'space-between',
  },
  specialistCard: {
    width: '30%',
    height: 120,
    padding: 8,
  },
  specialistTitle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  specialist: {
    ...Styles.container,
    ...Fonts({fontSize: 12, color: Colors.black1, fontWeight: '700'})
      .commissioner,
    marginTop: 12,
  },
});

export default HomeScreen;
