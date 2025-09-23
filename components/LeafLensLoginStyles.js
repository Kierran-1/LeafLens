import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#4ade80',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 48,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  statusText: {
    color: 'white',
    fontWeight: '500',
  },
  signalIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signalBar: {
    width: 16,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 2,
    marginRight: 4,
  },
  batteryIcon: {
    width: 24,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  logoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 32,
    height: 32,
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitleText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: -32,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  tabContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 24,
    overflow: 'hidden',
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#4ade80',
  },
  tabText: {
    fontWeight: '600',
    color: '#6b7280',
  },
  activeTabText: {
    color: '#111827',
  },
  formContainer: {
    padding: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    color: '#6b7280',
    fontSize: 14,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#f9fafb',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    color: '#111827',
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    backgroundColor: '#f9fafb',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingRight: 48,
    borderRadius: 12,
    color: '#111827',
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 4,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxActive: {
    backgroundColor: '#4ade80',
    borderColor: '#4ade80',
  },
  rememberText: {
    color: '#6b7280',
    fontSize: 14,
  },
  forgotText: {
    color: '#3b82f6',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#4ade80',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  dividerContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  dividerText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  googleIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  facebookIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#2563eb',
    borderRadius: 10,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  socialButtonText: {
    color: '#374151',
    fontWeight: '500',
  },
  bottomIndicator: {
    alignItems: 'center',
    marginBottom: 32,
  },
  homeIndicator: {
    width: 128,
    height: 4,
    backgroundColor: '#1f2937',
    borderRadius: 2,
  },
});

export default styles; // Change to default export