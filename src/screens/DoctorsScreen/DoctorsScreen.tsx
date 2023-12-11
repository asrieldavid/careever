import React from 'react';
import {StyleSheet, Text} from 'react-native';
import HomeLayout from '../../HomeLayout';
import Styles from '../../Styles';

const DoctorsScreen = ({navigation}: any): JSX.Element => {
  return (
    <HomeLayout isMainScreen navigation={navigation}>
      <Text style={Styles.container}>Doctors</Text>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({});

export default DoctorsScreen;
