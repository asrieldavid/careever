import React from 'react';
import {View, StyleSheet} from 'react-native';
import Styles from '../../Styles';

const Card = ({style, children, enableBoxShadow = true}: any) => {
  return (
    <View
      style={[
        {...styles.card, ...style},
        enableBoxShadow ? Styles.boxShadow : {},
      ]}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
});
export default Card;
