import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeLayout from '../../HomeLayout';
import Colors from '../../Colors';
import Styles, {Fonts} from '../../Styles';
import {profileStyles} from './ProfileScreen';
import PersonalInput from './PersonalInput';

const Personal = (): JSX.Element => {
  const [profile, setProfile] = useState<any>({});
  const [personal, setPersonal] = useState<any>({});
  const [selectedInput, setSelectedInput] = useState<string>();
  const [showPersonalInput, setShowPersonalInput] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem('careever_profile').then(profileData => {
      if (profileData) {
        const parsedProfile = JSON.parse(profileData);
        setProfile(parsedProfile);
        setPersonal(parsedProfile.personal || {});
      }
    });
  }, []);

  const getStyles = (input: any) =>
    personal && personal[input] ? profileStyles.highlight : profileStyles.title;

  const onInputSelect = (selected: string) => {
    setSelectedInput(selected);
    setShowPersonalInput(true);
  };

  const setPersonalDataChange = (key: string, value: any) => {
    const personalData = {...personal};
    personalData[key] = value;
    setPersonal(personalData);

    const profileData = {...profile, personal: personalData};
    setProfile(profileData);
    AsyncStorage.setItem('careever_profile', JSON.stringify(profileData));
  };

  if (showPersonalInput) {
    return (
      <PersonalInput
        data={personal}
        selected={selectedInput}
        setShowPersonalInput={setShowPersonalInput}
        setPersonalDataChange={setPersonalDataChange}
      />
    );
  }

  return (
    <HomeLayout disablePadding={true} showHeader={false}>
      <View style={profileStyles.section}>
        <TouchableOpacity onPress={() => onInputSelect('name')}>
          <Text style={profileStyles.title}>Name</Text>
          <Text style={profileStyles.highlight}>
            {personal.name ? personal.name : 'add name'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photo}>
          <Text style={[styles.addPhoto, Styles.textCenter]}>Add photo</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={profileStyles.section}
        onPress={() => onInputSelect('contact')}>
        <Text style={profileStyles.title}>Contact Number</Text>
        <Text style={getStyles('contact')}>
          {personal.contact ? personal.contact : 'add number'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={profileStyles.section}
        onPress={() => onInputSelect('email')}>
        <Text style={profileStyles.title}>Email Id</Text>
        <Text style={getStyles('email')}>
          {personal.email ? personal.email : 'add email'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={profileStyles.section}
        onPress={() => onInputSelect('gender')}>
        <Text style={profileStyles.title}>Gender</Text>
        <Text style={getStyles('gender')}>
          {personal.gender ? personal.gender : 'add gender'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={profileStyles.section}
        onPress={() => onInputSelect('dob')}>
        <Text style={profileStyles.title}>Date of Birth</Text>
        <Text style={getStyles('dob')}>
          {personal.dob ? personal.dob : 'dd mm yyyy'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={profileStyles.section}
        onPress={() => onInputSelect('bloodGroup')}>
        <Text style={profileStyles.title}>Blood Group</Text>
        <Text style={getStyles('bloodGroup')}>
          {personal.bloodGroup ? personal.bloodGroup : 'add blood group'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={profileStyles.section}
        onPress={() => onInputSelect('martialStatus')}>
        <Text style={profileStyles.title}>Martial Status</Text>
        <Text style={getStyles('martialStatus')}>
          {personal.martialStatus
            ? personal.martialStatus
            : 'add marital status'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={profileStyles.section}
        onPress={() => onInputSelect('height')}>
        <Text style={profileStyles.title}>Height</Text>
        <Text style={getStyles('height')}>
          {personal.height ? personal.height : 'add height'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={profileStyles.section}
        onPress={() => onInputSelect('weight')}>
        <Text style={profileStyles.title}>Weight</Text>
        <Text style={getStyles('weight')}>
          {personal.weight ? personal.weight : 'add weight'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={profileStyles.section}
        onPress={() => onInputSelect('emergencyContact')}>
        <Text style={profileStyles.title}>Emergency Contact</Text>
        <Text style={getStyles('emergencyContact')}>
          {personal.emergencyContact
            ? personal.emergencyContact
            : 'add emergency details'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={profileStyles.section}
        onPress={() => onInputSelect('location')}>
        <Text style={profileStyles.title}>Location</Text>
        <Text style={getStyles('location')}>
          {personal.location ? personal.location : 'add details'}
        </Text>
      </TouchableOpacity>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  photo: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: Colors.gray1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    width: 50,
    ...Fonts({fontSize: 16, fontWeight: '400', color: Colors.darkBlue})
      .istokWeb,
  },
});

export default Personal;
