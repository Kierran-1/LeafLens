import { StyleSheet } from 'react-native';

const colors = {
  primary: '#53B175',   // Main brand color
  text: '#000000ff',      
  background: '#ffffff',
  gray: '#E9E9EA',
};

const typography = StyleSheet.create({
  heading1: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 30,
    lineHeight: 36,
    color: colors.text,
  },
  heading2: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    lineHeight: 30,
    color: colors.text,
  },
  body: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: colors.text,
  },
});

export default {
  colors,
  typography,
};
