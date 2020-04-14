describe("", () => {
  it("maisMenos([1]) é [1, 0, 0]", () => {
    assert.deepEqual(maisMenos([1]), [1, 0, 0]);
  })
  
  it("maisMenos([0, 0, 0, 0]) é [0, 1, 0]", () => {
    assert.deepEqual(maisMenos([0, 0, 0, 0]), [0, 1, 0]);
  })
  
  it("maisMenos([0, 0, 0, 0, -2, -3, -4, -5]) é [0, 0.5, 0.5]", () => {
    assert.deepEqual(maisMenos([0, 0, 0, 0, -2, -3, -4, -5]), [0, 0.5, 0.5]);
  })
  
  it("maisMenos([1, 2, 4]) é [1, 0, 0]", () => {
    assert.deepEqual(maisMenos([1, 2, 4]), [1, 0, 0]);
  })
  
  it("maisMenos([1, 0]) é [0.5, 0.5, 0]", () => {
    assert.deepEqual(maisMenos([1, 0]), [0.5, 0.5, 0]);
  })
  
  it("maisMenos([1, 2, 0, -1]) é [0.5, 0.25, 0.25]", () => {
    assert.deepEqual(maisMenos([1, 2, 0, -1]), [0.5, 0.25, 0.25]);
  })
})