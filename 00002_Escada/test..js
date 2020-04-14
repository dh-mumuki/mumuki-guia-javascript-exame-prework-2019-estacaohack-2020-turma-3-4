describe("", () => {
  it("escada(3)", () => {
    assert.deepEqual(
      escada(3), 
      [
        "  #",
        " ##",
        "###"])
  })
  
  it("escada(4)", () => {
    assert.deepEqual(
      escada(4), 
      [
        "   #",
        "  ##",
        " ###",
        "####"])
  })
  
  it("escada(5)", () => {
    assert.deepEqual(
      escada(5), 
      [
        "    #",
        "   ##",
        "  ###",
        " ####",
        "#####"])
  })
  
  
  it("escada(100).length", () => {
    assert.equal(escada(100).length, 100)
  })
  
  it("escada(50).length", () => {
    assert.equal(escada(50).length, 50)
  })
  
  
  it("escada(60)", () => {
    var e = escada(60)
    assert.equal(e[0].length, 60);
    assert.equal(e[59].length, 60);
  })
  
})
