import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Ad from './src/components/Ad';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <Ad
        id={1}
        title='Skoda Octavia 1.8T'
        description='En skoda octavia! En skoda octavia! En skoda octavia! En skoda octavia! En skoda octavia! En skoda octavia! En skoda octavia!'
        price='22000'
        make='Skoda'
        model='Octavia'
        year='2004'
        mileage='180000'
        gearbox='manual'
        fueltype='petrol'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default App;
