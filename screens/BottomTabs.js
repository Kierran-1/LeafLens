// BottomTabs.js
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Import screens from the same directory
import Home from "./Home";
import Search from "./Search";
import Scan from "./Scan";
import Dashboard from "./Dashboard";
import Profile from "./Profile";


// Import styles
import styles from "../styles/BottomTabsStyles";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
  
      
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity {...props} style={styles.scanWrapper}>
              <View style={styles.scanButton}>
                <Ionicons name="scan-outline" size={28} color="#22c55e" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="albums-outline" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />

        
    </Tab.Navigator>
  );
}