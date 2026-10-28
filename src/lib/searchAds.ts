import carAdsJson from "../data/car_ads_embedded.json"
import { cosineSimilarity } from "./cosine"
import type { CarAd } from "./filterAds"

type EmbeddedCarAd = CarAd & { embedding: number[] }

const carAds = carAdsJson as EmbeddedCarAd[]

export function rankAds(queryVector: number[]) {
    return [...carAds]
        .map(ad => ({ ad, score: cosineSimilarity(queryVector, ad.embedding) }))
        .sort((a, b) => b.score - a.score)
} 