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
import styles from '../styles/LeafLensLoginStyles';
import theme from '../theme';

export default function LeafLensLogin({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); // Track login or signup states
  const IP_Add = "192.168.0.215";
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
    try{
      const response = await fetch(`http://${IP_Add}:${PORT}/login` , {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        const messgae = await response.text();
        Alert.alert("Login Failed", message || "Invalid Credentials.");
        return;
      }

      const data = await response.json();
      console.log("User:", data.user.username);

      Alert.alert("Login Success", `Welcome, ${data.user.username}!`);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Error", "Unable to login. Please try again later.");
      console.error("Login Error", error);
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
      <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.brandContainer}>
          <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={20} color="white" />
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
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
          {/* Tab Section */}
          <View style={styles.tabContainer}>
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
              
              {/* Username Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Enter your Username"
                  autoCapitalize="none"
                  style={styles.textInput}
                />
              </View>

              {/* Email Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.textInput}
                />
              </View>

              {/* Password Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    style={styles.passwordInput}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <Ionicons
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color="#6b7280"
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
                      <Ionicons name="checkmark" size={12} color="white" />
                    )}
                  </View>
                  <Text style={styles.rememberText}>Remember me</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>
              </View>

              {/* Login Button - text changes based on activeTab */}
              <TouchableOpacity 
                style={styles.loginButton}
                onPress={() => { 
                  if(activeTab === "signup"){
                    HandleSignUp();
                  } else{
                    HandleLogin();
                  }
                }}
              >
                <Text style={styles.loginButtonText}>
                  {activeTab === 'login' ? 'Log In' : 'Sign Up'}
                </Text>
              </TouchableOpacity>

              {/* Divider */}
              <View style={styles.dividerContainer}>
                <Text style={styles.dividerText}>Or</Text>
              </View>

              {/* Social Login Buttons */}
              <TouchableOpacity style={styles.socialButton}>
                <View style={styles.googleIcon}>
                  <Text style={styles.googleText}>G</Text>
                </View>
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <View style={styles.facebookIcon}>
                  <Text style={styles.facebookText}>f</Text>
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