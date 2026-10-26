import { StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

export default function Search() {
    return (
        <View style={styles.container}>
            <SearchBar />
            <SearchButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 75,
        margin: 12,
        gap: 5,
        justifyContent: "center",
    }
})