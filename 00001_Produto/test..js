describe("", () => {
  it("produto([1, 2, 7]) é 14", () => {
    assert.equal(produto([1, 2, 7]), 14);
  })
  
  it("produto([10, 10]) é 100", () => {
    assert.equal(produto([10, 10]), 100);
  })
  
  it("produto([10]) é 10", () => {
    assert.equal(produto([10]), 10);
  })
  
  it("produto([]) é 1", () => {
    assert.equal(produto([]), 1);
  })
  
  it("produto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) é 3628800", () => {
    assert.equal(produto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3628800);
  })
})