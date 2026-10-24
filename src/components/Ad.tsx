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
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>{title}</Text>
                <Text>{price} SEK</Text>
            </View>
            <View style={styles.description}>
                <Text>{description}</Text>
            </View>
            <View style={styles.stats}>
                <Text style={{ fontWeight: 600 }}>Information:</Text>
                <Text>Manufacturer: {make}</Text>
                <Text>Model: {model}</Text>
                <Text>Model year: {year}</Text>
                <Text>Mileage (km): {mileage}</Text>
                <Text>Gearbox: {gearbox}</Text>
                <Text>Fuel: {fueltype}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "75%",
        padding: 7.5,
        gap: 10
    },
    header: {
        
    },
    description: {

    },
    stats: {

    },
})