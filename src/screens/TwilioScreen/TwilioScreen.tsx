import React, {useState, useRef, useEffect} from 'react';
import {sortBy} from 'lodash';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  TwilioVideoLocalView,
  TwilioVideoParticipantView,
  TwilioVideo,
} from 'react-native-twilio-video-webrtc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import HomeLayout from '../../HomeLayout';
import BookAppointments from './BookAppointments';
import Colors from '../../Colors';
import Styles, {Fonts} from '../../Styles';
import moment from 'moment';

const TwilioScreen = ({navigation}: any) => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isSharing, setIsSharing] = useState(false);
  const [status, setStatus] = useState('disconnected');
  const [videoTracks, setVideoTracks] = useState(new Map());
  const [token, setToken] = useState('');
  const twilioVideo = useRef<any>(null);
  const isFocused = useIsFocused();
  const [appointmentsToday, setAppointmentsToday] = useState<any>([]);

  useEffect(() => {
    if (isFocused) {
      AsyncStorage.getItem('careever_appointments').then(
        (appointmentList: any) => {
          if (appointmentList) {
            setAppointmentsToday(
              sortBy(JSON.parse(appointmentList), ['date', 'time', 'month']),
            );
          }
        },
      );
    }
  }, [isFocused]);

  if (!appointmentsToday.length) {
    return <BookAppointments navigation={navigation} />;
  }

  const _onConnectButtonPress = async () => {
    if (Platform.OS === 'android') {
      await _requestAudioPermission();
      await _requestCameraPermission();
    }
    twilioVideo.current &&
      twilioVideo.current.connect({
        accessToken: token,
        enableNetworkQualityReporting: true,
        dominantSpeakerEnabled: true,
      });
    setStatus('connecting');
  };

  const _onEndButtonPress = () => {
    twilioVideo.current.disconnect();
  };

  const _onMuteButtonPress = () => {
    twilioVideo.current
      .setLocalAudioEnabled(!isAudioEnabled)
      .then((isEnabled: boolean) => setIsAudioEnabled(isEnabled));
  };

  const _onShareButtonPressed = () => {
    twilioVideo.current.toggleScreenSharing(!isSharing);
    setIsSharing(!isSharing);
  };

  const _onFlipButtonPress = () => {
    twilioVideo.current.flipCamera();
  };

  const _onRoomDidConnect = () => {
    setStatus('connected');
  };

  const _onRoomDidDisconnect = ({error}: any) => {
    console.log('ERROR: ', error);

    setStatus('disconnected');
  };

  const _onRoomDidFailToConnect = (error: any) => {
    console.log('ERROR: ', error);

    setStatus('disconnected');
  };

  const _onParticipantAddedVideoTrack = ({participant, track}: any) => {
    console.log('onParticipantAddedVideoTrack: ', participant, track);

    setVideoTracks(originalVideoTracks => {
      originalVideoTracks.set(track.trackSid, {
        participantSid: participant.sid,
        videoTrackSid: track.trackSid,
      });
      return new Map(originalVideoTracks);
    });
  };

  const _onParticipantRemovedVideoTrack = ({participant, track}: any) => {
    console.log('onParticipantRemovedVideoTrack: ', participant, track);

    setVideoTracks(originalVideoTracks => {
      originalVideoTracks.delete(track.trackSid);
      return new Map(originalVideoTracks);
    });
  };

  const _onNetworkLevelChanged = ({participant, isLocalUser, quality}: any) => {
    console.log(
      'Participant',
      participant,
      'isLocalUser',
      isLocalUser,
      'quality',
      quality,
    );
  };

  const _onDominantSpeakerDidChange = ({
    roomName,
    roomSid,
    participant,
  }: any) => {
    console.log(
      'onDominantSpeakerDidChange',
      `roomName: ${roomName}`,
      `roomSid: ${roomSid}`,
      'participant:',
      participant,
    );
  };

  const _requestAudioPermission = () => {
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Need permission to access microphone',
        message:
          'To run this demo we need permission to access your microphone',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  };

  const _requestCameraPermission = () => {
    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: 'Need permission to access camera',
      message: 'To run this demo we need permission to access your camera',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });
  };

  return (
    <HomeLayout disablePadding={true} showHeader={false}>
      <View style={[Styles.container, Styles.fullScreen, styles.container]}>
        {status === 'disconnected' && (
          <View style={{width: '100%'}}>
            <Text style={styles.welcome}>Twilio Video Appointment</Text>
            <TextInput
              value={token}
              autoCapitalize="none"
              style={styles.input}
              onChangeText={text => setToken(text)}
              placeholder="Token"
              placeholderTextColor={Colors.placeHolderText1}
            />
            <TouchableOpacity
              style={[Styles.greenButton, styles.connect]}
              onPress={_onConnectButtonPress}>
              <Text style={Styles.greenButtonText}>Connect</Text>
            </TouchableOpacity>
          </View>
        )}

        {(status === 'connected' || status === 'connecting') && (
          <View style={styles.callContainer}>
            {status === 'connected' && (
              <View style={styles.remoteGrid}>
                {Array.from(videoTracks, ([trackSid, trackIdentifier]) => {
                  return (
                    <TwilioVideoParticipantView
                      style={styles.remoteVideo}
                      key={trackSid}
                      trackIdentifier={trackIdentifier}
                    />
                  );
                })}
              </View>
            )}
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={_onEndButtonPress}>
                <Text style={{fontSize: 12}}>End</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={_onMuteButtonPress}>
                <Text style={{fontSize: 12}}>
                  {isAudioEnabled ? 'Mute' : 'Unmute'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={_onFlipButtonPress}>
                <Text style={{fontSize: 12}}>Flip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={_onShareButtonPressed}>
                <Text style={{fontSize: 12}}>
                  {isSharing ? 'Stop Sharing' : 'Start Sharing'}
                </Text>
              </TouchableOpacity>
              <TwilioVideoLocalView enabled={true} style={styles.localVideo} />
            </View>
          </View>
        )}

        <TwilioVideo
          ref={twilioVideo}
          onRoomDidConnect={_onRoomDidConnect}
          onRoomDidDisconnect={_onRoomDidDisconnect}
          onRoomDidFailToConnect={_onRoomDidFailToConnect}
          onParticipantAddedVideoTrack={_onParticipantAddedVideoTrack}
          onParticipantRemovedVideoTrack={_onParticipantRemovedVideoTrack}
          onNetworkQualityLevelsChanged={_onNetworkLevelChanged}
          onDominantSpeakerDidChange={_onDominantSpeakerDidChange}
        />
      </View>
    </HomeLayout>
  );
};

AppRegistry.registerComponent('TwilioScreen', () => TwilioScreen);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  connect: {
    width: '100%',
  },
  callContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 40,
    marginBottom: 16,
    ...Fonts().istokWeb,
  },
  input: {
    height: 48,
    padding: 16,
    width: '100%',
    borderRadius: 8,
    fontSize: 16,
    borderColor: Colors.greenBorder1,
    borderWidth: 2,
    color: Colors.contentText,
    marginBottom: 16,
    backgroundColor: Colors.white,
  },
  button: {
    marginTop: 100,
  },
  localVideo: {
    flex: 1,
    width: 150,
    height: 250,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  remoteGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  remoteVideo: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: 100,
    height: 120,
  },
  optionsContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 100,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionButton: {
    width: 60,
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100 / 2,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TwilioScreen;
