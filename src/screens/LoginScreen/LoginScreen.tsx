import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import Styles from '../../Styles';
import Colors from '../../Colors';
import OTPTextView from 'react-native-otp-textinput';
import Counter from './Counter';
import {NAVIGATION} from '../../Constants';
import BackButton from '../../components/BackButton/BackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GradientBackground from '../../components/GradientBackground/GradientBackground';

const LoginScreen = ({navigation}: any): JSX.Element => {
  const phoneInput = useRef<PhoneInput>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isValidNumber, setIsValidNumber] = useState<boolean>(false);
  const [isOtpClicked, setIsOtpClicked] = useState<boolean>(false);
  const [otpInput, setOtpInput] = useState<string>('');
  const [isRetryClicked, setIsRetryClicked] = useState<boolean>(false);
  const [showRetryOption, setShowRetryOption] = useState<boolean>(false);
  const [disableRetryOption, setDisableRetryOption] = useState<boolean>(false);

  return (
    <View style={[Styles.container, Styles.fullScreen]}>
      <GradientBackground>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <BackButton
              onBackPress={() => {
                if (isOtpClicked) {
                  setIsOtpClicked(false);
                } else {
                  navigation.navigate(NAVIGATION.INTRO_SCREEN);
                }
              }}
            />
            <Text style={[styles.logoText]}>CareEver</Text>
            {!isOtpClicked && (
              <View>
                <Text style={styles.titleText}>
                  Enter your mobile number to get OTP
                </Text>

                <SafeAreaView style={styles.textInputContainer}>
                  <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="IN"
                    layout="first"
                    onChangeText={mobileNumber => {
                      setPhoneNumber(mobileNumber);
                      const isValid =
                        phoneInput.current?.isValidNumber(mobileNumber) ||
                        false;
                      setIsValidNumber(isValid);
                      if (isValid) {
                        AsyncStorage.setItem(
                          'careever_profile',
                          JSON.stringify({
                            personal: {
                              contact: `+${phoneInput.current?.getCallingCode()} - ${mobileNumber}`,
                            },
                          }),
                        );
                      }
                    }}
                    autoFocus
                    placeholder="Mobile number"
                    flagButtonStyle={styles.flagButton}
                    containerStyle={styles.phoneInputContainer}
                    textContainerStyle={styles.phoneTextContainer}
                    textInputStyle={styles.phoneTextInput}
                  />
                  <TouchableOpacity
                    disabled={!isValidNumber}
                    style={[
                      !isValidNumber ? Styles.Disabled : {},
                      Styles.greenButton,
                      styles.otpButton,
                    ]}
                    onPress={() => {
                      setIsOtpClicked(true);
                    }}>
                    <Text style={Styles.greenButtonText}>Get OTP</Text>
                  </TouchableOpacity>
                </SafeAreaView>

                <Text style={styles.disclaimer}>
                  By clicking, I accept the{' '}
                  <Text
                    style={styles.termsConditions}
                    onPress={() => Linking.openURL('https://www.google.com/')}>
                    terms & conditions
                  </Text>
                </Text>
              </View>
            )}
            {isOtpClicked && (
              <View>
                <Text style={styles.titleText}>
                  Verify with OTP sent to {phoneNumber}
                </Text>
                <OTPTextView
                  autoFocus
                  inputCount={6}
                  containerStyle={styles.otpContainer}
                  textInputStyle={styles.otpTextInput}
                  handleTextChange={setOtpInput}
                />
                <TouchableOpacity
                  disabled={otpInput.length < 6}
                  style={[
                    otpInput.length < 6 ? Styles.Disabled : {},
                    Styles.greenButton,
                    styles.otpButton,
                  ]}
                  onPress={() => {
                    navigation.navigate(NAVIGATION.HOME_LAYOUT);
                  }}>
                  <Text style={Styles.greenButtonText}>Continue</Text>
                </TouchableOpacity>
                {!isRetryClicked && !showRetryOption && (
                  <Text style={styles.disclaimer}>
                    Didn't receive it? Retry in{' '}
                    <Counter onTimeout={() => setShowRetryOption(true)} />
                  </Text>
                )}
                {isRetryClicked && (
                  <>
                    <Text style={styles.disclaimer}>
                      OTP has been sent by SMS.
                    </Text>
                    {disableRetryOption && (
                      <Text style={styles.disclaimer}>
                        Retry in{' '}
                        <Counter
                          onTimeout={() => {
                            setDisableRetryOption(false);
                          }}
                        />
                      </Text>
                    )}
                  </>
                )}
                {showRetryOption && (
                  <View>
                    {!disableRetryOption && (
                      <Text style={styles.disclaimer}>Retry via:</Text>
                    )}
                    <TouchableOpacity
                      disabled={disableRetryOption}
                      style={[
                        styles.smsButton,
                        disableRetryOption ? Styles.Disabled : {},
                      ]}
                      onPress={() => {
                        setIsRetryClicked(true);
                        setDisableRetryOption(true);
                      }}>
                      <FontAwesome6
                        name={'message'}
                        size={20}
                        color={Colors.green}
                      />
                      <Text style={styles.smsButtonText}>SMS</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
          </View>
        </ScrollView>
      </GradientBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  logoText: {
    color: Colors.green,
    fontFamily: 'Bayon',
    fontSize: 40,
    fontWeight: '700',
    marginVertical: 20,
  },
  titleText: {
    color: Colors.titleText1,
    fontFamily: 'Oxygen',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  textInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagButton: {
    borderRightColor: Colors.borderColor,
    borderRightWidth: 2,
  },
  phoneInputContainer: {
    width: '100%',
    height: 52,
    borderRadius: 8,
    borderColor: Colors.borderColor,
    borderWidth: 2,
    backgroundColor: Colors.white,
    marginBottom: 20,
  },
  phoneTextContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 0,
  },
  phoneTextInput: {
    backgroundColor: Colors.white,
  },
  otpButton: {
    marginBottom: 20,
    width: '100%',
  },
  disclaimer: {
    fontFamily: 'Oxygen',
    fontSize: 14,
    color: Colors.contentText,
    marginBottom: 10,
  },
  termsConditions: {
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  otpContainer: {
    marginBottom: 20,
    width: '100%',
  },
  otpTextInput: {
    borderRadius: 8,
    borderWidth: 2,
    borderBottomWidth: 2,
    width: '13%',
  },
  smsButton: {
    padding: 8,
    color: Colors.green,
    backgroundColor: Colors.lightGreen,
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: Colors.green,
    borderWidth: 0.5,
    width: 80,
  },
  smsButtonText: {
    marginLeft: 12,
    color: Colors.green,
    fontFamily: 'Oxygen',
    fontWeight: '700',
  },
});

export default LoginScreen;
