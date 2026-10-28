import { StyleSheet, Text, View } from "react-native";
import carAds from "../data/car_ads.json"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../lib/navigation";

type AdDetailsProps = NativeStackScreenProps<RootStackParamList, "AdDetails">

export default function AdDetailsScreen({ route }: AdDetailsProps) {
    const { id } = route.params
    const ad = carAds.find(a => a.id === id)

    if (!ad) {
        return (
            <View style={styles.container}>
                <Text>The ad was not found</Text>
            </View>
        )
    }

    const specs: [string, string][] = [
        ["Manufacturer", ad.make],
        ["Model", ad.model],
        ["Model year", ad.year],
        ["Mileage (km)", ad.mileage],
        ["Gearbox", ad.gearbox],
        ["Fuel", ad.fueltype],
    ]

    return (
        <View style={styles.container}>
            <View style={styles.adDetails}>
                <Text style={{ fontSize: 20, fontWeight: 600, textAlign: "left" }}>{ad.title}</Text>
                <Text style={{ fontSize: 17, textAlign: "left" }}>Listing price: {ad.price}kr</Text>
                <Text style={{ fontWeight: 600, fontSize: 15, marginTop: 30 }}>Sellers description:</Text>
                <Text>{ad.description}</Text>
                <Text style={{ fontWeight: 600, fontSize: 15, marginTop: 30 }}>Vehicle Specifications:</Text>
                {specs.map(([label, value]) => (
                    <Text key={label}>{label}: {value}</Text>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 70,
    },
    adDetails: {
        padding: 20
    }
})