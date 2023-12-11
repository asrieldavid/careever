import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomeLayout from '../../HomeLayout';
import Styles, {Fonts} from '../../Styles';
import Colors from '../../Colors';
import {DoctorDetails, DOCTORS} from './Constants';
import DoctorCard from './DoctorCard';

const DoctorListScreen = ({navigation}: any): JSX.Element => {
  return (
    <HomeLayout navigation={navigation}>
      <View style={[Styles.row, styles.titleContainer]}>
        <Text style={styles.title}>General Physicians</Text>
        <TouchableOpacity style={[Styles.boxShadow, styles.filter]}>
          <FontAwesome6 name={'sliders'} size={20} color={Colors.green} solid />
        </TouchableOpacity>
      </View>
      <View>
        {DOCTORS.map((doctorDetails: DoctorDetails) => (
          <DoctorCard
            isDetailedCard
            key={doctorDetails.name}
            doctorDetails={doctorDetails}
            navigation={navigation}
          />
        ))}
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 28,
    alignItems: 'center',
  },
  title: {
    ...Fonts({fontSize: 20, fontWeight: '700'}).commissioner,
    lineHeight: 24,
    color: Colors.titleText2,
  },
  filter: {
    height: 40,
    width: 40,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGreen,
  },
});

export default DoctorListScreen;
