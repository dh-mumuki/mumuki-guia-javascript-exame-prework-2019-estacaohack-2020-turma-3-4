describe("", () => {
  it("alturaArvoreUtopica(0)", () => {
    assert.equal(alturaArvoreUtopica(0), 1);
  });
  it("alturaArvoreUtopica(1)", () => {
    assert.equal(alturaArvoreUtopica(1), 2);
  });
  it("alturaArvoreUtopica(2)", () => {
    assert.equal(alturaArvoreUtopica(2), 3);
  });
  it("alturaArvoreUtopica(3)", () => {
    assert.equal(alturaArvoreUtopica(3), 6);
  });
  it("alturaArvoreUtopica(4)", () => {
    assert.equal(alturaArvoreUtopica(4), 7);
  });
  it("alturaArvoreUtopica(5)", () => {
    assert.equal(alturaArvoreUtopica(5), 14);
  });
  it("alturaArvoreUtopica(6)", () => {
    assert.equal(alturaArvoreUtopica(6), 15);
  });
})