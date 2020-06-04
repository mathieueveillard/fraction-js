import { Fraction } from ".";

describe("Fraction", function() {
  it("Should be able to add 0 to a fraction", function() {
    const f1 = new Fraction(1, 1);
    const f2 = new Fraction(0, 1);
    const actual = f1.plus(f2);
    const expected = f1;
    expect(actual).toEqual(expected);
  });

  it("Should be able to add two fractions with the same denominator", function() {
    const f1 = new Fraction(1, 1);
    const f2 = new Fraction(2, 1);
    const actual = f1.plus(f2);
    const expected = new Fraction(3, 1);
    expect(actual).toEqual(expected);
  });

  it("Should be able to multiply a fraction", function() {
    const f = new Fraction(1, 2);
    const actual = f.times(2);
    const expected = new Fraction(2, 4);
    expect(actual).toEqual(expected);
  });

  it("Should be able to add fractions with different denominators", function() {
    const f1 = new Fraction(1, 2);
    const f2 = new Fraction(1, 3);
    const actual = f1.plus(f2);
    const expected = new Fraction(5, 6);
    expect(actual).toEqual(expected);
  });

  it("Should be able to divide a fraction", function() {
    const f = new Fraction(2, 4);
    const actual = f.dividedBy(2);
    const expected = new Fraction(1, 2);
    expect(actual).toEqual(expected);
  });

  it("Should be able to reduce a fraction", function() {
    const f = new Fraction(6, 9);
    const actual = f.reduce();
    const expected = new Fraction(2, 3);
    expect(actual).toEqual(expected);
  });

  it("Should be able to add fractions with different denominators and reduce the resulting fraction", function() {
    const f1 = new Fraction(1, 4);
    const f2 = new Fraction(1, 4);
    const actual = f1.plus(f2);
    const expected = new Fraction(1, 2);
    expect(actual).toEqual(expected);
  });
});
