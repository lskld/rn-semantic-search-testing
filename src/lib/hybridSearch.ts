import { cosineSimilarity } from "./cosine";
import { CarAd } from "./filterAds";

type EmbeddedCarAd = CarAd & { embedding: number[] }

export function keywordScore(ad: CarAd, query: string): number {
    const tokens = query.trimEnd().toLowerCase().split(/\s+/)
    if (tokens.length === 0) return 0
    const adData = `${ad.title} ${ad.make} ${ad.model}`.toLowerCase()
    const matched = tokens.filter(t => adData.includes(t)).length
    return matched / tokens.length
}

export function hybridScore(ad: EmbeddedCarAd, query: string, queryVector: number[], weight = 0.3): number {
    return (1 - weight) * cosineSimilarity(queryVector, ad.embedding) + weight * keywordScore(ad, query)
}