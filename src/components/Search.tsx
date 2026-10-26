import { StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import { useState } from "react";

export default function Search({ setText }: {
    setText: (value: string) => void
}) {
    const [inputText, setInputText] = useState("")

    return (
        <View style={styles.container}>
            <SearchBar
                text={inputText}
                setText={setInputText}/>
            <SearchButton
                onPress={() => setText(inputText)}/>
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