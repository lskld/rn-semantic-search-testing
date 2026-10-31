import { cosineSimilarity } from "./cosine"

test("identical vectors return 1", () => {
    expect(cosineSimilarity([1, 0], [1, 0])).toBeCloseTo(1, 10)
})

test("scale doesnt matter", () => {
    expect(cosineSimilarity([1, 0], [5, 0])).toBeCloseTo(1, 10)
})

test("orthogonal  vectors return 0", () => {
    expect(cosineSimilarity([1, 0], [0, 1])).toBeCloseTo(0, 10)
})

test("opposite vectors return -1", () => {
    expect(cosineSimilarity([1, 0], [-1, 0])).toBeCloseTo(-1, 10)
})

test("zero vector is documented as NaN", () => {
  expect(cosineSimilarity([0, 0], [1, 0])).toBeNaN();
});