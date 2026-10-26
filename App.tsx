import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AdList from './src/components/AdList';
import Search from './src/components/Search';
import { useState } from 'react';

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
  const [text, setText] = useState("")

  return (
    <View style={styles.container}>
      <Search
        setText={setText}/>
      <AdList
        searchText={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
