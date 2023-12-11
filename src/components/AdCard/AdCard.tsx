import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Styles, {Fonts} from '../../Styles';
import Card from '../Card/Card';
import Colors from '../../Colors';

const AdCard = () => {
  return (
    <Card enableBoxShadow={false} style={styles.cardContainer}>
      <View style={[Styles.container, Styles.row, styles.container]}>
        <View>
          <Text style={styles.topContent}>Lorem Ipsum,</Text>
          <Text style={styles.boldContent}>Ad Copy Here</Text>
        </View>
        <Image
          style={styles.image}
          source={require('../../assets/images/home-screen/ad.png')}
        />
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
  },
  container: {
    height: 124,
    borderRadius: 32,
    backgroundColor: Colors.lightGreen2,
    paddingHorizontal: 24,
    borderColor: Colors.greenBorder1,
    borderWidth: 1,
  },
  topContent: {
    ...Fonts({fontSize: 14}).istokWeb,
    marginBottom: 8,
  },
  boldContent: {
    ...Fonts({color: Colors.black1, fontSize: 18, fontWeight: '700'})
      .commissioner,
  },
  image: {
    width: 100,
  },
});
export default AdCard;
