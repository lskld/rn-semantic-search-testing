import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AdProps = {
    id: number;
    title: string;
    price: string;
    description: string;
    make: string;
    model: string;
    year: string;
    mileage: string;
    gearbox: string;
    fueltype: string;
}

export default function Ad({
    title,
    price,
    description,
    make,
    model,
    year,
    mileage,
    gearbox,
    fueltype
}: AdProps) {
    const [expanded, setExpanded] = useState(false);
    const [bgColor] = useState(() => {
        const colors = ["#fff", "#f0f8ff", "#fff0f5", "#f0fff0", "#fffaf0"];
        return colors[Math.floor(Math.random() * colors.length)];
    });


    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <View>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>{title}</Text>
                <Text>{price} SEK</Text>
            </View>
            
            <Pressable
                style={styles.expandBtn}
                onPress={() => setExpanded(!expanded)}>
                <Text style={{ color: "white", textAlign: "center" }}>Expand</Text>
            </Pressable>
            {expanded && (
                <View>
                    <Text style={{ marginBottom: 5 }}>{description}</Text>
                    <Text style={{ fontWeight: 600 }}>Additional information:</Text>
                    <Text>Manufacturer: {make}</Text>
                    <Text>Model: {model}</Text>
                    <Text>Model year: {year}</Text>
                    <Text>Mileage (km): {mileage}</Text>
                    <Text>Gearbox: {gearbox}</Text>
                    <Text>Fuel: {fueltype}</Text>
                </View>
            )}
        </View>
    )
}

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
        borderRadius: 10
    }
})