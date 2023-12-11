import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Styles, {Fonts} from '../../Styles';
import Card from '../../components/Card/Card';
import Colors from '../../Colors';
import {NAVIGATION} from '../../Constants';
import Rating from '../../components/Rating/Rating';

const DoctorCard = ({navigation, doctorDetails, isDetailedCard}: any) => {
  return (
    <Card style={styles.doctorCard}>
      <View style={[Styles.row, styles.doctorDetails]}>
        <View style={styles.imageContainer}>
          <View style={styles.doctorImage}>
            <Image source={doctorDetails.image} />
            <Text style={[styles.fee, Styles.container]}>
              ₹{doctorDetails.fee}
            </Text>
          </View>
          {isDetailedCard && (
            <Rating
              rating={doctorDetails.rating}
              count={doctorDetails.ratingCount}
            />
          )}
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.doctorName}>{doctorDetails.name}</Text>
          <Text style={styles.content}>{doctorDetails.type}</Text>
          <Text style={[styles.content, styles.boldContent]}>
            {doctorDetails.experience} years experience
          </Text>
          {isDetailedCard && (
            <Text style={styles.content}>{doctorDetails.qualification}</Text>
          )}
          {!isDetailedCard && (
            <Rating
              rating={doctorDetails.rating}
              count={doctorDetails.ratingCount}
            />
          )}
          {isDetailedCard && (
            <TouchableOpacity
              style={[Styles.greenButton, styles.bookButton]}
              onPress={() => {
                navigation.navigate(NAVIGATION.DOCTOR_SCHEDULE_SCREEN, {
                  doctorDetails,
                });
              }}>
              <Text style={[Styles.greenButtonText, styles.bookButtonText]}>
                Book Video Consult
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  doctorCard: {
    marginBottom: 24,
  },
  doctorDetails: {
    justifyContent: 'flex-start',
  },
  imageContainer: {
    marginEnd: 32,
  },
  doctorImage: {
    position: 'relative',
    paddingVertical: 2,
    borderRadius: 8,
  },
  fee: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.blueBg,
    opacity: 0.9,
    color: Colors.white,
    height: 27,
    width: '100%',
    fontWeight: '700',
    fontSize: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  detailsContainer: {},
  doctorName: {
    ...Fonts({color: Colors.titleText2, fontSize: 16, fontWeight: '700'})
      .commissioner,
    marginBottom: 2,
  },
  content: {
    ...Fonts({color: Colors.contentText, fontSize: 14, fontWeight: '400'})
      .istokWeb,
    marginBottom: 2,
  },
  boldContent: {
    fontWeight: '700',
  },
  bookButton: {
    marginTop: 8,
    height: 36,
    width: 170,
    borderRadius: 4,
  },
  bookButtonText: {
    fontSize: 16,
  },
});
export default DoctorCard;
