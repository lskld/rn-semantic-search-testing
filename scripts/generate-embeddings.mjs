import fs from "node:fs"
import { Mistral } from "@mistralai/mistralai";
import "dotenv/config"

const mistral = new Mistral({ apiKey: process.env.MISTRAL_API_KEY })

const ads = JSON.parse(fs.readFileSync("src/data/car_ads.json", "utf-8"))
const texts = ads.map(ad => `${ad.title}. ${ad.make} ${ad.model}. modelyear: ${ad.year}.`)

const allVectors = []
for (let i = 0; i < texts.length; i += 100) {
    const response = await mistral.embeddings.create({
    model: "mistral-embed",
    inputs: texts.slice(i, i + 100),
    })   
    allVectors.push(...response.data.map(d => d.embedding))
}

const embedded = ads.map((ad, i) => ({ ...ad, embedding: allVectors[i] }))
fs.writeFileSync("src/data/car_ads_embedded.json", JSON.stringify(embedded, null, 2))
console.log(`Wrote ${embedded.length} ads with vectors`)