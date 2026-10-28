import { FlatList } from "react-native";
import carAds from "../data/car_ads.json"
import Ad from "./Ad";
import { filterAds } from "../lib/filterAds";
import { useMemo } from "react";

export default function AdList({ searchText }: {
    searchText: string,
}) {
    const filteredAds = useMemo(() => filterAds(carAds, searchText), [searchText])

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