import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Styles, {Fonts} from '../../Styles';
import Card from '../../components/Card/Card';
import Colors from '../../Colors';
import Rating from '../../components/Rating/Rating';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const AppointmentCard = ({appointment}: any) => {
  return (
    <Card style={styles.appointmentContainer}>
      <View style={[Styles.container, Styles.row, styles.topContainer]}>
        <View style={styles.imageContainer}>
          {appointment.doctorDetails.image && (
            <FontAwesome6
              solid
              name={'user-doctor'}
              size={32}
              color={Colors.darkBlue}
            />
          )}
        </View>
        <View>
          <Text style={styles.darkContent}>
            {appointment.doctorDetails.name}
          </Text>
          <Text style={styles.smallContent}>
            {appointment.doctorDetails.type}
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text
            style={[
              styles.darkContent,
              styles.date,
            ]}>{`${appointment.date} ${appointment.month}`}</Text>
          <Text style={styles.smallContent}>{appointment.time}</Text>
        </View>
      </View>
      <View style={[Styles.container, Styles.row]}>
        <Rating
          rating={appointment.doctorDetails.rating}
          count={appointment.doctorDetails.ratingCount}
        />
        <View>
          <TouchableOpacity style={[Styles.container, styles.callButton]}>
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  appointmentContainer: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  topContainer: {
    justifyContent: 'flex-start',
  },
  imageContainer: {
    height: 56,
    width: 56,
    borderRadius: 50,
    overflow: 'hidden',
    marginEnd: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray1,
  },
  darkContent: {
    ...Fonts({color: Colors.darkBlue, fontSize: 16, fontWeight: '700'})
      .commissioner,
  },
  smallContent: {
    ...Fonts({color: Colors.contentText1, fontSize: 14}).istokWeb,
    marginTop: 4,
  },
  dateContainer: {
    marginStart: 'auto',
  },
  date: {
    color: Colors.titleText3,
  },
  callButton: {
    width: 100,
    height: 28,
    backgroundColor: Colors.gray1,
    borderRadius: 49,
    marginTop: 12,
  },
  callText: {
    ...Fonts({color: Colors.contentText, fontSize: 14}).istokWeb,
  },
});
export default AppointmentCard;
