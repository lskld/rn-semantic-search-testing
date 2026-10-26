import { StyleSheet, TextInput } from "react-native";

export default function SearchBar({ text, setText }: {
    text: string,
    setText: (value: string) => void,
}) {
    return (
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
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
        color: "white",
        width: "90%"
    },
});