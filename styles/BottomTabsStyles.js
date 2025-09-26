// BottomTabsStyles.js
import { StyleSheet } from "react-native";
import theme from '../theme';

export default StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.primary,
    height: 65,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    paddingTop: 6,
  },
  scanWrapper: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
  },
  scanButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  
});