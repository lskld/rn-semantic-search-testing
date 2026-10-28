import { FlatList } from "react-native";
import carAds from "../data/car_ads.json"
import Ad from "./Ad";
import { filterAds } from "../lib/filterAds";

export default function AdList({ searchText }: {
    searchText: string,
}) {
    const filteredAds = filterAds(carAds, searchText)

    return (
        <FlatList
            data={filteredAds}
            renderItem={({ item }) => (
                <Ad 
                    key={item.id}
                    ad={item}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ alignItems: "center" }}
            />
    )
}