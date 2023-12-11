import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../../Colors';
import Personal from './Personal';
import Medical from './Medical';
import LifeStyles from './LifeStyles';
import Styles, {Fonts} from '../../Styles';
const {height} = Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = (): JSX.Element => {
  return (
    <View style={styles.tabsContainer}>
      <Tab.Navigator
        screenOptions={{
          lazy: true,
          tabBarStyle: {
            backgroundColor: Colors.greenHeader,
          },
          tabBarIndicatorStyle: {
            borderBottomWidth: 2,
            borderBottomColor: Colors.white,
            backgroundColor: Colors.white,
          },
          tabBarAndroidRipple: {color: 'transparent', radius: 0},
          tabBarLabelStyle: {
            textTransform: 'none',
            color: Colors.white,
            fontWeight: '700',
          },
        }}>
        <Tab.Screen name="Personal" component={Personal} />
        <Tab.Screen name="Medical" component={Medical} />
        <Tab.Screen name="Lifestyle" component={LifeStyles} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flex: 1,
    minHeight: '100%',
    height: height - 120,
  },
});

export const profileStyles = StyleSheet.create({
  section: {
    ...Styles.container,
    ...Styles.row,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray2,
  },
  highlight: {
    ...Fonts({color: Colors.black1}).istokWeb,
  },
  input: {
    width: '100%',
    paddingBottom: 2,
    borderBottomColor: Colors.white,
    borderBottomWidth: 2,
    ...Fonts({fontSize: 24, fontWeight: '700', color: Colors.white}).istokWeb,
  },
  title: {
    ...Fonts({color: Colors.grayText}).istokWeb,
  },
});

export default ProfileScreen;
