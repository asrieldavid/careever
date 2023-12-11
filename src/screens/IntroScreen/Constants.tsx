interface IntroItems {
  title: string;
  image: string;
  content: string;
}

export const INTRO_SLIDES: IntroItems[] = [
  {
    title: 'Easy Video Consulting',
    content: 'Video consult top doctors from the comfort of your home',
    image: require('../../assets/images/intro-screen/doctor1.png'),
  },
  {
    title: 'Thousands of Experts',
    content: 'More skilled medical professionals joined in CareEver.',
    image: require('../../assets/images/intro-screen/doctor2.png'),
  },
  {
    title: 'Schedule Appointment',
    content: "Read patient's experiences and schedule doctor appointment.",
    image: require('../../assets/images/intro-screen/doctor3.png'),
  },
];
