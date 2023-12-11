import moment from 'moment';

interface Navigation {
  INTRO_SCREEN: string;
  LOGIN_SCREEN: string;
  HOME_LAYOUT: string;
  HOME_SCREEN: string;
  DOCTORS_SCREEN: string;
  TWILIO_SCREEN: string;
  PROFILE_SCREEN: string;
  APPOINTMENTS_SCREEN: string;
  DOCTOR_LIST_SCREEN: string;
  DOCTOR_SCHEDULE_SCREEN: string;
  SCHEDULE_CONFIRMATION_SCREEN: string;
}

export const NAVIGATION: Navigation = {
  INTRO_SCREEN: 'Introduction',
  LOGIN_SCREEN: 'Login',
  HOME_LAYOUT: 'HomeLayout',
  HOME_SCREEN: 'Home',
  DOCTORS_SCREEN: 'Doctors',
  TWILIO_SCREEN: 'Twilio',
  PROFILE_SCREEN: 'Profile',
  APPOINTMENTS_SCREEN: 'Appointments',
  DOCTOR_LIST_SCREEN: 'DoctorList',
  DOCTOR_SCHEDULE_SCREEN: 'DoctorSchedule',
  SCHEDULE_CONFIRMATION_SCREEN: 'ScheduleConfirmation',
};

export interface Routes {
  name: string;
  component: any;
  icon?: string;
}

export interface TabItems extends Routes {
  icon: string;
}

export const getGreetings = (): string => {
  let greetings = 'Hello';
  const timeNow = moment().format('HH');
  if (timeNow >= '3' && timeNow < '12') {
    greetings = 'Good Morning';
  } else if (timeNow >= '12' && timeNow < '15') {
    greetings = 'Good Afternoon';
  } else if (timeNow >= '15' && timeNow < '20') {
    greetings = 'Good Evening';
  }
  return `${greetings},`;
};
