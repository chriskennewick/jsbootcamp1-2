describe("simple test", function() {
  it("passing test", function(){
    chai.expect(true).to.equal(true);
  });

  it("failing test", function(){
    chai.expect(false).to.equal(true);
  });
});
