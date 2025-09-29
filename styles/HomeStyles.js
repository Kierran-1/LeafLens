import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    marginRight: 8,
  },
  logoText: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: '#22c55e',
  },
  profileButton: {
    padding: 5,
  },
  welcomeBanner: {
    backgroundColor: '#22c55e',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  tabButtonActive: {
    backgroundColor: '#e8f5e8',
  },
  tabButtonInactive: {
    backgroundColor: '#f5f5f5',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  tabButtonTextActive: {
    color: '#22c55e',
  },
  tabButtonTextInactive: {
    color: '#666',
  },
  filterButton: {
    marginLeft: 'auto',
    padding: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  plantCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  plantImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  plantInfo: {
    flex: 1,
  },
  commonName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  scientificName: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  moreButton: {
    padding: 8,
  },
});