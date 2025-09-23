import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import "./../../global.css";

const LeafLensLogin = () => {
  const [email, setEmail] = useState('Loisbecket@gmail.com');
  const [password, setPassword] = useState('*******');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="#4ade80" barStyle="light-content" />
      
      {/* Header Section */}
      <View className="bg-green-400 px-6 pt-8 pb-12 rounded-b-3xl">
        <View className="flex-row items-center mb-8">
          <View className="bg-white/20 w-8 h-8 rounded-lg mr-3 items-center justify-center">
            <Ionicons name="leaf" size={20} color="white" />
          </View>
          <Text className="text-white text-2xl font-bold">LeafLens</Text>
        </View>
        
        <Text className="text-white text-3xl font-bold mb-2">
          Get Started now
        </Text>
        <Text className="text-white/80 text-base">
          Create an account or log in to explore about our app
        </Text>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView className="flex-1 px-6 -mt-6">
          {/* Tab Section */}
          <View className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden">
            <View className="flex-row bg-gray-50">
              <TouchableOpacity
                onPress={() => setActiveTab('login')}
                className={`flex-1 py-4 items-center ${
                  activeTab === 'login' 
                    ? 'bg-white border-b-2 border-green-400' 
                    : ''
                }`}
              >
                <Text className={`font-semibold ${
                  activeTab === 'login' ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  Log In
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => setActiveTab('signup')}
                className={`flex-1 py-4 items-center ${
                  activeTab === 'signup' 
                    ? 'bg-white border-b-2 border-green-400' 
                    : ''
                }`}
              >
                <Text className={`font-semibold ${
                  activeTab === 'signup' ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Form Section */}
            <View className="p-6">
              {/* Email Input */}
              <View className="mb-4">
                <Text className="text-gray-600 text-sm mb-2">Email</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="bg-gray-50 px-4 py-4 rounded-xl text-gray-900 text-base"
                />
              </View>

              {/* Password Input */}
              <View className="mb-4">
                <Text className="text-gray-600 text-sm mb-2">Password</Text>
                <View className="relative">
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    className="bg-gray-50 px-4 py-4 pr-12 rounded-xl text-gray-900 text-base"
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4"
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
              <View className="flex-row items-center justify-between mb-6">
                <TouchableOpacity
                  onPress={() => setRememberMe(!rememberMe)}
                  className="flex-row items-center"
                >
                  <View className={`w-5 h-5 border-2 rounded mr-2 items-center justify-center ${
                    rememberMe ? 'bg-green-400 border-green-400' : 'border-gray-300'
                  }`}>
                    {rememberMe && (
                      <Ionicons name="checkmark" size={12} color="white" />
                    )}
                  </View>
                  <Text className="text-gray-600 text-sm">Remember me</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <Text className="text-blue-500 text-sm">Forgot Password ?</Text>
                </TouchableOpacity>
              </View>

              {/* Login Button */}
              <TouchableOpacity className="bg-green-400 py-4 rounded-xl mb-4">
                <Text className="text-white text-center font-semibold text-base">
                  Log In
                </Text>
              </TouchableOpacity>

              {/* Divider */}
              <View className="items-center mb-4">
                <Text className="text-gray-400 text-sm">Or</Text>
              </View>

              {/* Social Login Buttons */}
              <TouchableOpacity className="flex-row items-center justify-center bg-white border border-gray-200 py-4 rounded-xl mb-3 shadow-sm">
                <Text className="text-red-500 text-lg mr-2">G</Text>
                <Text className="text-gray-700 font-medium">Continue with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center justify-center bg-white border border-gray-200 py-4 rounded-xl shadow-sm">
                <Text className="text-blue-600 text-lg mr-2">f</Text>
                <Text className="text-gray-700 font-medium">Continue with Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom indicator */}
          <View className="items-center mb-8">
            <View className="w-32 h-1 bg-gray-800 rounded-full" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LeafLensLogin;