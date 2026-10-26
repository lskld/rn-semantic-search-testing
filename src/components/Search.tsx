import { StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

export default function Search({ text, setText }: {
    text: string,
    setText: (value: string) => void,
}) {
    return (
        <View style={styles.container}>
            <SearchBar
                text={text}
                setText={setText}/>
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