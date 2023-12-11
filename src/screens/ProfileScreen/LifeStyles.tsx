import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeLayout from '../../HomeLayout';
import {profileStyles} from './ProfileScreen';

const LifeStyle = (): JSX.Element => {
  const [lifeStyle, setLifeStyle] = useState<any>({});

  useEffect(() => {
    AsyncStorage.getItem('careever_profile').then(profile => {
      if (profile) {
        const profileData = JSON.parse(profile);
        setLifeStyle(profileData.lifeStyle || {});
      }
    });
  }, []);

  const getStyles = (input: any) =>
    lifeStyle && lifeStyle[input]
      ? profileStyles.highlight
      : profileStyles.title;

  return (
    <HomeLayout disablePadding={true} showHeader={false}>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Smoking Habits</Text>
        <Text style={getStyles('smokingHabits')}>
          {lifeStyle.smokingHabits ? lifeStyle.smokingHabits : 'add details'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Alcohol Consumption</Text>
        <Text style={getStyles('alcoholConsumption')}>
          {lifeStyle.alcoholConsumption
            ? lifeStyle.alcoholConsumption
            : 'add details'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Activity Level</Text>
        <Text style={getStyles('activity')}>
          {lifeStyle.activity ? lifeStyle.activity : 'add details'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Food Preferences</Text>
        <Text style={getStyles('foodPreferences')}>
          {lifeStyle.foodPreferences
            ? lifeStyle.foodPreferences
            : 'add lifestyle'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Occupation</Text>
        <Text style={getStyles('occupation')}>
          {lifeStyle.occupation ? lifeStyle.occupation : 'add occupation'}
        </Text>
      </TouchableOpacity>
    </HomeLayout>
  );
};

export default LifeStyle;
