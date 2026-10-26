import { StyleSheet, Text, View } from "react-native";
import carAds from "../data/car_ads.json"

export default function AdDetailsScreen({ route, navigation }: {
    route: { params: { id: number } }
    navigation: { goBack: () => void }
}) {
    const { id } = route.params
    const ad = carAds.find(a => a.id === id)

    if (!ad) {
        navigation.goBack()
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.adDetails}>
                <Text style={{ fontSize: 20, fontWeight: 600, textAlign: "left" }}>{ad.title}</Text>
                <Text style={{ fontSize: 17, textAlign: "left" }}>Listing price: {ad.price}kr</Text>
                <Text style={{ fontWeight: 600, fontSize: 15, marginTop: 30 }}>Sellers description:</Text>
                <Text>{ad.description}</Text>
                <Text style={{ fontWeight: 600, fontSize: 15, marginTop: 30 }}>Vehicle Specifications:</Text>
                <Text>Manufacturer: {ad.make}</Text>
                <Text>Model: {ad.model}</Text>
                <Text>Model year: {ad.year}</Text>
                <Text>Mileage (km): {ad.mileage}</Text>
                <Text>Gearbox: {ad.gearbox}</Text>
                <Text>Fuel: {ad.fueltype}</Text>
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