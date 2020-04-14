describe("", () => {
  it("acontece([10, -5, 3, 0], 4)", () => {
    assert.equal(acontece([10, -5, 3, 0], 4), false, "deveria retornar false")
  })
  
  it("acontece([10, -5, 3, 0], 3)", () => {
    assert.equal(acontece([10, -5, 3, 0], 3), false, "deveria retornar false")
  })
  
  it("acontece([10, -5, 3, 0], 2)", () => {
    assert.equal(acontece([10, -5, 3, 0], 2), true, "deveria retornar true")
  })
  
  it("acontece([10, -5, 3, 0], 1)", () => {
    assert.equal(acontece([10, -5, 3, 0], 1), true, "deveria retornar true")
  })
  
    
  it("acontece([0, 0, 3, 0], 3)", () => {
    assert.equal(acontece([0, 0, 3, 0], 3), true, "deveria retornar true")
  })
  
  
  it("aberturas([[0, 0, 3, 0], [1, 2, 4, 5], [0, 0, -1]], 3)", () => {
    assert.deepEqual(aberturas([[0, 0, 3, 0], [1, 2, 4, 5], [0, 0, -1]], 3), [true, false, true])
  })
  
  it("aberturas([[0, 0, -3, 0], [1, 2, 4, 5], [0, 0, -1]], 4)", () => {
    assert.deepEqual(aberturas([[0, 0, -3, 0], [1, 2, 4, 5], [0, 0, -1]], 4), [true, false, false])
  })
  
})