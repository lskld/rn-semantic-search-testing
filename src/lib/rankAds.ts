import carAdsJson from "../data/car_ads_embedded.json"
import { cosineSimilarity } from "./cosine"
import type { CarAd } from "./filterAds"
import { hybridScore } from "./hybridSearch"

type EmbeddedCarAd = CarAd & { embedding: number[] }

const carAds = carAdsJson as EmbeddedCarAd[]

export function rankAds(query: string, queryVector: number[], ads: EmbeddedCarAd[] = carAds) {
    return [...ads]
        .map(ad => ({ ad, score: hybridScore(ad, query, queryVector) }))
        .sort((a, b) => b.score - a.score)
} 