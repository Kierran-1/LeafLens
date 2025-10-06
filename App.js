// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LeafLensLogin from './screens/LeafLensLogin';
// import AppProvider from './providers/AppProvider';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <AppProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Login">
//           <Stack.Screen
//             name="Login"
//             component={LeafLensLogin}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AppProvider>
//   );
// }

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import BottomTabs from "./BottomTabs";
// import LeafLensLogin from "./LeafLensLogin";



// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {/* First screen: Login */}
//         <Stack.Screen name="Login" component={LeafLensLogin} />

//         {/* After login: go to bottom tabs */}
//         <Stack.Screen name="MainApp" component={BottomTabs} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeafLensLogin from "./screens/LeafLensLogin";
import BottomTabs from "./screens/BottomTabs"; // or BottomTabs if that's your main app
import GetStarted from "./screens/GetStarted";
import AppProvider from "./providers/AppProvider";
import * as NavigationBar from 'expo-navigation-bar'; // navigation bar hidden component
import { StatusBar } from "react-native"; // status bar hidden component
import EditProfile from "./screens/EditProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  // adding useEffect function to achieve the hidden of navigation bar and hidden component 
  useEffect(() => {
    StatusBar.setHidden(false);
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.setBehaviorAsync("overlay-swipe");
  }, []);

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Login" component={LeafLensLogin} />
          <Stack.Screen name="Home" component={BottomTabs} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
