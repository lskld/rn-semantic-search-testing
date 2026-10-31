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
