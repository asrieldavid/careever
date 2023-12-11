import React from 'react';
import {TextInput} from 'react-native';
import ProfileStepper from './ProfileStepper';
import {profileStyles} from './ProfileScreen';
import Colors from '../../Colors';

const getPersonalOrder = (
  data: any,
  selected: string,
  setPersonalDataChange: Function,
) => {
  const personalData: any[] = [
    {
      id: 'name',
      question: 'What is your name?',
      component: (
        <TextInput
          value={data.name}
          style={profileStyles.input}
          placeholder="Enter full name"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('name', text)}
        />
      ),
    },
    {
      id: 'contact',
      question: 'What is your number?',
      component: (
        <TextInput
          value={data.contact}
          style={profileStyles.input}
          placeholder="Enter contact number"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('contact', text)}
        />
      ),
    },
    {
      id: 'email',
      question: 'What is your email id?',
      component: (
        <TextInput
          value={data.email}
          style={profileStyles.input}
          placeholder="Enter email address"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('email', text)}
        />
      ),
    },
    {
      id: 'gender',
      question: 'Which gender do you identify with?',
      component: (
        <TextInput
          value={data.gender}
          style={profileStyles.input}
          placeholder="Enter your gender"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('gender', text)}
        />
      ),
      inputs: [{type: 'select', data: ['Male', 'Female', 'Other']}],
    },
    {
      id: 'dob',
      question: 'What is your Date of Birth?',
      component: (
        <TextInput
          value={data.dob}
          style={profileStyles.input}
          placeholder="DD/MM/YYYY"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('dob', text)}
        />
      ),
      inputs: [{type: 'date'}],
    },
    {
      id: 'bloodGroup',
      question: 'What is your blood group?',
      component: (
        <TextInput
          value={data.bloodGroup}
          style={profileStyles.input}
          placeholder="Enter your blood group"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('bloodGroup', text)}
        />
      ),
      inputs: [
        {
          type: 'select',
          data: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        },
      ],
    },
    {
      id: 'martialStatus',
      question: 'Are you married?',
      component: (
        <TextInput
          value={data.martialStatus}
          style={profileStyles.input}
          placeholder="Enter your marital status"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('martialStatus', text)}
        />
      ),
      inputs: [
        {
          type: 'select',
          data: ['Single', 'Married'],
        },
      ],
    },
    {
      id: 'height',
      question: 'What is your height?',
      component: (
        <TextInput
          value={data.height}
          style={profileStyles.input}
          placeholder="Enter your height"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('height', text)}
        />
      ),
      inputs: [
        {
          type: 'height',
          data: ['feet', 'inches'],
        },
      ],
    },
    {
      id: 'weight',
      question: 'What is your weight?',
      component: (
        <TextInput
          value={data.weight}
          style={profileStyles.input}
          placeholder="Enter your weight"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('weight', text)}
        />
      ),
      inputs: [
        {
          type: 'weight',
          data: Array.from({length: 150}, (_, i) => i + 1),
        },
      ],
    },
    {
      id: 'emergencyContact',
      question: 'Who is your emergency contact?',
      component: (
        <TextInput
          value={data.emergencyContact}
          style={profileStyles.input}
          placeholder="Enter your emergency contact"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('emergencyContact', text)}
        />
      ),
      inputs: [
        {
          type: 'text',
          placeHolder: 'Enter full name',
        },
        {
          type: 'text',
          placeHolder: 'Enter contact number',
        },
      ],
    },
    {
      id: 'location',
      question: 'Which city are you from?',
      component: (
        <TextInput
          value={data.location}
          style={profileStyles.input}
          placeholder="Enter your location"
          placeholderTextColor={Colors.whiteFade}
          onChangeText={text => setPersonalDataChange('location', text)}
        />
      ),
      inputs: [
        {
          type: 'options',
          placeHolder: 'Select your city',
        },
      ],
    },
  ];
  const selectedIndex = personalData.findIndex(
    (selectedData: any) => selectedData.id === selected,
  );
  if (selectedIndex === 0) {
    return personalData;
  } else if (selectedIndex > 0) {
    const firstItems = personalData.slice(selectedIndex);
    const remaining = personalData.slice(0, selectedIndex);
    return [...firstItems, ...remaining];
  }

  return personalData;
};

const PersonalInput = ({
  data,
  selected,
  setPersonalDataChange,
  setShowPersonalInput,
}: any): JSX.Element => {
  return (
    <ProfileStepper
      category="Personal"
      data={getPersonalOrder(data, selected, setPersonalDataChange)}
      onClose={() => setShowPersonalInput(false)}
    />
  );
};

export default PersonalInput;
