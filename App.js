import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeafLensLogin from "./screens/LeafLensLogin";
import BottomTabs from "./screens/BottomTabs";
import GetStarted from "./screens/GetStarted";
import AppProvider from "./providers/AppProvider";
import EditProfile from "./screens/EditProfile";
import AdminDashboard from "./screens/AdminDashboard";
import UserManagement from "./screens/UserManagement";

import { AppState, Platform } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    // Only hide navigation bar on Android
    if (Platform.OS === 'android') {
      const hideNavigationBar = async () => {
        try {
          await NavigationBar.setVisibilityAsync("hidden");
          await NavigationBar.setBehaviorAsync("overlay-swipe");
        } catch (error) {
          console.log("Navigation bar error:", error);
        }
      };

      hideNavigationBar();

      const refocus = AppState.addEventListener("change", (state) => {
        if(state === "active"){
          hideNavigationBar();
        }
      });
      
      return () => refocus.remove();
    }
  }, []);

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Login" component={LeafLensLogin} />
          <Stack.Screen name="Home" component={BottomTabs} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
          <Stack.Screen name="UserManagement" component={UserManagement} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
