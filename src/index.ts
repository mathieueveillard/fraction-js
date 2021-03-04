import { gcd } from "./gcd";

export class Fraction {
  constructor(private numerator: number, private denominator: number) {}

  scaleByMultiplication(value: number): Fraction {
    return new Fraction(this.numerator * value, this.denominator * value);
  }

  scaleByDivision(value: number): Fraction {
    return new Fraction(this.numerator / value, this.denominator / value);
  }

  reduce(): Fraction {
    return this.scaleByDivision(gcd(this.numerator, this.denominator));
  }

  plus(other: Fraction): Fraction {
    const f1 = this.scaleByMultiplication(other.denominator);
    const f2 = other.scaleByMultiplication(this.denominator);
    return new Fraction(f1.numerator + f2.numerator, f1.denominator).reduce();
  }
}
