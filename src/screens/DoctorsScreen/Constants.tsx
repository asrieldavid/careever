import moment from 'moment';

export interface DoctorDetails {
  name: string;
  image: any;
  type: string;
  experience: number;
  qualification: string;
  rating: number;
  fee: number;
  ratingCount: number;
}

export interface ScheduleDate {
  date: string;
  month: string;
  time?: string;
}

// Temp code - need to replace with api
export const DOCTORS: DoctorDetails[] = [
  {
    name: 'Dr. Bruce Banner',
    image: require('../../assets/images/doctor/doctors-list/doctor1.png'),
    type: 'General Physician',
    experience: 10,
    qualification: 'MBBS, MD',
    rating: 4.8,
    fee: 500,
    ratingCount: 300,
  },
  {
    name: 'Dr. Octo',
    image: require('../../assets/images/doctor/doctors-list/doctor2.png'),
    type: 'General Physician',
    experience: 10,
    qualification: 'MBBS, MD',
    rating: 4.8,
    fee: 500,
    ratingCount: 300,
  },
  {
    name: 'Dr. David',
    image: require('../../assets/images/doctor/doctors-list/doctor3.png'),
    type: 'General Physician',
    experience: 10,
    qualification: 'MBBS, MD',
    rating: 4.8,
    fee: 500,
    ratingCount: 300,
  },
];

export const getDates = (): ScheduleDate[] => {
  const timeNow = moment().format('HH');
  const dates =
    timeNow >= '21'
      ? Array.from({length: 15}, (_, i) => i + 1)
      : [...Array(14).keys()];
  return dates.map((index: number) => {
    const date = moment().add(index, 'day');
    return {
      date: date.format('DD'),
      month: date.format('MMM'),
    };
  });
};

export const getTime = (): string[] => {
  let time: string[] = ['10 am', '2 pm', '5 pm', '7 pm', '9 pm'];
  const timeNow = moment().format('HH');
  if (timeNow < '14') {
    time = ['2 pm', '5 pm', '7 pm', '9 pm'];
  } else if (timeNow < '17') {
    time = ['5 pm', '7 pm', '9 pm'];
  } else if (timeNow < '19') {
    time = ['7 pm', '9 pm'];
  } else if (timeNow < '21') {
    time = ['9 pm'];
  }
  return ['10 am', '2 pm', '5 pm', '7 pm', '9 pm'];
};
