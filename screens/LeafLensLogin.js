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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'; // ✅ SafeAreaView from safe-area-context
import styles from '../styles/LeafLensLoginStyles';
import theme from '../theme';

export default function LeafLensLogin() {
  const [email, setEmail] = useState('Loisbecket@gmail.com');
  const [password, setPassword] = useState('*******');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

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

              {/* Login Button */}
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Log In</Text>
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
