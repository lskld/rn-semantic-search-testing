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
                placeholderTextColor="gray"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBlock: 12,
        gap: 5,
        justifyContent: "center",
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        color: "black",
        width: "90%",
        borderRadius: 20
    }
})