# Testing keyword, semantic and hybrid search across advertisements

A React Native app that lets users search and rank car advertisements through keyword search, vector-based semantic search and hybrid search that combines both. Build to test, explore and compare how each method behaves on real-world-style queries. 

## How it works

Keyword search filters ads by exact word matches against the title and other data in the advertisement. 

Semantic search embeds the query and every ad with the `mistral-embed` model and ranks ads by cosine similarity. Results are matched on meaning instead of exact words. 

Hybrid search scores every ad with a weighted combination: 70% cosine similarity + 30% keyword score. The keyword part matches whole words only.

Search flow:
1. User types, input is debounced by 300 ms
2. Query is embedded via the Mistral API
3. Ads are scored and raned by hybrid score
4. If embedding call fails, the app falls back to keywords search

## Getting started

Prerequisites: Node.js, npm, a Mistral API key.

```
# 1. Install dependencies
npm install

# 2. Add your API key to .env
echo "MISTRAL_API_KEY=your-key-here" > .env

# 3. Generate ad embeddings (requires API key)
npx tsx scripts/generate-embeddings.ts

# 4. Start the app
npm start
```

## Stack
* React Native
* TypeScript
* Mistral AI embedding API (`mistral-embed`)
* Jest / React Native Testing Library
* react-native-dotenv for API key handling