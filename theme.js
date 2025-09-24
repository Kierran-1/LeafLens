// theme.js
const colors = {
  primary: '#53B175',   // Main brand color
  text: '#000000',
  background: '#ffffff',
  gray: '#E9E9EA',
};

const typography = {
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
