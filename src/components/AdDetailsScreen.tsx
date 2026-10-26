import { Text } from "react-native";
import carAds from "../data/car_ads.json"

export default function AdDetailsScreen({ route }: { route: { params: { id: number } } }) {
    const { id } = route.params
    const ad = carAds.find(a => a.id === id)

    return (
        <Text>{ad?.title}</Text>
    )
}