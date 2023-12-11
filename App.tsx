/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION} from './src/Constants';
import {BottomTabs} from './src/BottomTabs';
import {ROUTES} from './src/Routes';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={NAVIGATION.INTRO_SCREEN}
          screenOptions={{
            headerShown: false,
          }}>
          {ROUTES.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
            />
          ))}
          <Stack.Screen
            name={NAVIGATION.HOME_LAYOUT}
            component={BottomTabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
