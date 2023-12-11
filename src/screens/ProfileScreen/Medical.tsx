import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeLayout from '../../HomeLayout';
import {profileStyles} from './ProfileScreen';

const Medical = (): JSX.Element => {
  const [medical, setMedical] = useState<any>({});

  useEffect(() => {
    AsyncStorage.getItem('careever_profile').then(profile => {
      if (profile) {
        const profileData = JSON.parse(profile);
        setMedical(profileData.medical || {});
      }
    });
  }, []);

  const getStyles = (input: any) =>
    medical && medical[input] ? profileStyles.highlight : profileStyles.title;

  return (
    <HomeLayout disablePadding={true} showHeader={false}>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Allergies</Text>
        <Text style={getStyles('allergies')}>
          {medical.allergies ? medical.allergies : 'add allergies'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Current Medications</Text>
        <Text style={getStyles('currentMedications')}>
          {medical.currentMedications
            ? medical.currentMedications
            : 'add medications'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Past Medications</Text>
        <Text style={getStyles('pastMedications')}>
          {medical.pastMedications
            ? medical.pastMedications
            : 'add medications'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Chromic Diseases</Text>
        <Text style={getStyles('diseases')}>
          {medical.diseases ? medical.diseases : 'add disease'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Injuries</Text>
        <Text style={getStyles('injuries')}>
          {medical.injuries ? medical.injuries : 'add incident'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.section}>
        <Text style={profileStyles.title}>Surgeries</Text>
        <Text style={getStyles('surgeries')}>
          {medical.surgeries ? medical.surgeries : 'add surgeries'}
        </Text>
      </TouchableOpacity>
    </HomeLayout>
  );
};

export default Medical;
