import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import IntroPager from './IntroPager';
import Carousel from 'react-native-snap-carousel';
import Styles, {Fonts} from '../../Styles';
import Colors from '../../Colors';
import {NAVIGATION} from '../../Constants';
import {INTRO_SLIDES} from './Constants';

const {width: sliderWidth} = Dimensions.get('window');

const renderCarouselItem = ({item}: any): JSX.Element => {
  return (
    <View style={[Styles.fullScreen, Styles.container]}>
      <View style={[styles.introImageContainer, Styles.container]}>
        <Image style={styles.doctorImage} source={item.image} />
      </View>
      <View style={styles.introContentContainer}>
        <Text style={styles.introHeader}>{item.title}</Text>
        <Text style={[Fonts().istokWeb, styles.introContent]}>
          {item.content}
        </Text>
      </View>
    </View>
  );
};

const IntroScreen = ({navigation}: any): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={[Styles.container, Styles.fullScreen]}>
      <ImageBackground
        resizeMode={'cover'}
        style={Styles.fullScreen}
        source={require('../../assets/images/intro-screen/background.png')}>
        <View style={styles.introCardContainer}>
          <View style={[Styles.container, styles.introCard]}>
            <View style={styles.pager}>
              <IntroPager activeIndex={activeIndex} />
            </View>
          </View>
        </View>
        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth}
          data={INTRO_SLIDES}
          renderItem={renderCarouselItem}
          autoplay={true}
          autoplayDelay={0}
          autoplayInterval={4000}
          loop={true}
          onSnapToItem={index => setActiveIndex(index)}
        />
        <TouchableOpacity
          style={[Styles.greenButton, styles.startButton]}
          onPress={() => {
            navigation.navigate(NAVIGATION.LOGIN_SCREEN);
          }}>
          <Text style={Styles.greenButtonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  introImageContainer: {
    position: 'absolute',
    bottom: 165,
  },
  introContentContainer: {
    position: 'absolute',
    bottom: 25,
  },
  doctorImage: {
    flex: 1,
    width: sliderWidth,
    height: 375,
    resizeMode: 'contain',
  },
  introCardContainer: {
    height: 250,
    width: '100%',
    zIndex: 0,
    bottom: 0,
    position: 'absolute',
  },
  introCard: {
    backgroundColor: Colors.white,
    borderTopColor: Colors.black,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: 32,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: -15,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    width: '100%',
    height: 240,
  },
  pager: {
    height: 6,
    marginTop: 32,
    marginBottom: 215,
  },
  introHeader: {
    color: Colors.titleText,
    fontFamily: 'Commissioner',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  introContent: {
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 'auto',
    textAlign: 'center',
    width: 274,
  },
  startButton: {
    marginBottom: 32,
  },
});

export default IntroScreen;
