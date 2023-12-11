import {NAVIGATION, Routes, TabItems} from './Constants';
import IntroScreen from './screens/IntroScreen/IntroScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import TwilioScreen from './screens/TwilioScreen/TwilioScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import DoctorsScreen from './screens/DoctorsScreen/DoctorsScreen';
import AppointmentsScreen from './screens/AppointmentsScreen/AppointmentsScreen';
import DoctorListScreen from './screens/DoctorsScreen/DoctorListScreen';
import DoctorScheduleScreen from './screens/DoctorsScreen/DoctorScheduleScreen';
import ScheduleConfirmationScreen from './screens/DoctorsScreen/ScheduleConfirmationScreen';

export const ROUTES: Routes[] = [
  {name: NAVIGATION.INTRO_SCREEN, component: IntroScreen},
  {name: NAVIGATION.LOGIN_SCREEN, component: LoginScreen},
  {name: NAVIGATION.HOME_SCREEN, component: HomeScreen},
  {name: NAVIGATION.DOCTORS_SCREEN, component: DoctorsScreen},
  {name: NAVIGATION.TWILIO_SCREEN, component: TwilioScreen},
  {name: NAVIGATION.APPOINTMENTS_SCREEN, component: AppointmentsScreen},
  {name: NAVIGATION.DOCTOR_LIST_SCREEN, component: DoctorListScreen},
  {name: NAVIGATION.DOCTOR_SCHEDULE_SCREEN, component: DoctorScheduleScreen},
  {
    name: NAVIGATION.SCHEDULE_CONFIRMATION_SCREEN,
    component: ScheduleConfirmationScreen,
  },
];

export const BOTTOM_TABS: TabItems[] = [
  {name: NAVIGATION.HOME_SCREEN, component: HomeScreen, icon: 'home'},
  {
    name: NAVIGATION.DOCTORS_SCREEN,
    component: DoctorListScreen,
    icon: 'doctor',
  },

  {name: NAVIGATION.TWILIO_SCREEN, component: TwilioScreen, icon: 'twilio'},
  {
    name: NAVIGATION.APPOINTMENTS_SCREEN,
    component: AppointmentsScreen,
    icon: 'appointments',
  },
  {name: NAVIGATION.PROFILE_SCREEN, component: ProfileScreen, icon: 'profile'},
];
