// Profile.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../theme';
import EditProfile from './EditProfile'; // ADD THIS LINE

export default function Profile({ navigation }) {
  const [showEditProfile, setShowEditProfile] = React.useState(false); // ADD THIS LINE

  // ADD THIS CHECK
  if (showEditProfile) {
    return <EditProfile navigation={navigation} onBack={() => setShowEditProfile(false)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => setShowEditProfile(true)} // CHANGE THIS
        >
          <Text style={styles.headerButtonText}>Settings</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => {/* Handle logout */}}
        >
          <Text style={styles.headerButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Picture Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' }}
            style={styles.profileImage}
          />
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => setShowEditProfile(true)} // CHANGE THIS
          >
            <Ionicons name="pencil" size={16} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* User Info */}
      <View style={styles.userInfoSection}>
        <Text style={styles.userName}>Dr House</Text>
        <Text style={styles.userBio}>Do you have hair in your special place</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}>
          <Text style={[styles.tabText, styles.tabTextActive]}>Photos</Text>
        </TouchableOpacity>
      </View>

      {/* Photos Placeholder */}
      <View style={styles.photosContainer}>
        <View style={styles.photoPlaceholder}>
          <Ionicons name="image-outline" size={60} color="#D1D1D6" />
          <Ionicons name="settings-outline" size={40} color="#D1D1D6" style={styles.gearIcon} />
          <Ionicons name="albums-outline" size={40} color="#D1D1D6" style={styles.albumIcon} />
        </View>
        <Text style={styles.placeholderText}>Header</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerButton: {
    padding: 4,
  },
  headerButtonText: {
    ...theme.typography.body,
    color: '#ffffff',
    fontSize: 14,
  },
  headerTitle: {
    ...theme.typography.heading2,
    color: '#ffffff',
    fontSize: 20,
  },
  profileSection: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingBottom: 50,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#ffffff',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  userInfoSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  userName: {
    ...theme.typography.heading1,
    fontSize: 24,
    marginBottom: 4,
  },
  userBio: {
    ...theme.typography.body,
    fontSize: 12,
    color: '#666',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
  },
  tabText: {
    ...theme.typography.body,
    fontSize: 14,
    color: '#666',
  },
  tabTextActive: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  photosContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  photoPlaceholder: {
    width: 200,
    height: 150,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  gearIcon: {
    position: 'absolute',
    bottom: 20,
    left: 30,
  },
  albumIcon: {
    position: 'absolute',
    bottom: 20,
    right: 30,
  },
  placeholderText: {
    ...theme.typography.body,
    fontSize: 14,
    color: '#666',
    marginTop: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  navButtonCenter: {
    flex: 1,
    alignItems: 'center',
    marginTop: -20,
  },
  centerButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  navButtonText: {
    ...theme.typography.body,
    fontSize: 10,
    color: '#666',
    marginTop: 4,
  },
  navButtonTextActive: {
    color: theme.colors.primary,
  },
});