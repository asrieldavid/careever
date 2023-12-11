import {StyleSheet} from 'react-native';
import Colors from './Colors';

export const Fonts = (props: any = {}) =>
  StyleSheet.create({
    istokWeb: {
      color: Colors.contentText,
      fontFamily: 'Istok Web',
      ...props,
    },
    commissioner: {
      color: Colors.contentText,
      fontFamily: 'Commissioner',
      ...props,
    },
  });

const Styles = StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  textCenter: {
    textAlign: 'center',
  },
  greenButton: {
    backgroundColor: Colors.green,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 52,
    width: 206,
    zIndex: 1,
  },
  Disabled: {
    opacity: 0.5,
  },
  greenButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Commissioner',
    fontSize: 20,
    fontWeight: '700',
  },
  greenText: {
    color: Colors.green,
    fontFamily: 'Oxygen',
    fontSize: 16,
    fontWeight: '400',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  boxShadow: {
    shadowColor: Colors.boxShadow,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
});

export default Styles;
