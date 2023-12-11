import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../Colors';
import Styles from '../../Styles';

const GradientBackground = ({children}: any) => (
  <LinearGradient
    style={Styles.fullScreen}
    colors={[Colors.gradient, Colors.white]}>
    {children}
  </LinearGradient>
);
export default GradientBackground;
