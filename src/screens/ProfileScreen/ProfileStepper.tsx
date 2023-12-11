import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  SafeAreaView,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Styles, {Fonts} from '../../Styles';
import Colors from '../../Colors';

const ProfileStepper = ({category, data, onClose}: any): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Modal presentationStyle="pageSheet">
      <View style={styles.header}>
        <View style={[Styles.row, Styles.container, styles.justifyStart]}>
          <FontAwesome6
            onPress={onClose}
            solid
            name={'xmark'}
            size={20}
            color={Colors.white}
          />
          <Text style={styles.text}>{category}</Text>
        </View>
        <View style={[Styles.row, styles.justifyEnd]}>
          {selectedIndex > 0 && (
            <TouchableOpacity
              onPress={() => setSelectedIndex(selectedIndex - 1)}>
              <Text style={styles.text}>BACK</Text>
            </TouchableOpacity>
          )}
          {selectedIndex < data.length - 1 && (
            <TouchableOpacity
              onPress={() => setSelectedIndex(selectedIndex + 1)}>
              <Text style={styles.text}>NEXT</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <Text style={styles.question}>{data[selectedIndex].question}</Text>
          <SafeAreaView>
            <View>{data[selectedIndex].component}</View>
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    ...Styles.row,
    ...Styles.container,
    flex: 0,
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: Colors.greenHeader,
  },
  text: {
    marginStart: 16,
    ...Fonts({fontWeight: '700', color: Colors.white}).istokWeb,
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  body: {
    height: '100%',
    backgroundColor: Colors.greenBody,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  question: {
    marginBottom: 24,
    ...Fonts({fontSize: 24, fontWeight: '700', color: Colors.white}).istokWeb,
  },
});

export default ProfileStepper;
