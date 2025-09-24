import { ActivityIndicator, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function AppProvider({ children }) {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular: require('../assets/fonts/Nunito_400Regular.ttf'),
    Nunito_700Bold: require('../assets/fonts/Nunito_700Bold.ttf'),
    Nunito_800ExtraBold: require('../assets/fonts/Nunito_800ExtraBold.ttf'),
  });

  console.log('Fonts loaded:', fontsLoaded)

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#53B175" />
      </View>
    );
  }

  return <>{children}</>;
}