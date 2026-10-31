import { embedQuery } from "./embedQuery"

const mockFetch = jest.fn()
globalThis.fetch = mockFetch as unknown as typeof fetch

beforeEach(() => {
    mockFetch.mockReset()
})

test("sends inputfield with Bearer-auth and return vectorn", async () => {
    mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({ data: [{ embedding: [0.1, 0.2, 0.3] }]})
    })

    const vector = await embedQuery("test query")

    expect(vector).toEqual([0.1, 0.2, 0.3])

    const [url, options] = mockFetch.mock.calls[0]
    expect(url).toBe("https://api.mistral.ai/v1/embeddings")
    expect(options.method).toBe("POST")
    expect(options.headers.Authorization).toMatch(/^Bearer /)
    const body = JSON.parse(options.body)
    expect(body.model).toBe("mistral-embed")
    expect(body.input).toEqual(["test query"])
})

test("throws error with statuscode when API gives error response", async () => {
    mockFetch.mockResolvedValue({
        ok: false,
        status: 401,
        text: async () => "unauthorized"
    })

    await expect(embedQuery("something")).rejects.toThrow("401")
})