import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Search from "./Search";
import AdList from "./AdList";
import carAdsJson from "../data/car_ads_embedded.json"
import { CarAd, filterAds } from "../lib/filterAds";
import { embedQuery } from "../lib/embedQuery";
import { rankAds } from "../lib/searchAds";

type EmbeddedCarAd = CarAd & { embedding: number[] }
const carAds = carAdsJson as EmbeddedCarAd[]

export default function HomeScreen() {
  const [results, setResults] = useState<CarAd[]>(carAds)
  const [isSearching, setIsSearching] = useState(false)
  const [searchText, setSearchText] = useState("")
  
  useEffect(() => {
    const timer = setTimeout(() => setSearchText(searchText), 300);

    if (!searchText.trim()) {
      setResults(carAds)
      return
    }

    let cancelled = false
    setIsSearching(true)

    embedQuery(searchText)
      .then(vector => {
        if (!cancelled) {
          setResults(rankAds(vector).map(r => r.ad))
        }
      })
      .catch(err => {
        console.log("embedQuery failed:", err.message)
        if (!cancelled) {
          setResults(filterAds(carAds, searchText))
        }
      })
      .finally(() => {
        if (!cancelled) setIsSearching(false)
      })

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [searchText])
    
  return (
    <View style={styles.container}>
      <Search
        text={searchText}
        setText={setSearchText}/>
      <AdList
        ads={results} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#2f2f2f",
        paddingBottom: 70
    },
});