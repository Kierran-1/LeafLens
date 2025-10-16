/*
  TODO: Signup and Login using same container elements: causing it to carry over data from Sign Up to login and vice versa.
*/

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/LeafLensLoginStyles';
import theme from '../theme';

export default function LeafLensLogin({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); // Track login or signup states
  const [isPublicUser, setisPublicUser] = useState(null);
  const IP_Add = "192.168.1.5";
  const PORT = 3000;

  const HandleSignUp = async () => {//Sign Up handler.
    try {
      const response = await fetch(`http://${IP_Add}:${PORT}/register`, { 
        /*
          IMPORTANT : Remember to change the const for IP_ADD to your current IP Address and also to node database_connection.js to start the backend server.
        */
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password }), // Data types that will be inserted into the table from front end
      });
      Alert.alert("Success", response.data);
      navigation.navigate('Login');
    } catch (error){
      Alert.alert("Error", error.response?.data || "Something went wrong.");
    }
  }

  const HandleLogin = async () => {
    console.log("Login button pressed");
    console.log("Attempting to connect to:", `http://${IP_Add}:${PORT}/login`);
    console.log("Email:", email);
    console.log("Password length:", password.length);
    
    try{

      const response = await fetch(`http://${IP_Add}:${PORT}/login` , {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const message = await response.text();
        console.log("Error message:", message);
        Alert.alert("Login Failed", message || "Invalid Credentials.");
        return;
      }

      const data = await response.json();
      console.log("Login response:", data);
      
      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      console.log("User:", data.user.username);
      const { username, userRole } = data.user;

      Alert.alert("Login Success", `Welcome, ${data.user.username}!`);
      console.log("User Role:", userRole);

      // Navigate based on user role
      if (userRole === "Super Admin" || userRole === "Park Admin" || userRole === "Moderator Admin") {
        navigation.replace("AdminDashboard");
      } else {
        navigation.replace("Home");
      }

    } catch (error) {
      console.log("Catch error:", error);
      Alert.alert("Error", `Unable to login: ${error.message}`);
      console.error("Login Error", error);
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />

      {/* Header Section - Green Background */}
      <View style={styles.header}>
        <View style={styles.brandContainer}>
          <View style={styles.logoIcon}>
            <Ionicons name="leaf" size={24} color="white" />
          </View>
          <Text style={styles.brandText}>LeafLens</Text>
        </View>

        <Text style={styles.titleText}>Get Started now</Text>
        <Text style={styles.subtitleText}>
          Create an account or log in to explore about our app
        </Text>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView 
          style={styles.scrollContainer} 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* White Card Container */}
          <View style={styles.cardContainer}>
            {/* Tab Section */}
            <View style={styles.tabRow}>
              <TouchableOpacity
                onPress={() => setActiveTab('login')}
                style={[
                  styles.tab,
                  activeTab === 'login' && styles.activeTab
                ]}
              >
                <Text style={[
                  styles.tabText,
                  activeTab === 'login' && styles.activeTabText
                ]}>
                  Log In
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => setActiveTab('signup')}
                style={[
                  styles.tab,
                  activeTab === 'signup' && styles.activeTab
                ]}
              >
                <Text style={[
                  styles.tabText,
                  activeTab === 'signup' && styles.activeTabText
                ]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Form Section */}
            <View style={styles.formContainer}>
              
              {/* Username Input - Only for Sign Up */}
              {activeTab === "signup" && (
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Username</Text>
                  <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Enter your Username"
                    autoCapitalize="none"
                    style={styles.textInput}
                    placeholderTextColor="#999"
                  />
                </View>
              )}

              {/* Email Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Loisbecket@gmail.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.textInput}
                  placeholderTextColor="#999"
                />
              </View>

              {/* Password Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="••••••••"
                    secureTextEntry={!showPassword}
                    style={styles.passwordInput}
                    placeholderTextColor="#999"
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <Ionicons
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color="#999"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Remember Me & Forgot Password */}
              <View style={styles.optionsRow}>
                <TouchableOpacity
                  onPress={() => setRememberMe(!rememberMe)}
                  style={styles.rememberContainer}
                >
                  <View style={[
                    styles.checkbox,
                    rememberMe && styles.checkboxActive
                  ]}>
                    {rememberMe && (
                      <Ionicons name="checkmark" size={14} color="white" />
                    )}
                  </View>
                  <Text style={styles.rememberText}>Remember me</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>
              </View>

              {/* Login/Sign Up Button */}
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => { 
                  if(activeTab === "signup"){
                    HandleSignUp();
                  } else{
                    HandleLogin();
                  }
                }}
              >
                <Text style={styles.actionButtonText}>
                  {activeTab === 'login' ? 'Log In' : 'Sign Up'}
                </Text>
              </TouchableOpacity>

              {/* Divider */}
              <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>Or</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Social Login Buttons */}
              <TouchableOpacity style={styles.socialButton}>
                <View style={styles.googleIconContainer}>
                  <Text style={styles.googleIcon}>G</Text>
                </View>
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <View style={styles.facebookIconContainer}>
                  <Ionicons name="logo-facebook" size={20} color="#1877F2" />
                </View>
                <Text style={styles.socialButtonText}>Continue with Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
