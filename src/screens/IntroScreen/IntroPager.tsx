import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Rect} from 'react-native-svg';

const IntroPager = ({activeIndex}: any): JSX.Element => {
  const xValue = activeIndex === 0 ? 0 : activeIndex * 58;
  return (
    <View style={styles.introPager}>
      <Svg height="6" width="172" viewBox="0 0 172 6" fill="none">
        <Rect width="172" height="6" rx="2" fill="#E9E9E9" />
        <Rect x={xValue} width="56" height="6" rx="2" fill="#7AC6A3" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  introPager: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroPager;
