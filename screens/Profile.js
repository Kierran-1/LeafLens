// Profile.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../theme';

export default function Profile({ navigation }) {
  const [activeTab, setActiveTab] = useState('posts');

  // Dummy posts data
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=400&h=400&fit=crop',
      caption: 'Beautiful morning hike! 🌄',
      likes: 124,
      date: '2 days ago'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=400&fit=crop',
      caption: 'Discovered this amazing plant species in the forest',
      likes: 89,
      date: '5 days ago'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop',
      caption: 'Nature photography at its finest 📸',
      likes: 156,
      date: '1 week ago'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=400&fit=crop',
      caption: 'Sunset views from the peak',
      likes: 203,
      date: '1 week ago'
    },
  ];

  // Dummy photos data
  const photos = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=400&fit=crop',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&h=400&fit=crop',
    },
  ];

  const PostCard = ({ post }) => (
    <View style={styles.postCard}>
      <Image source={{ uri: post.image }} style={styles.postImage} />
      <View style={styles.postInfo}>
        <Text style={styles.postCaption}>{post.caption}</Text>
        <View style={styles.postMeta}>
          <View style={styles.likesContainer}>
            <Ionicons name="heart" size={16} color="#ef4444" />
            <Text style={styles.likesText}>{post.likes} likes</Text>
          </View>
          <Text style={styles.postDate}>{post.date}</Text>
        </View>
      </View>
    </View>
  );

  const PhotoGrid = () => (
    <View style={styles.photoGrid}>
      {photos.map((photo) => (
        <TouchableOpacity key={photo.id} style={styles.photoItem}>
          <Image source={{ uri: photo.image }} style={styles.photoImage} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => {/* Settings logic here if needed */}}
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Picture Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => navigation.navigate('EditProfile')}
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
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'posts' && styles.tabActive]}
            onPress={() => setActiveTab('posts')}
          >
            <Text style={[styles.tabText, activeTab === 'posts' && styles.tabTextActive]}>
              Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'photos' && styles.tabActive]}
            onPress={() => setActiveTab('photos')}
          >
            <Text style={[styles.tabText, activeTab === 'photos' && styles.tabTextActive]}>
              Photos
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content based on active tab */}
        <View style={styles.contentContainer}>
          {activeTab === 'posts' ? (
            <View style={styles.postsContainer}>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </View>
          ) : (
            <PhotoGrid />
          )}
        </View>
      </ScrollView>
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
    minWidth: 60,
  },
  headerButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
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
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  userBio: {
    fontSize: 14,
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
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  tabTextActive: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 10,
  },
  postsContainer: {
    paddingHorizontal: 16,
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postInfo: {
    padding: 12,
  },
  postCaption: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  postMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  postDate: {
    fontSize: 12,
    color: '#999',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  photoItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 4,
  },
  photoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
