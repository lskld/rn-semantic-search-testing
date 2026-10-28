import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import HomeScreen from './src/components/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import AdDetailsScreen from './src/components/AdDetailsScreen';
import { RootStackParamList } from './src/lib/navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screenOptions: {
    headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#202020"
        }
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Car Listings",
      }
    },
    AdDetails: {
      screen: AdDetailsScreen,
      options: {
        title: "Listing details",
      }
    }
  }
})

const Navigation = createStaticNavigation(RootStack)

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
