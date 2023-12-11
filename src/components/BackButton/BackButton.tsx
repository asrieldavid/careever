import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Fonts} from '../../Styles';
import Colors from '../../Colors';

const BackButton = ({onBackPress, navigation}: any) => {
  return (
    <TouchableOpacity
      style={styles.backContainer}
      onPress={() => {
        if (onBackPress) {
          onBackPress();
        } else {
          navigation.goBack();
        }
      }}>
      <FontAwesome6 name={'arrow-left-long'} size={20} color={Colors.green} />
      <Text style={[Fonts().istokWeb, styles.backText]}>Back</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  backText: {
    marginStart: 12,
    fontSize: 16,
    fontWeight: '700',
  },
});
export default BackButton;
