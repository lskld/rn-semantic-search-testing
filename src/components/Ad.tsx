import { useNavigation, type NavigationProp } from "@react-navigation/native";
import { memo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CarAd } from "../lib/filterAds";

type AdNavigationParamList = {
    AdDetails: { id: number };
};

function Ad({
    ad
}: { ad: CarAd }) {
    const [expanded, setExpanded] = useState(false);
    const CARD_COLORS = ["#fff", "#f0f8ff", "#fff0f5", "#f0fff0", "#fffaf0"];
    const bgColor = CARD_COLORS[ad.id % CARD_COLORS.length];
    const navigation = useNavigation<NavigationProp<AdNavigationParamList>>();

    return (
        <Pressable
            onPress={() => navigation.navigate('AdDetails', { id: ad.id })}
            style={[styles.container, { backgroundColor: bgColor }]}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>{ad.title}</Text>
                    <Text>{ad.price} SEK</Text>

                    <Pressable
                        style={styles.expandBtn}
                        onPress={() => setExpanded(!expanded)}>
                        <Text style={{ color: "white", textAlign: "center" }}>Expand</Text>
                    </Pressable>
                </View>

                {expanded && (
                    <View>
                        <Text style={{ marginBottom: 5 }}>{ad.description}</Text>
                        <Text style={{ fontWeight: 600 }}>Additional information:</Text>
                        <Text>Manufacturer: {ad.make}</Text>
                        <Text>Model: {ad.model}</Text>
                        <Text>Model year: {ad.year}</Text>
                        <Text>Mileage (km): {ad.mileage}</Text>
                        <Text>Gearbox: {ad.gearbox}</Text>
                        <Text>Fuel: {ad.fueltype}</Text>
                    </View>
                )}
            </Pressable>
    )
}

export default memo(Ad)

const styles = StyleSheet.create({
    container: {
        minWidth: "90%",
        maxWidth: "90%",
        padding: 10,
        gap: 10,
        marginBottom: 10
    },
    expandBtn: {
        backgroundColor: "blue",
        alignSelf: "flex-start",
        paddingBlock: 2,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 5
    },
})