import { rankAds } from "./rankAds";
import type { CarAd } from "./filterAds";

type EmbeddedCarAd = CarAd & { embedding: number[] }

function fakeAd(id: number, embedding: number[]): EmbeddedCarAd {
    return {
        id,
        title: `Ad ${id}`,
        make: "Test",
        model: "Model",
        year: "2020",
        price: "100000",
        mileage: "180000",
        fueltype: "Petrol",
        gearbox: "Manual",
        description: "Test Ad",
        embedding,
    } as EmbeddedCarAd
}

test("ranks ads by consine similarity, descending", () => {
    const queryVector = [1, 0]
    const ads = [
        fakeAd(1, [1, 0]), // same as query vector (should be 1)
        fakeAd(2, [0, 1]), // orthogonal as query vector (should be 0)
        fakeAd(3, [1, 1]), // middle ground
    ]

    const result = rankAds(queryVector, ads)

    expect(result.map(r => r.ad.id)).toEqual([1, 3, 2])
})

test("attaches the cosine score to each result", () => {
    const ads = [fakeAd(1, [1, 0]), fakeAd(2, [0, 1])]
    const result = rankAds([1, 0], ads)

    expect(result[0].score).toBeCloseTo(1, 10)
    expect(result[1].score).toBeCloseTo(0, 10)
})

test("does not mutate the input array", () => {
    const ads = [fakeAd(1, [0, 1]), fakeAd(2, [1, 0])]
    const before = ads.map(a => a.id)

    rankAds([1, 0], ads)

    expect(ads.map(a => a.id)).toEqual(before)
})