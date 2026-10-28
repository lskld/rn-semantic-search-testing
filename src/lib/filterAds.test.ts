import { CarAd, filterAds } from "./filterAds"
import carAds from "../data/car_ads.json"

// Test on the real car ads json
test("empty search string returns all ads", () => {
    expect(filterAds(carAds, "")).toHaveLength(carAds.length)
}) 

test("capital letter doesnt affect filtering", () => {
    expect(filterAds(carAds, "volvo")).toEqual(filterAds(carAds, "VOLVO"))
})

const testAds: CarAd[] = [
  { id: 1, title: "Volvo V70 2015", make: "Volvo", model: "V70",
    price: "45000", description: "Big and safe", year: "2015",
    mileage: "120000", gearbox: "Automatisk", fueltype: "Diesel" },
  { id: 2, title: "Mazda MX-5 Miata 2008", make: "Mazda", model: "MX-5",
    price: "70000", description: "Fun cabriolet", year: "2008",
    mileage: "90000", gearbox: "Manuell", fueltype: "Bensin" },
  { id: 3, title: "BMW 320i 2010", make: "BMW", model: "320i",
    price: "55000", description: "Sporty sedan", year: "2010",
    mileage: "150000", gearbox: "Manuell", fueltype: "Bensin" },
];

// Tests on fake test ads
const cases = [
  ["volvo", 1],
  ["bmw", 1],
  ["mitsubishi", 0],
] as const;

test.each(cases)("Seatch on '%s' gives %d hits", (query, expected) => {
  expect(filterAds(testAds, query)).toHaveLength(expected);
});

test("searching for make returns correkt car", () => {
    const result = filterAds(testAds, "volvo")
    expect(result.length).toBeGreaterThan(0)
    result.forEach(ad => {
        expect(ad.make.toLowerCase()).toContain("volvo")
    })
})