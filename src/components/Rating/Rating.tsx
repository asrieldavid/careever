import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Fonts} from '../../Styles';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import Colors from '../../Colors';

const Rating = ({
  rating,
  count,
  style = {},
  color = Colors.star,
  size = 18,
}: any) => {
  return (
    <View style={[styles.ratingContainer, {...style}]}>
      <FontAwesome6Icon name={'star'} size={size} color={color} solid />
      <Text style={[styles.content, styles.boldContent]}>{rating}</Text>
      <Text style={styles.content}>({count})</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ratingContainer: {
    marginTop: 14,
    width: 86,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    ...Fonts({fontSize: 14, fontWeight: '400'}).istokWeb,
    marginBottom: 2,
  },
  boldContent: {
    fontWeight: '700',
  },
});
export default Rating;
