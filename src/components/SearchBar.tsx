import { StyleSheet, TextInput } from "react-native";

export default function SearchBar() {
    return (
        <TextInput
            style={styles.input}
            placeholder="Search..."
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "black",
        width: "90%"
    },
});