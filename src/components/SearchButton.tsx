import { Pressable, StyleSheet, Text } from "react-native";

export default function SearchButton() {
    return (
        <Pressable style={styles.pressable}>
            <Text>🔍</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "white",
        alignSelf: "flex-start",
        height: 40,
        width: "10%",
        alignItems: "center",
        justifyContent: "center"
    }
})