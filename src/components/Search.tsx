import { StyleSheet, TextInput, View } from "react-native";

export default function Search({ text, setText }: {
    text: string,
    setText: (value: string) => void
}) {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Search..."
            />
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
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "black",
        color: "white",
        width: "100%"
    }
})