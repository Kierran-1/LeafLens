
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/HomeStyles';
import theme from '../theme';


export default function Home({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('All');

  // Sample data for plant identifications
  const plantData = [
    {
      id: 1,
      commonName: 'Common Name',
      scientificName: 'Scientific Name',
      date: '19/09/2025',
      image: 'https://images.unsplash.com/photo-1563789031959-4c02a832607e?w=150&h=150&fit=crop',
    },
    {
      id: 2,
      commonName: 'Common Name',
      scientificName: 'Scientific Name',
      date: '19/09/2025',
      image: 'https://images.unsplash.com/photo-1563789031959-4c02a832607e?w=150&h=150&fit=crop',
    },
    {
      id: 3,
      commonName: 'Common Name',
      scientificName: 'Scientific Name',
      date: '19/09/2025',
      image: 'https://images.unsplash.com/photo-1563789031959-4c02a832607e?w=150&h=150&fit=crop',
    },
  ];

  const tabs = ['All', 'Identified', 'Unidentified'];

  const TabButton = ({ title, isSelected, onPress }) => (
    <TouchableOpacity
      style={[
        styles.tabButton,
        isSelected ? styles.tabButtonActive : styles.tabButtonInactive,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.tabButtonText,
          isSelected ? styles.tabButtonTextActive : styles.tabButtonTextInactive,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const PlantCard = ({ plant }) => (
    <View style={styles.plantCard}>
      <Image source={{ uri: plant.image }} style={styles.plantImage} />
      <View style={styles.plantInfo}>
        <Text style={styles.commonName}>{plant.commonName}</Text>
        <Text style={styles.scientificName}>{plant.scientificName}</Text>
        <Text style={styles.date}>{plant.date}</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Ionicons name="add" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={50} color="#22c55e" />
          </View>
          <Text style={theme.typography.font}>LeafLens</Text>
        </View>
        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person-circle-outline" size={28} color="#22c55e" />
        </TouchableOpacity>
      </View>

      {/* Welcome Banner */}
      <View style={styles.welcomeBanner}>
        <Text style={styles.welcomeTitle}>Hi, User!</Text>
        <Text style={styles.welcomeSubtitle}>
          Help identify and protect Sarawak's biodiversitys.
        </Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            title={tab}
            isSelected={selectedTab === tab}
            onPress={() => setSelectedTab(tab)}
          />
        ))}
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Plant List */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {plantData.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
