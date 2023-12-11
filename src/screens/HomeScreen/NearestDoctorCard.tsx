import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import Styles, {Fonts} from '../../Styles';
import Card from '../../components/Card/Card';
import {Doctor} from './Constants';
import Rating from '../../components/Rating/Rating';
import Colors from '../../Colors';

const NearestDoctorCard = ({
  name,
  image,
  specialist,
  rating,
  count,
}: Doctor) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={Styles.container}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.specialist}>{specialist}</Text>
      <Rating
        style={styles.rating}
        rating={rating}
        count={count}
        color={Colors.green}
      />
    </Card>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    width: 140,
    padding: 12,
    margin: 10,
    marginTop: 2,
    marginBottom: 16,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: 'hidden',
    marginEnd: 10,
  },
  name: {
    ...Styles.container,
    ...Fonts({fontSize: 16, color: Colors.black1, fontWeight: '700'})
      .commissioner,
    marginTop: 16,
  },
  specialist: {
    ...Styles.container,
    ...Fonts({fontSize: 14, color: Colors.grayText}).istokWeb,
    marginTop: 6,
  },
  rating: {
    width: '100%',
    justifyContent: 'center',
    columnGap: 4,
    marginTop: 5,
  },
});
export default NearestDoctorCard;
