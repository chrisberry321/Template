describe('leapYear', function() {
  it ("is false for a year that is not divisible by 4, 100, or 400", function(){
    excpect(leapYear(1993)).to.eaqual(false);
  });

  it("is true for years divisible by 4", function() {
    expect(leapYear(2204)).to.equal(true);
  });

  it("is false for years divisible by 100", function() {
    expect(leapYear(1990)).to.equal(false);

  it("is true for years divisible by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });
}):
