import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Styles from './Styles';
import Header from './components/Header/Header';
import GradientBackground from './components/GradientBackground/GradientBackground';

const HomeLayout = ({
  children,
  isMainScreen,
  isHomeScreen,
  navigation,
  disablePadding,
  showHeader = true,
}: any): JSX.Element => {
  return (
    <View style={[Styles.fullScreen, Styles.container]}>
      <GradientBackground>
        <ScrollView showsVerticalScrollIndicator={false}>
          {showHeader && (
            <Header
              isMainScreen={isMainScreen}
              isHomeScreen={isHomeScreen}
              navigation={navigation}
            />
          )}
          <View style={disablePadding ? {} : styles.container}>{children}</View>
        </ScrollView>
      </GradientBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});

export default HomeLayout;
