import { FlatList } from "react-native";
import Ad from "./Ad";
import { CarAd } from "../lib/filterAds";

export default function AdList({ ads }: { ads: CarAd[] }) {
    return (
        <FlatList
            data={ads}
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