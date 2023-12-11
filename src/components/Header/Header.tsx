import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Colors from '../../Colors';
import BackButton from '../BackButton/BackButton';
import {getGreetings} from '../../Constants';
import Styles, {Fonts} from '../../Styles';

const Header = ({isMainScreen, isHomeScreen, navigation}: any) => {
  const headerStyle = styles(isMainScreen);
  return (
    <View style={headerStyle.headerContainer}>
      <View style={headerStyle.header}>
        {isMainScreen && isHomeScreen && (
          <>
            <View
              style={[Styles.container, Styles.row, headerStyle.userDetails]}>
              <View>
                <Text style={headerStyle.greetings}>{getGreetings()}</Text>
                <Text style={headerStyle.userName}>Andrew</Text>
              </View>
              <View
                style={[
                  Styles.container,
                  Styles.row,
                  headerStyle.profileContainer,
                ]}>
                <View style={headerStyle.notification}>
                  <FontAwesome6 name={'bell'} size={24} color={Colors.gray} />
                </View>
                <Image
                  source={require('../../assets/images/header/user-profile.png')}
                />
              </View>
            </View>
            <View
              style={[Styles.container, Styles.row, headerStyle.searchSection]}>
              <TextInput
                style={headerStyle.searchInput}
                placeholder="Search doctors, hospitals, medication"
                placeholderTextColor={Colors.placeHolderText1}
              />
              <TouchableOpacity style={headerStyle.searchIcon}>
                <FontAwesome6
                  name={'magnifying-glass'}
                  size={24}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
        {!isMainScreen && <BackButton navigation={navigation} />}
      </View>
    </View>
  );
};

const styles = (isMainScreen?: boolean) =>
  StyleSheet.create({
    headerContainer: {
      height: isMainScreen ? 180 : 80,
      width: '100%',
      overflow: 'hidden',
    },
    header: {
      alignContent: 'center',
      backgroundColor: Colors.white,
      borderBottomColor: Colors.black,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderRadius: 32,
      shadowColor: Colors.black,
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 5,
      height: isMainScreen ? 170 : 70,
      padding: 24,
    },
    greetings: {
      ...Fonts().istokWeb,
      fontSize: 14,
    },
    userDetails: {
      width: '100%',
      textAlign: 'auto',
      marginBottom: 16,
    },
    userName: {
      ...Fonts({fontSize: 24, fontWeight: '700', color: Colors.black1})
        .commissioner,
    },
    profileContainer: {
      justifyContent: 'flex-end',
    },
    notification: {
      marginEnd: 24,
    },
    searchSection: {},
    searchIcon: {
      padding: 10,
      paddingTop: 12,
      backgroundColor: Colors.green,
      position: 'absolute',
      end: 1,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      height: 48,
    },
    searchInput: {
      height: 48,
      padding: 16,
      width: '100%',
      borderRadius: 8,
      borderColor: Colors.greenBorder1,
      borderWidth: 2,
      color: Colors.contentText,
    },
  });
export default Header;
