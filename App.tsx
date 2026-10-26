import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AdList from './src/components/AdList';
import Search from './src/components/Search';
import { useEffect, useState } from 'react';

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
  const [inputText, setInputText] = useState("")
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setSearchText(inputText), 300);
    return () => clearTimeout(timer)
  }, [inputText])

  return (
    <View style={styles.container}>
      <Search
        text={inputText}
        setText={setInputText}/>
      <AdList
        searchText={searchText} />
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
