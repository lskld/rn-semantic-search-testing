import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Search from "./Search";
import AdList from "./AdList";

export default function HomeScreen() {
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