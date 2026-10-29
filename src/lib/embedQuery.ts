import { MISTRAL_API_KEY } from "@env"

export async function embedQuery(text: string): Promise<number[]> {
    const response = await fetch("https://api.mistral.ai/v1/embeddings", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${MISTRAL_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ model: "mistral-embed", input: [text]}),
    })

    if (!response.ok) {
        const body = await response.text()
        throw new Error(`Embedding-API answered: ${response.status}: ${body}`)
    }

    const data = await response.json()
    return data.data[0].embedding
}