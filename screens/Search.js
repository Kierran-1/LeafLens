// Search.js - Enhanced with plant identification and filtering capabilities
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

export default function Search({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([
    'Hibiscus',
    'Rafflesia',
    'Begonia',
    'Fern species'
  ]);

  const filters = ['All', 'Identified', 'Verified', 'Endangered', 'Common'];

  const mockSearchResults = [
    {
      id: 1,
      commonName: 'Hibiscus Rosa-sinensis',
      scientificName: 'Hibiscus rosa-sinensis',
      confidence: 95,
      status: 'verified',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=150&h=150&fit=crop',
      location: 'Bako National Park',
      lastSeen: '2 days ago'
    },
    {
      id: 2,
      commonName: 'Giant Rafflesia',
      scientificName: 'Rafflesia arnoldii',
      confidence: 88,
      status: 'endangered',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=150&h=150&fit=crop',
      location: 'Gunung Gading National Park',
      lastSeen: '1 week ago'
    },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Mock search functionality
    if (query.length > 2) {
      setSearchResults(mockSearchResults);
    } else {
      setSearchResults([]);
    }
  };

  const FilterButton = ({ title, isActive, onPress }) => (
    <TouchableOpacity
      style={[styles.filterButton, isActive && styles.activeFilterButton]}
      onPress={onPress}
    >
      <Text style={[styles.filterText, isActive && styles.activeFilterText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const SearchResultCard = ({ item }) => (
    <TouchableOpacity style={styles.resultCard}>
      <Image source={{ uri: item.image }} style={styles.resultImage} />
      <View style={styles.resultInfo}>
        <View style={styles.resultHeader}>
          <Text style={styles.commonName}>{item.commonName}</Text>
          <View style={[
            styles.statusBadge,
            item.status === 'endangered' ? styles.endangeredBadge : styles.verifiedBadge
          ]}>
            <Text style={styles.statusText}>
              {item.status === 'endangered' ? 'Endangered' : 'Verified'}
            </Text>
          </View>
        </View>
        <Text style={styles.scientificName}>{item.scientificName}</Text>
        <View style={styles.resultMeta}>
          <View style={styles.confidenceContainer}>
            <Ionicons name="checkmark-circle" size={16} color="#22c55e" />
            <Text style={styles.confidence}>{item.confidence}% match</Text>
          </View>
          <Text style={styles.location}>{item.location}</Text>
        </View>
        <Text style={styles.lastSeen}>Last seen: {item.lastSeen}</Text>
      </View>
    </TouchableOpacity>
  );

  const RecentSearchItem = ({ search }) => (
    <TouchableOpacity
      style={styles.recentItem}
      onPress={() => handleSearch(search)}
    >
      <Ionicons name="time-outline" size={16} color="#666" />
      <Text style={styles.recentText}>{search}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Plant Search</Text>
        <TouchableOpacity style={styles.advancedButton}>
          <Ionicons name="options-outline" size={24} color="#22c55e" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search plants by name, species, or location..."
            value={searchQuery}
            onChangeText={handleSearch}
            autoCapitalize="none"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <Ionicons name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
        contentContainerStyle={styles.filtersContent}
      >
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            title={filter}
            isActive={activeFilter === filter}
            onPress={() => setActiveFilter(filter)}
          />
        ))}
      </ScrollView>

      <ScrollView style={styles.content}>
        {searchQuery.length === 0 ? (
          // Recent Searches and Suggestions
          <View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recent Searches</Text>
              {recentSearches.map((search, index) => (
                <RecentSearchItem key={index} search={search} />
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              <TouchableOpacity 
                style={styles.quickAction}
                onPress={() => navigation.navigate('Scan')}
              >
                <Ionicons name="camera-outline" size={24} color="#22c55e" />
                <View style={styles.quickActionText}>
                  <Text style={styles.quickActionTitle}>Identify Plant</Text>
                  <Text style={styles.quickActionSubtitle}>Take a photo to identify</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickAction}>
                <Ionicons name="map-outline" size={24} color="#22c55e" />
                <View style={styles.quickActionText}>
                  <Text style={styles.quickActionTitle}>Browse Map</Text>
                  <Text style={styles.quickActionSubtitle}>Explore plant locations</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickAction}>
                <Ionicons name="bookmark-outline" size={24} color="#22c55e" />
                <View style={styles.quickActionText}>
                  <Text style={styles.quickActionTitle}>Saved Plants</Text>
                  <Text style={styles.quickActionSubtitle}>View your collection</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          // Search Results
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsHeader}>
              {searchResults.length} results found for "{searchQuery}"
            </Text>
            {searchResults.map((item) => (
              <SearchResultCard key={item.id} item={item} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  advancedButton: {
    padding: 8,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  filtersContainer: {
    backgroundColor: '#fff',
  },
  filtersContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    marginRight: 10,
  },
  activeFilterButton: {
    backgroundColor: '#22c55e',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeFilterText: {
    color: '#fff',
  },
  content: {
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  recentText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  quickAction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  quickActionText: {
    flex: 1,
    marginLeft: 15,
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  quickActionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  resultsContainer: {
    marginTop: 20,
  },
  resultsHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  resultCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  resultImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  resultInfo: {
    flex: 1,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  commonName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  verifiedBadge: {
    backgroundColor: '#e8f5e8',
  },
  endangeredBadge: {
    backgroundColor: '#fef2f2',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  scientificName: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  resultMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  confidenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confidence: {
    fontSize: 12,
    color: '#22c55e',
    marginLeft: 4,
    fontWeight: '500',
  },
  location: {
    fontSize: 12,
    color: '#666',
  },
  lastSeen: {
    fontSize: 12,
    color: '#999',
  },
});