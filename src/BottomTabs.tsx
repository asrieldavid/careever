import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import Colors from './Colors';
import Styles from './Styles';
import {BOTTOM_TABS} from './Routes';
import {NAVIGATION, TabItems} from './Constants';
import icoMoonConfig from './assets/fonts/selection.json';

const Tab = createBottomTabNavigator();
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const renderTabBar = (
  {state, descriptors, navigation}: any,
  bottomTabs: TabItems[],
) => (
  <View style={[tabStyles.tabContainer]}>
    {state.routes.map((route: any, index: number) => {
      const {options} = descriptors[route.key];
      const label = options.tabBarLabel || options.title || route.name;
      const isFocused = state.index === index;

      return (
        <TouchableOpacity
          key={label}
          style={Styles.container}
          accessibilityRole="button"
          accessibilityState={isFocused ? {selected: true} : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={() => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }}
          onLongPress={() => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          }}>
          {isFocused && (
            <Image
              style={tabStyles.tabSelected}
              source={require('./assets/images/bottom-tab/selected.png')}
            />
          )}
          <Icon
            size={label === 'Twilio' ? 32 : 18}
            name={bottomTabs[index].icon}
            color={label === 'Twilio' ? Colors.twilio : Colors.blueBg}
          />
          <Text
            style={[
              tabStyles.tabText,
              label === 'Twilio' ? tabStyles.twilioText : {},
            ]}>
            {label}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export const BottomTabs = (): JSX.Element => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={NAVIGATION.HOME_SCREEN}
        tabBar={props => renderTabBar(props, BOTTOM_TABS)}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}>
        {BOTTOM_TABS.map(tab => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};

const tabStyles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.greenBorder,
    backgroundColor: Colors.white,
  },
  tabText: {
    color: Colors.blueBg,
    fontSize: 10,
    fontFamily: 'Istok Web',
    fontWeight: '400',
  },
  tabSelected: {
    position: 'absolute',
  },
  twilioText: {
    color: Colors.twilio,
  },
});
