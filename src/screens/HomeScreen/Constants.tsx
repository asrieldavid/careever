import {NAVIGATION} from '../../Constants';

export interface ImageList {
  title: string;
  image: any;
}
export interface Service extends ImageList {
  screenLink: string;
}
export const SERVICES: Service[] = [
  {
    title: 'Doctors',
    image: require('../../assets/images/home-screen/service1.gif'),
    screenLink: NAVIGATION.DOCTORS_SCREEN,
  },
  {
    title: 'Medications',
    image: require('../../assets/images/home-screen/service2.gif'),
    screenLink: NAVIGATION.HOME_SCREEN,
  },
  {
    title: 'Lab Testing',
    image: require('../../assets/images/home-screen/service3.gif'),
    screenLink: NAVIGATION.HOME_SCREEN,
  },
  {
    title: 'Appointments',
    image: require('../../assets/images/home-screen/service4.gif'),
    screenLink: NAVIGATION.APPOINTMENTS_SCREEN,
  },
];

export interface Doctor {
  name: string;
  specialist: string;
  image: any;
  rating: number;
  count: number;
}

export const NEAREST_DOCTORS: Doctor[] = [
  {
    name: 'Dr. Till',
    specialist: 'Dermatologist',
    image: require('../../assets/images/home-screen/nearest-doctor.png'),
    rating: 4.8,
    count: 300,
  },
  {
    name: 'Dr. Smith',
    specialist: 'Cardiologist',
    image: require('../../assets/images/home-screen/nearest-doctor.png'),
    rating: 4.3,
    count: 600,
  },
  {
    name: 'Dr. David',
    specialist: 'Dermatologist',
    image: require('../../assets/images/home-screen/nearest-doctor.png'),
    rating: 4.6,
    count: 900,
  },
  {
    name: 'Dr. Jonathan',
    specialist: 'Dermatologist',
    image: require('../../assets/images/home-screen/nearest-doctor.png'),
    rating: 4.5,
    count: 800,
  },
];

export const SPECIALIST: ImageList[] = [
  {
    title: 'General Physician',
    image: require('../../assets/images/home-screen/general-physician.png'),
  },
  {
    title: 'Dermatology',
    image: require('../../assets/images/home-screen/dermatology.png'),
  },
  {
    title: 'Pediatrics',
    image: require('../../assets/images/home-screen/pediatrics.png'),
  },
  {
    title: 'Gynaecology',
    image: require('../../assets/images/home-screen/gynaecology.png'),
  },
  {
    title: 'Orthodontics',
    image: require('../../assets/images/home-screen/orthodontics.png'),
  },
  {
    title: 'Cardiology',
    image: require('../../assets/images/home-screen/cardiology.png'),
  },
];
