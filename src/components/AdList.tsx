import { FlatList } from "react-native";
import carAds from "../data/car_ads.json"
import Ad from "./Ad";

export default function AdList({ searchText }: {
    searchText: string,
}) {
    const filteredAds = carAds.filter(ad =>
        ad.title.toLowerCase().includes(searchText.toLowerCase()) ||
        ad.make.toLowerCase().includes(searchText.toLowerCase()) ||
        ad.model.toLowerCase().includes(searchText.toLowerCase()) ||
        ad.description.toLowerCase().includes(searchText.toLowerCase())
    );

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
            />
    )
}