import carAds from "../data/car_ads.json"

export type CarAd = typeof carAds[number];

export function filterAds(adlist: CarAd[], searchText: string): CarAd[] {
    const query = searchText.trim().toLowerCase()
    if (!query) return adlist;

    return adlist.filter(ad =>
        [ad.title, ad.make, ad.model, ad.year].some(field =>
            field.toLowerCase().includes(query)
    ))
} 