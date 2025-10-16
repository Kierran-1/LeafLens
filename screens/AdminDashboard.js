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
import theme from '../theme';

export default function AdminDashboard({ navigation }) {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const stats = [
    { icon: 'people', label: 'Total Users', value: '1,234', change: '+12%' },
    { icon: 'leaf', label: 'Plant Species', value: '856', change: '+8%' },
    { icon: 'flag', label: 'Pending Reviews', value: '23', change: '-5%' },
    { icon: 'alert-circle', label: 'IoT Alerts', value: '5', change: '+2' },
  ];

  const pendingReviews = [
    {
      id: 1,
      species: 'Unknown Species #234',
      user: 'John Doe',
      confidence: 45,
      image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      species: 'Possible Rafflesia',
      user: 'Jane Smith',
      confidence: 62,
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      species: 'Hibiscus variant',
      user: 'Mike Chen',
      confidence: 78,
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=100&h=100&fit=crop',
    },
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'flagged a plant', species: 'Rafflesia', time: '5 min ago' },
    { user: 'Jane Smith', action: 'uploaded image', species: 'Hibiscus', time: '12 min ago' },
    { user: 'Admin Mike', action: 'verified species', species: 'Begonia', time: '23 min ago' },
    { user: 'Sarah Lee', action: 'reported location', species: 'Unknown Fern', time: '1 hour ago' },
  ];

  const StatCard = ({ stat }) => (
    <View style={styles.statCard}>
      <View style={styles.statIcon}>
        <Ionicons name={stat.icon} size={28} color={theme.colors.primary} />
      </View>
      <View style={styles.statContent}>
        <Text style={styles.statLabel}>{stat.label}</Text>
        <Text style={styles.statValue}>{stat.value}</Text>
        <Text style={[
          styles.statChange,
          { color: stat.change.includes('+') ? '#22c55e' : '#ef4444' }
        ]}>
          {stat.change} this {selectedPeriod}
        </Text>
      </View>
    </View>
  );

  const ReviewItem = ({ review }) => (
    <View style={styles.reviewItem}>
      <Image source={{ uri: review.image }} style={styles.reviewImage} />
      <View style={styles.reviewInfo}>
        <Text style={styles.reviewSpecies}>{review.species}</Text>
        <Text style={styles.reviewUser}>by {review.user}</Text>
        <View style={styles.confidenceBar}>
          <View style={[styles.confidenceFill, { width: (review.confidence + '%') }]} />
        </View>
        <Text style={styles.confidenceText}>{review.confidence}% confidence</Text>
      </View>
      <View style={styles.reviewActions}>
        <TouchableOpacity style={styles.approveBtn}>
          <Ionicons name="checkmark" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectBtn}>
          <Ionicons name="close" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const ActivityItem = ({ activity }) => (
    <View style={styles.activityItem}>
      <View style={styles.activityDot} />
      <View style={styles.activityContent}>
        <Text style={styles.activityText}>
          <Text style={styles.bold}>{activity.user}</Text> {activity.action}{' '}
          <Text style={styles.italic}>{activity.species}</Text>
        </Text>
        <Text style={styles.activityTime}>{activity.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Super Admin Dashboard</Text>
          <Text style={styles.subtitle}>Welcome back, manage your platform</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} color={theme.colors.primary} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>5</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </View>

        {/* Pending Reviews */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Pending Reviews</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllBtn}>View All</Text>
            </TouchableOpacity>
          </View>
          {pendingReviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </View>

        {/* Recent Activity */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Recent Activity</Text>
          </View>
          {recentActivity.map((activity, index) => (
            <ActivityItem key={index} activity={activity} />
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity 
              style={styles.actionBtn}
              onPress={() => navigation.navigate('UserManagement')}
            >
              <Ionicons name="people-outline" size={28} color={theme.colors.primary} />
              <Text style={styles.actionText}>Manage Users</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="leaf-outline" size={28} color={theme.colors.primary} />
              <Text style={styles.actionText}>Review Plants</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="map-outline" size={28} color={theme.colors.primary} />
              <Text style={styles.actionText}>View Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="analytics-outline" size={28} color={theme.colors.primary} />
              <Text style={styles.actionText}>Analytics</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  notificationBtn: {
    position: 'relative',
    backgroundColor: '#f0fdf4',
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ef4444',
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  statIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#f0fdf4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statContent: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 2,
  },
  statChange: {
    fontSize: 12,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  viewAllBtn: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  reviewItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 12,
  },
  reviewImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  reviewInfo: {
    flex: 1,
  },
  reviewSpecies: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  reviewUser: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  confidenceBar: {
    width: '100%',
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 4,
  },
  confidenceFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
  },
  confidenceText: {
    fontSize: 11,
    color: '#666',
  },
  reviewActions: {
    flexDirection: 'row',
    gap: 8,
  },
  approveBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rejectBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#ef4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  activityDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    marginTop: 4,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  bold: {
    fontWeight: '700',
  },
  italic: {
    fontStyle: 'italic',
  },
  activityTime: {
    fontSize: 12,
    color: '#999',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    minWidth: '45%',
    padding: 20,
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    gap: 8,
  },
  actionText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
