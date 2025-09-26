// theme.js
const colors = {
  primary: '#22c55e',   // Main brand color
  text: '#000000',
  background: '#ffffff',
  gray: '#E9E9EA',
};

const typography = {
  font:{
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#22c55e',
  },
  heading1: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 30,
    lineHeight: 36,
    color: colors.text,
  },
  heading2: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 24,
    lineHeight: 30,
    color: colors.text,
  },
  body: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 12,
    lineHeight: 18,
    color: colors.text,
  },
};

export default { colors, typography };
