import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../Colors';
import Styles, {Fonts} from '../../Styles';
import GradientBackground from '../../components/GradientBackground/GradientBackground';

const NoData = (): JSX.Element => {
  return (
    <GradientBackground>
      <View style={[Styles.container]}>
        <FontAwesome6
          solid
          name={'clock-rotate-left'}
          size={32}
          color={Colors.darkBlue}
        />
        <Text style={styles.noDataText}>No data available.</Text>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  noDataText: {
    marginTop: 16,
    ...Fonts({fontSize: 16, color: Colors.black1}).istokWeb,
  },
});

export default NoData;
