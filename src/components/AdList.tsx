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
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    make={item.make}
                    model={item.model}
                    year={item.year}
                    mileage={item.mileage}
                    gearbox={item.gearbox}
                    fueltype={item.fueltype}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ alignItems: "center" }}
            />
    )
}